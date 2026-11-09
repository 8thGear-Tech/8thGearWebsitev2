"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BUSINESS_CHECKUP_INTRO,
  BUSINESS_CHECKUP_SECTIONS,
  type BusinessCheckupQuestion,
} from "@/lib/businessCheckupQuestions";
import { submitBusinessCheckup } from "../_actions/submitBusinessCheckup";

type AnswerValue = string | string[];
type Answers = Record<string, AnswerValue>;

const TOTAL_STEPS = BUSINESS_CHECKUP_SECTIONS.length; // intro and the success screen aren't counted in the progress bar

function isQuestionAnswered(question: BusinessCheckupQuestion, value: AnswerValue | undefined): boolean {
  if (!question.required) return true;
  if (value === undefined) return false;
  return Array.isArray(value) ? value.length > 0 : value.trim().length > 0;
}

function QuestionField({
  question,
  value,
  onChange,
}: {
  question: BusinessCheckupQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const inputClasses =
    "w-full rounded-brand-sm border border-grey-border bg-white px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-teal";

  switch (question.type) {
    case "text":
      return (
        <input
          type={question.key === "email" ? "email" : "text"}
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
                  onChange={() =>
                    onChange(checked ? selected.filter((v) => v !== option) : [...selected, option])
                  }
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
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal">{BUSINESS_CHECKUP_INTRO.description}</p>
      <h1 className="mb-6 font-heading text-3xl text-primary md:text-4xl">{BUSINESS_CHECKUP_INTRO.title}</h1>
      <p className="mb-4 text-secondary leading-relaxed">{BUSINESS_CHECKUP_INTRO.paragraph}</p>
      <p className="mb-9 font-semibold text-primary">{BUSINESS_CHECKUP_INTRO.accent}</p>
      <button
        type="button"
        onClick={onStart}
        className="inline-flex items-center gap-3 rounded-full bg-purple px-8 py-4 font-heading font-bold text-white shadow-brand-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-hover"
      >
        Start the Checkup
      </button>
    </div>
  );
}

function SuccessStep() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-3xl text-white">✓</div>
      <h1 className="mb-4 font-heading text-3xl text-primary">Thank you, your checkup is in!</h1>
      <p className="mb-8 text-secondary leading-relaxed">
        We&apos;ve got your answers. Within 72 hours you&apos;ll receive a personalized report pinpointing your
        biggest bottleneck and how 8thGear can help.
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
  const [step, setStep] = useState(0); // 0 = intro, 1..TOTAL_STEPS = sections, TOTAL_STEPS + 1 = success
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const sectionIndex = step - 1;
  const section = sectionIndex >= 0 && sectionIndex < TOTAL_STEPS ? BUSINESS_CHECKUP_SECTIONS[sectionIndex] : null;
  const isLastSection = sectionIndex === TOTAL_STEPS - 1;

  const sectionIsValid =
    section?.questions.every((q) => isQuestionAnswered(q, answers[q.key])) ?? true;

  function setAnswer(key: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  async function handleNext() {
    setTouched(true);
    if (!sectionIsValid) return;

    if (!isLastSection) {
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
      setStep(TOTAL_STEPS + 1);
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

  if (step > TOTAL_STEPS) {
    return (
      <main className="bg-white px-4 py-20 md:py-28">
        <SuccessStep />
      </main>
    );
  }

  if (!section) return null;

  return (
    <main className="bg-grey-bg px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-secondary">
            <span>
              Section {sectionIndex + 1} of {TOTAL_STEPS}
            </span>
            <span>{Math.round(((sectionIndex + 1) / TOTAL_STEPS) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-grey-border">
            <div
              className="h-full rounded-full bg-purple transition-all"
              style={{ width: `${((sectionIndex + 1) / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-brand border border-grey-border bg-white p-6 shadow-brand md:p-10">
          <h2 className="mb-7 font-heading text-2xl text-primary">{section.title}</h2>

          <div className="flex flex-col gap-7">
            {section.questions.map((question) => (
              <div key={question.key}>
                <p className="mb-1 text-sm font-semibold text-primary">
                  {question.label}
                  {question.required && <span className="ml-1 text-purple">*</span>}
                </p>
                {question.help && <p className="mb-2 text-xs text-muted">{question.help}</p>}
                <QuestionField question={question} value={answers[question.key]} onChange={(v) => setAnswer(question.key, v)} />
                {touched && !isQuestionAnswered(question, answers[question.key]) && (
                  <p className="mt-1 text-xs text-[#d4333f]">This question is required.</p>
                )}
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
              {submitting ? "Submitting…" : isLastSection ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
