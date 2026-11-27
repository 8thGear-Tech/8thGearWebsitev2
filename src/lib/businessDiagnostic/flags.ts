import { type Answers, getAnswer, getAnswerList, hasValue } from "./types";
import { B1, B2_OPTIONS } from "./questions";
import { getFND04, isEatStrong } from "./sections";

// Every flag is a yes/no field on the lead record — spec Part D1 (p.12-13).
// Flags are never overwritten by one another (build rule #3): this module
// returns a Set, and every rule below only ever adds to it.
export const FLAGS = {
  EAT: "EAT",
  EGL_SALES: "EGL_SALES",
  EGL_DIGITAL: "EGL_DIGITAL",
  EGL_FINANCE: "EGL_FINANCE",
  EGL_OPS: "EGL_OPS",
  MIRE_MARKET: "MIRE_MARKET",
  MIRE_FUNDING: "MIRE_FUNDING",
  BAM: "BAM",
  LEGALMO: "LEGALMO",
  FINAMO: "FINAMO",
  ZOHO_SETUP: "ZOHO_SETUP",
  ZOHO_TRAINING: "ZOHO_TRAINING",
  DIGIPLUS: "DIGIPLUS",
  TALENMO: "TALENMO",
  VIRTUAL_OFFICE: "VIRTUAL_OFFICE",
  MANUAL_REVIEW: "MANUAL_REVIEW",
} as const;

export type FlagKey = (typeof FLAGS)[keyof typeof FLAGS];

// Main-service values beyond the 16 D1 flags above: "EGL" (bundles every
// EGL_* module flag when EGL is the main service — D2 step 2) and "NONE" (a
// gate removed the main service with no specified replacement, e.g. the BAM
// commitment gate, p.14).
export const MAIN_SERVICE_EXTRA = {
  EGL: "EGL",
  NONE: "NONE",
} as const;

export type FlagsAndNotes = { flags: Set<FlagKey>; notes: string[] };

