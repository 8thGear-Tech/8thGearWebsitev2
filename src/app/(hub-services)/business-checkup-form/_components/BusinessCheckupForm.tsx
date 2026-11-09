"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { type Answers, type AnswerValue, type Question, getAnswer } from "@/lib/businessDiagnostic/types";
import { GENERAL_QUESTIONS, QUALIFYING_QUESTIONS, finalQuestions } from "@/lib/businessDiagnostic/questions";
import { getOpenSections } from "@/lib/businessDiagnostic/sections";
import { isQuestionAnswered } from "@/lib/businessDiagnostic/validation";
import { submitBusinessCheckup } from "../_actions/submitBusinessCheckup";

// A "step" is either one of the two always-shown fixed stages, one of the
// sections that happens to be open right now, or the final stage — see
// stepList below, which is the only place this list is actually assembled.
type FixedStepKey = "GENERAL" | "FINAL";
type StepKey = FixedStepKey | string;

function stepContent(stepKey: StepKey, answers: Answers): { title: string; questions: Question[] } {
  if (stepKey === "GENERAL") return { title: "About You and Your Business", questions: [...GENERAL_QUESTIONS, ...QUALIFYING_QUESTIONS] };
  if (stepKey === "FINAL") return { title: "A Few Final Questions", questions: finalQuestions(answers) };
  const section = getOpenSections(answers).find((s) => s.id === stepKey);
  return { title: section?.title ?? "", questions: section?.questions(answers) ?? [] };
}

function QuestionField({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const inputClasses =
    "w-full rounded-brand-sm border border-grey-border bg-white px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-teal";

  switch (question.type) {
    case "text":
      return (
        <input
          type={question.key === "G02" ? "email" : question.key === "G03" ? "tel" : "text"}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        />
      );

    case "textarea":
      return (
        <textarea
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={inputClasses}
        />
      );

    case "select":
      return (
        <select value={(value as string) ?? ""} onChange={(e) => onChange(e.target.value)} className={inputClasses}>
          <option value="" disabled>
            Select an option
          </option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "radio":
      return (
        <div className="flex flex-col gap-2">
          {question.options.map((option) => (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 rounded-brand-sm border px-4 py-2.5 text-sm transition-colors ${
                value === option ? "border-teal bg-teal/5 text-primary" : "border-grey-border text-secondary hover:border-teal/40"
              }`}
            >
              <input
                type="radio"
                name={question.key}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
                className="mt-0.5 accent-teal"
              />
              {option}
            </label>
          ))}
          {question.otherOption && (
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-brand-sm border px-4 py-2.5 text-sm transition-colors ${
                typeof value === "string" && value.startsWith("Other:")
                  ? "border-teal bg-teal/5 text-primary"
                  : "border-grey-border text-secondary hover:border-teal/40"
              }`}
            >
              <input
                type="radio"
                name={question.key}
                checked={typeof value === "string" && value.startsWith("Other:")}
                onChange={() => onChange("Other: ")}
                className="accent-teal"
              />
              <span className="shrink-0">Other:</span>
              <input
                type="text"
                value={typeof value === "string" && value.startsWith("Other:") ? value.slice(6).trimStart() : ""}
                onFocus={() => {
                  if (!(typeof value === "string" && value.startsWith("Other:"))) onChange("Other: ");
                }}
                onChange={(e) => onChange(`Other: ${e.target.value}`)}
                className="min-w-0 flex-1 border-0 border-b border-grey-border bg-transparent text-sm outline-none focus:border-teal"
              />
            </label>
          )}
        </div>
      );

    case "checkbox": {
      const selected = Array.isArray(value) ? value : [];
      return (
        <div className="flex flex-col gap-2">
          {question.options.map((option) => {
            const checked = selected.includes(option);
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-start gap-3 rounded-brand-sm border px-4 py-2.5 text-sm transition-colors ${
                  checked ? "border-teal bg-teal/5 text-primary" : "border-grey-border text-secondary hover:border-teal/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onChange(checked ? selected.filter((v) => v !== option) : [...selected, option])}
                  className="mt-0.5 accent-teal"
                />
                {option}
              </label>
            );
          })}
        </div>
      );
    }

    case "scale": {
      const current = value ? Number(value) : undefined;
      const scaleValues = Array.from({ length: question.max - question.min + 1 }, (_, i) => question.min + i);
      return (
        <div>
          <div className="flex items-center justify-center gap-3">
            {scaleValues.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onChange(String(n))}
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  current === n ? "border-teal bg-teal text-white" : "border-grey-border text-secondary hover:border-teal/40"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span className="max-w-[45%]">{question.minLabel}</span>
            <span className="max-w-[45%] text-right">{question.maxLabel}</span>
          </div>
        </div>
      );
    }
  }
}

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal">Free Diagnostic for MSME Founders &amp; Managers</p>
      <h1 className="mb-6 font-heading text-3xl text-primary md:text-4xl">8thGear Business Diagnostic</h1>
      <p className="mb-4 text-secondary leading-relaxed">
        Not every founder needs the same thing, and we get that. Answer a short set of questions about your business
        — you&apos;ll only ever see the ones that actually apply to you.
      </p>
      <p className="mb-9 font-semibold text-primary">An advisor reviews every response personally before anything is recommended.</p>
      <button
        type="button"
        onClick={onStart}
        className="inline-flex items-center gap-3 rounded-full bg-purple px-8 py-4 font-heading font-bold text-white shadow-brand-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-hover"
      >
        Start the Diagnostic
      </button>
    </div>
  );
}

