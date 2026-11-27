import { type Answers, type Question, hasValue } from "./types";
import { GENERAL_QUESTIONS, QUALIFYING_QUESTIONS, finalQuestions } from "./questions";
import { getOpenSections } from "./sections";

// Single source of truth for "which questions apply right now" — imported by
// both the client component (per-step validation) and the server action
// (final validation), so the two never drift out of sync.
export function getVisibleQuestions(answers: Answers): Question[] {
  const sectionQuestions = getOpenSections(answers).flatMap((section) => section.questions(answers));
  return [...GENERAL_QUESTIONS, ...QUALIFYING_QUESTIONS, ...sectionQuestions, ...finalQuestions(answers)];
}

export function isQuestionAnswered(question: Question, answers: Answers): boolean {
  if (!question.required) return true;
  return hasValue(answers, question.key);
}

export function validateAnswers(answers: Answers): string | null {
  for (const question of getVisibleQuestions(answers)) {
    if (!isQuestionAnswered(question, answers)) return `"${question.label}" is required.`;
  }
  return null;
}