// Recomputes every flag and advisor note from scratch on every call — a pure
// function of `answers`, which is what makes "recalculate on change" (build
// rule #7) trivial: changing an answer and calling this again is the whole
// mechanism, no manual diffing needed.
export function computeFlagsAndNotes(answers: Answers): FlagsAndNotes {
  const flags = new Set<FlagKey>();
  const notes: string[] = [];
  const add = (flag: FlagKey) => flags.add(flag);

  const b1 = getAnswer(answers, "B1");
  const b2 = getAnswerList(answers, "B2");

  // ── B1 / B2 (Part B) ─────────────────────────────────────────────────
  if (b1 === B1.OTHER) add(FLAGS.MANUAL_REVIEW);
  if (b2.includes(B2_OPTIONS.OTHER)) add(FLAGS.MANUAL_REVIEW);

  // B2's own flags fire immediately on selection (spec p.4-5), independent
  // of whether the section itself ends up open (it always does, by design —
  // these are exactly the section-opening triggers) or sets further flags.
  if (b2.includes(B2_OPTIONS.SALES)) add(FLAGS.EGL_SALES);
  if (b2.includes(B2_OPTIONS.DIGITAL)) add(FLAGS.EGL_DIGITAL);
  if (b2.includes(B2_OPTIONS.FINANCE)) add(FLAGS.EGL_FINANCE);
  if (b2.includes(B2_OPTIONS.MARKET)) add(FLAGS.MIRE_MARKET);
  if (b2.includes(B2_OPTIONS.FUNDING)) add(FLAGS.MIRE_FUNDING);
  // B2's mentorship option "opens BAM section... Flag set: BAM (only if it
  // passes the commitment gate)" — handled by the BAM03/BAM04 rule below,
  // not set directly here.
  if (b2.includes(B2_OPTIONS.CAC_IP)) add(FLAGS.LEGALMO);
  if (b2.includes(B2_OPTIONS.TECHNICAL_TALENT)) add(FLAGS.TALENMO);
  if (b2.includes(B2_OPTIONS.ADDRESS)) add(FLAGS.VIRTUAL_OFFICE);

  // ── EAT (Part C1, p.6) ───────────────────────────────────────────────
  // Sets EAT when B1=A; or B1=B and at least 2 of EAT02/EAT03/EAT04 are weak;
  // or G11=Not started and B1 is not C, D, E or F.
  const eatWeakCount = (["EAT02", "EAT03", "EAT04"] as const).filter((key) => hasValue(answers, key) && !isEatStrong(key, getAnswer(answers, key))).length;
  const g11 = getAnswer(answers, "G11");
  if (b1 === B1.IDEA_NOT_STARTED) add(FLAGS.EAT);
  else if (b1 === B1.STARTED_NEEDS_VALIDATION && eatWeakCount >= 2) add(FLAGS.EAT);
  else if (g11 === "Not started" && ![B1.STRUGGLE_SALES, B1.UNDERSTAND_MARKET, B1.EXPLORE_FUNDING, B1.NEEDS_MENTORSHIP].includes(b1 as never)) add(FLAGS.EAT);

  // ── EGL (Part C2, p.7-8) ─────────────────────────────────────────────
  const egl01 = getAnswer(answers, "EGL01");
  if (hasValue(answers, "EGL01") && egl01 !== "Other") add(FLAGS.EGL_SALES);
  if (egl01 === "Other") notes.push("EGL01: respondent's biggest sales challenge wasn't listed — needs review.");

  const egl02 = getAnswer(answers, "EGL02");
  if (egl02 === "Unpredictable") add(FLAGS.EGL_SALES);
  if (egl02 === "No sales yet") notes.push("Check stage, may need EAT.");

  const egl03 = getAnswer(answers, "EGL03");
  if (egl03 === "1" || egl03 === "2") add(FLAGS.EGL_SALES);

  const egl04 = getAnswerList(answers, "EGL04");
  // "None selected, or no payment tool selected, sets EGL DIGITAL. This
  // answer never sets DIGIPLUS." — "no payment tool selected" subsumes
  // "none selected" (if None is the only pick, Payment tool isn't in the list).
  if (hasValue(answers, "EGL04") && !egl04.includes("Payment tool")) add(FLAGS.EGL_DIGITAL);

  const egl05 = getAnswerList(answers, "EGL05");
  if (egl05.includes("None")) add(FLAGS.EGL_OPS);

  const egl06 = getAnswer(answers, "EGL06");
  if (egl06 === "1" || egl06 === "2") add(FLAGS.EGL_FINANCE);

  const egl07 = getAnswer(answers, "EGL07");
  if (hasValue(answers, "EGL07") && egl07 !== "Other") add(FLAGS.EGL_FINANCE);
  if (egl07 === "Pricing") add(FLAGS.EGL_SALES);

  // ── Shared records question, FND04 (p.8-9) ──────────────────────────
  // "Incomplete sets FINAMO. Not currently maintained sets EGL FINANCE and
  // ZOHO SETUP. Not sure adds an advisor note. Up to date sets nothing."
  const fnd04 = getFND04(answers);
  if (fnd04 === "Incomplete") add(FLAGS.FINAMO);
  if (fnd04 === "Not currently maintained") {
    add(FLAGS.EGL_FINANCE);
    add(FLAGS.ZOHO_SETUP);
  }
  if (fnd04 === "Not sure") notes.push("FND04: not sure if records are current — advisor to check before prescribing.");

  // ── Market (Part C3, p.8) ────────────────────────────────────────────
  const mkt03 = getAnswer(answers, "MKT03");
  if (mkt03 === "Research only" || mkt03 === "No evidence yet") notes.push("Test demand first.");

  const mkt04 = getAnswer(answers, "MKT04");
  if (hasValue(answers, "MKT04") && mkt04 !== "Other") add(FLAGS.MIRE_MARKET);
  if (mkt04 === "Reaching buyers" || mkt04 === "Distribution") add(FLAGS.EGL_SALES);

  // ── Funding (Part C4, p.8-9) ─────────────────────────────────────────
  if (hasValue(answers, "FND01")) add(FLAGS.MIRE_FUNDING);

  const fnd05 = getAnswer(answers, "FND05");
  if (fnd05 === "In progress" || fnd05 === "No") notes.push("Plan needed.");

  const fnd06 = getAnswer(answers, "FND06");
  if (fnd06 === "1" || fnd06 === "2") notes.push("Documents not ready.");

  const fnd07 = getAnswer(answers, "FND07");
  // "Financial records: treat as records incomplete (sets FINAMO), unless
  // FND04 = not currently maintained." (that branch already set EGL_FINANCE
  // + ZOHO_SETUP above instead — the two are treated as alternates.)
  if (fnd07 === "Financial records" && fnd04 !== "Not currently maintained") add(FLAGS.FINAMO);

  // ── BAM (Part C5, p.9-10) ────────────────────────────────────────────
  // "Sets BAM only when BAM03 is not No and BAM04 = Yes."
  const bam03 = getAnswer(answers, "BAM03");
  const bam04 = getAnswer(answers, "BAM04");
  if (bam03 && bam03 !== "No" && bam04 === "Yes") add(FLAGS.BAM);

  // ── Service follow-ups (Part C6, p.10-11) ───────────────────────────
  if (hasValue(answers, "LEG01")) add(FLAGS.LEGALMO);
  if (getAnswer(answers, "G10") === "In progress" && hasValue(answers, "LEG01")) notes.push("Check if already with another agent.");

  const zoh02 = getAnswer(answers, "ZOH02");
  if (zoh02 === "No") add(FLAGS.ZOHO_SETUP);
  if (zoh02 === "Yes, but we barely use it") add(FLAGS.ZOHO_TRAINING);

  const dig01 = getAnswer(answers, "DIG01");
  if (dig01 === "No website" || dig01 === "Yes, but it is outdated or weak") add(FLAGS.DIGIPLUS);

  if (hasValue(answers, "TAL01")) add(FLAGS.TALENMO);

  if (hasValue(answers, "VO01")) add(FLAGS.VIRTUAL_OFFICE);

  // ── Lead-only background (build rule #6) — explicitly never flags ────
  // Business age, team size, sector, role, solo founder, working from home,
  // interest in a community, and high customer-clarity scores are background
  // for the advisor and deliberately set nothing above. (EGL03 is the one
  // "clarity" scale that DOES set a flag at 1-2 — note it's the exception
  // the spec calls out, not this general rule.)

  return { flags, notes };
}