function SuccessStep() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-3xl text-white">✓</div>
      <h1 className="mb-4 font-heading text-3xl text-primary">Thank you — we&apos;ve got it.</h1>
      <p className="mb-8 text-secondary leading-relaxed">
        An 8thGear advisor will review your answers. If there&apos;s a good next step for your business, they&apos;ll
        be in touch.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 rounded-full bg-purple px-8 py-4 font-heading font-bold text-white shadow-brand-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-hover"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

export function BusinessCheckupForm() {
  const [step, setStep] = useState(0); // 0 = intro, 1..N = stepList, N+1 = success
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  // Only the qualifying answers can change which sections are open — recompute
  // the walk off just those, not every keystroke (build rule #7, "recalculate
  // on change"; the rest of a section's own question list is recomputed at
  // render time by stepContent() regardless).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stepList = useMemo<StepKey[]>(() => ["GENERAL", ...getOpenSections(answers).map((s) => s.id), "FINAL"], [answers.B1, answers.B2, answers.G10, answers.G11]);

  const stepIndex = step - 1;
  const totalSteps = stepList.length;
  const currentKey = stepIndex >= 0 && stepIndex < totalSteps ? stepList[stepIndex] : null;
  const isLastStep = stepIndex === totalSteps - 1;

  const current = currentKey ? stepContent(currentKey, answers) : null;
  const stepIsValid = current?.questions.every((q) => isQuestionAnswered(q, answers)) ?? true;

  function setAnswer(key: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  async function handleNext() {
    setTouched(true);
    if (!stepIsValid) return;

    if (!isLastStep) {
      setTouched(false);
      setStep((s) => s + 1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitBusinessCheckup(answers);
      if (!result.ok) throw new Error(result.error);
      setTouched(false);
      setStep(totalSteps + 1);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === 0) {
    return (
      <main className="bg-white px-4 py-20 md:py-28">
        <IntroStep onStart={() => setStep(1)} />
      </main>
    );
  }

  if (step > totalSteps) {
    return (
      <main className="bg-white px-4 py-20 md:py-28">
        <SuccessStep />
      </main>
    );
  }

  if (!current) return null;

  return (
    <main className="bg-grey-bg px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-secondary">
            <span>
              Step {stepIndex + 1} of {totalSteps}
            </span>
            <span>{Math.round(((stepIndex + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-grey-border">
            <div
              className="h-full rounded-full bg-purple transition-all"
              style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-brand border border-grey-border bg-white p-6 shadow-brand md:p-10">
          <h2 className="mb-7 font-heading text-2xl text-primary">{current.title}</h2>

          <div className="flex flex-col gap-7">
            {current.questions.map((question) => (
              <div key={question.key}>
                <p className="mb-1 text-sm font-semibold text-primary">
                  {question.label}
                  {question.required && <span className="ml-1 text-purple">*</span>}
                </p>
                {question.key === "MKT05" && getAnswer(answers, "G08") && (
                  <p className="mb-2 rounded-brand-sm bg-grey-bg px-3 py-2 text-xs italic text-secondary">
                    From your earlier answer: &ldquo;{getAnswer(answers, "G08")}&rdquo;
                  </p>
                )}
                {question.help && <p className="mb-2 text-xs text-muted">{question.help}</p>}
                <QuestionField question={question} value={answers[question.key]} onChange={(v) => setAnswer(question.key, v)} />
                {touched && !isQuestionAnswered(question, answers) && <p className="mt-1 text-xs text-[#d4333f]">This question is required.</p>}
              </div>
            ))}
          </div>

          {submitError && <p className="mt-6 text-sm text-[#d4333f]">{submitError}</p>}

          <div className="mt-9 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={submitting}
              className="rounded-full border border-grey-border px-6 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-purple hover:text-purple disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={submitting}
              className="rounded-full bg-purple px-8 py-2.5 text-sm font-bold text-white shadow-brand transition-colors hover:bg-purple-hover disabled:opacity-60"
            >
              {submitting ? "Submitting…" : isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
