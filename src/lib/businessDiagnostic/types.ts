// Shared types for the 8thGear Business Diagnostic — see the spec PDF
// "8thGear Business Diagnostic | Automation specification" for the source of
// every rule referenced in this module's comments.

export type AnswerValue = string | string[] | undefined;
export type Answers = Record<string, AnswerValue>;

export type Question =
  | { key: string; label: string; help?: string; required: boolean; type: "text" }
  | { key: string; label: string; help?: string; required: boolean; type: "textarea" }
  | { key: string; label: string; help?: string; required: boolean; type: "select"; options: string[] }
  | { key: string; label: string; help?: string; required: boolean; type: "radio"; options: string[]; otherOption?: boolean }
  | { key: string; label: string; help?: string; required: boolean; type: "checkbox"; options: string[]; otherOption?: boolean }
  | {
      key: string;
      label: string;
      help?: string;
      required: boolean;
      type: "scale";
      min: number;
      max: number;
      minLabel: string;
      maxLabel: string;
    };

export function getAnswer(answers: Answers, key: string): string {
  const value = answers[key];
  return typeof value === "string" ? value : "";
}

export function getAnswerList(answers: Answers, key: string): string[] {
  const value = answers[key];
  return Array.isArray(value) ? value : [];
}

export function hasValue(answers: Answers, key: string): boolean {
  const value = answers[key];
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "string" && value.trim().length > 0;
}
