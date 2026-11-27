"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { notifyFormSubmission } from "@/lib/formSubmissionWebhook";
import { type Answers, getAnswer } from "@/lib/businessDiagnostic/types";
import { validateAnswers, getVisibleQuestions } from "@/lib/businessDiagnostic/validation";
import { computeRecommendation } from "@/lib/businessDiagnostic/recommendation";

type SubmitResult = { ok: true; id: string } | { ok: false; error: string };

function summaryRow(label: string, value: string): string {
  return `<tr><td style="padding:6px 10px;font-weight:600;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 10px;">${value}</td></tr>`;
}

function answersToEmailHtml(answers: Answers, rec: ReturnType<typeof computeRecommendation>): string {
  const summary = [
    summaryRow("Stage", rec.stage),
    summaryRow("Main service", rec.mainService),
    summaryRow("Flags", rec.flags.join(", ") || "—"),
    summaryRow("Extras — prescribe now", rec.extrasPrescribeNow.join(", ") || "—"),
    summaryRow("Extras — later", rec.extrasLater.join(", ") || "—"),
    summaryRow("Also flagged", rec.alsoFlagged.join(", ") || "—"),
    summaryRow("Gates triggered", rec.gatesTriggered.join(", ") || "—"),
    summaryRow("Advisor notes", rec.advisorNotes.join("; ") || "—"),
    summaryRow("Next step", rec.nextStepType),
    summaryRow("Urgency", rec.urgency),
  ].join("");

  const answerRows = getVisibleQuestions(answers)
    .map((q) => {
      const value = answers[q.key];
      const display = Array.isArray(value) ? value.join(", ") : value || "—";
      return summaryRow(q.label, display);
    })
    .join("");

  const table = (rows: string) => `<table cellspacing="0" cellpadding="0" style="font-family:sans-serif;font-size:13px;border-collapse:collapse;">${rows}</table>`;
  return `${table(summary)}<br/><br/>${table(answerRows)}`;
}

export async function submitBusinessCheckup(answers: Answers): Promise<SubmitResult> {
  const validationError = validateAnswers(answers);
  if (validationError) return { ok: false, error: validationError };

  const fullName = getAnswer(answers, "G01");
  const email = getAnswer(answers, "G02");
  const phone = getAnswer(answers, "G03");
  const businessName = getAnswer(answers, "G04");

  const rec = computeRecommendation(answers);

  let id: string;
  try {
    const submission = await prisma.businessCheckupSubmission.create({
      data: {
        fullName,
        email,
        phone,
        businessName,
        answers,
        stage: rec.stage,
        mainService: rec.mainService,
        flags: rec.flags,
        extrasPrescribeNow: rec.extrasPrescribeNow,
        extrasLater: rec.extrasLater,
        alsoFlagged: rec.alsoFlagged,
        gatesTriggered: rec.gatesTriggered,
        advisorNotes: rec.advisorNotes,
        nextStepType: rec.nextStepType,
        urgency: rec.urgency,
        leadSource: getAnswer(answers, "G09") || null,
        sector: getAnswer(answers, "G05") || null,
        cacStatus: getAnswer(answers, "G10") || null,
      },
    });
    id = submission.id;
  } catch (error) {
    console.error("business-checkup: failed to save submission", error);
    return { ok: false, error: "Could not save your submission. Please try again." };
  }

  // Notification email and webhook are best-effort: the submission is already saved, so a flaky
  // email provider or downstream endpoint shouldn't make the visitor think their submission failed.
  const notifyEmail = process.env.BUSINESS_CHECKUP_NOTIFY_EMAIL;
  const fromEmail = process.env.BUSINESS_CHECKUP_FROM_EMAIL;
  if (process.env.RESEND_API_KEY && notifyEmail && fromEmail) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: fromEmail,
        to: notifyEmail,
        subject: `Business Diagnostic: ${businessName || fullName} — ${rec.mainService}`,
        html: answersToEmailHtml(answers, rec),
      });
    } catch (error) {
      console.error("business-checkup: failed to send notification email", error);
    }
  }

  // Flat payload (raw answers + the computed summary, both at the top level) so
  // 8thGear Internal Tools' generic payload table — which humanizes each key as
  // its own row — renders something close to a full "lead record" with zero
  // changes needed on that side.
  try {
    await notifyFormSubmission({
      id,
      formName: "Full Business Checkup",
      payload: {
        ...answers,
        diagnosticStage: rec.stage,
        diagnosticMainService: rec.mainService,
        diagnosticFlags: rec.flags,
        diagnosticExtrasPrescribeNow: rec.extrasPrescribeNow,
        diagnosticExtrasLater: rec.extrasLater,
        diagnosticAlsoFlagged: rec.alsoFlagged,
        diagnosticGatesTriggered: rec.gatesTriggered,
        diagnosticAdvisorNotes: rec.advisorNotes,
        diagnosticNextStep: rec.nextStepType,
        diagnosticUrgency: rec.urgency,
      },
      submitterEmail: email || null,
    });
  } catch (error) {
    console.error("business-checkup: failed to notify 8thGear Internal Tools", error);
  }

  return { ok: true, id };
}
