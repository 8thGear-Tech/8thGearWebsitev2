"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { notifyFormSubmission } from "@/lib/formSubmissionWebhook";
import { BUSINESS_CHECKUP_SECTIONS } from "@/lib/businessCheckupQuestions";

type Answers = Record<string, string | string[] | undefined>;
type SubmitResult = { ok: true; id: string } | { ok: false; error: string };

function validateAnswers(answers: Answers): string | null {
  for (const section of BUSINESS_CHECKUP_SECTIONS) {
    for (const question of section.questions) {
      if (!question.required) continue;
      const value = answers[question.key];
      const isEmpty = value === undefined || value === "" || (Array.isArray(value) && value.length === 0);
      if (isEmpty) return `"${question.label}" is required.`;
    }
  }
  return null;
}

function answersToEmailHtml(answers: Answers): string {
  const rows = BUSINESS_CHECKUP_SECTIONS.flatMap((section) =>
    section.questions.map((q) => {
      const value = answers[q.key];
      const display = Array.isArray(value) ? value.join(", ") : value || "—";
      return `<tr><td style="padding:6px 10px;font-weight:600;vertical-align:top;white-space:nowrap;">${q.label}</td><td style="padding:6px 10px;">${display}</td></tr>`;
    }),
  );
  return `<table cellspacing="0" cellpadding="0" style="font-family:sans-serif;font-size:13px;border-collapse:collapse;">${rows.join("")}</table>`;
}

export async function submitBusinessCheckup(answers: Answers): Promise<SubmitResult> {
  const validationError = validateAnswers(answers);
  if (validationError) return { ok: false, error: validationError };

  const fullName = String(answers.fullName ?? "");
  const email = String(answers.email ?? "");
  const whatsappPhone = String(answers.whatsappPhone ?? "");
  const callPhone = String(answers.callPhone ?? "");
  const businessName = String(answers.businessName ?? "");

  let id: string;
  try {
    const submission = await prisma.businessCheckupSubmission.create({
      data: { fullName, email, whatsappPhone, callPhone, businessName, answers },
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
        subject: `Full Business Checkup: ${businessName || fullName}`,
        html: answersToEmailHtml(answers),
      });
    } catch (error) {
      console.error("business-checkup: failed to send notification email", error);
    }
  }

  try {
    await notifyFormSubmission({
      id,
      formName: "Full Business Checkup",
      payload: answers,
      submitterEmail: email || null,
    });
  } catch (error) {
    console.error("business-checkup: failed to notify 8thGear Internal Tools", error);
  }

  return { ok: true, id };
}
