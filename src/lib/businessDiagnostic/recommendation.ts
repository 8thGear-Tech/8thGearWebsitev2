import { type Answers, getAnswer } from "./types";
import { B1 } from "./questions";
import { FLAGS, MAIN_SERVICE_EXTRA, type FlagKey, computeFlagsAndNotes } from "./flags";
import { applyGates } from "./gates";

export type RecommendationResult = {
  stage: string;
  mainService: string;
  flags: FlagKey[];
  extrasPrescribeNow: FlagKey[];
  extrasLater: FlagKey[];
  alsoFlagged: FlagKey[];
  gatesTriggered: string[];
  advisorNotes: string[];
  nextStepType: "Paid, book advisor call" | "Non-paid";
  urgency: "High" | "Medium" | "Low";
};

const STAGE_BY_B1: Record<string, string> = {
  [B1.IDEA_NOT_STARTED]: "Idea",
  [B1.STARTED_NEEDS_VALIDATION]: "Starting",
  [B1.STRUGGLE_SALES]: "Running",
  [B1.UNDERSTAND_MARKET]: "Ready to grow",
  [B1.EXPLORE_FUNDING]: "Ready to grow",
  [B1.NEEDS_MENTORSHIP]: "Established",
  [B1.OTHER]: "Unclassified",
};

const MAIN_SERVICE_BY_B1: Record<string, string> = {
  [B1.IDEA_NOT_STARTED]: FLAGS.EAT,
  [B1.STARTED_NEEDS_VALIDATION]: FLAGS.EAT,
  [B1.STRUGGLE_SALES]: MAIN_SERVICE_EXTRA.EGL,
  [B1.UNDERSTAND_MARKET]: FLAGS.MIRE_MARKET,
  [B1.EXPLORE_FUNDING]: FLAGS.MIRE_FUNDING,
  [B1.NEEDS_MENTORSHIP]: FLAGS.BAM,
  [B1.OTHER]: FLAGS.MANUAL_REVIEW,
};

const EGL_MODULE_FLAGS: FlagKey[] = [FLAGS.EGL_SALES, FLAGS.EGL_DIGITAL, FLAGS.EGL_FINANCE, FLAGS.EGL_OPS];
const SERVICE_CATEGORY_FLAGS: FlagKey[] = [FLAGS.EAT, ...EGL_MODULE_FLAGS, FLAGS.MIRE_MARKET, FLAGS.MIRE_FUNDING, FLAGS.BAM];

// Priority order for "prescribe now" (at most 2) — spec Part D2 step 4 (p.13).
const EXTRAS_PRIORITY: FlagKey[] = [FLAGS.LEGALMO, FLAGS.FINAMO, FLAGS.ZOHO_SETUP, FLAGS.ZOHO_TRAINING, FLAGS.DIGIPLUS, FLAGS.TALENMO, FLAGS.VIRTUAL_OFFICE];

export function computeRecommendation(answers: Answers): RecommendationResult {
  const b1 = getAnswer(answers, "B1");

  // Step 1 — stage.
  const stage = STAGE_BY_B1[b1] ?? "Unclassified";

  // Step 2 — main service, from B1 alone (B2-only qualifications never
  // become the main service — they show up in "also flagged" instead).
  const initialMainService = MAIN_SERVICE_BY_B1[b1] ?? FLAGS.MANUAL_REVIEW;

  const { flags: baseFlags, notes: baseNotes } = computeFlagsAndNotes(answers);

  // Step 3 — gates (may change main service, flags, and add notes).
  const gated = applyGates(answers, baseFlags, initialMainService);
  const flags = gated.flags;
  const mainService = gated.mainService;
  const advisorNotes = [...baseNotes, ...gated.notes];

  // Step 4 — extras: at most 2 "prescribe now", in priority order; the rest "later".
  const eligibleExtras = EXTRAS_PRIORITY.filter((flag) => flags.has(flag));
  const extrasPrescribeNow: FlagKey[] = [];
  const extrasLater: FlagKey[] = [];
  for (const flag of eligibleExtras) {
    if (extrasPrescribeNow.length < 2 && !gated.forceLater.has(flag)) {
      extrasPrescribeNow.push(flag);
    } else {
      extrasLater.push(flag);
    }
  }

  // Step 5 — "also flagged": other service-category flags set, that aren't
  // bundled into the main service. EGL_FINANCE-as-main-service (the
  // "no records" gate outcome) still bundles every EGL_* module, same as EGL.
  const bundlesEgl = mainService === MAIN_SERVICE_EXTRA.EGL || mainService === FLAGS.EGL_FINANCE;
  const alsoFlagged = SERVICE_CATEGORY_FLAGS.filter((flag) => {
    if (!flags.has(flag)) return false;
    if (bundlesEgl && EGL_MODULE_FLAGS.includes(flag)) return false;
    if (flag === mainService) return false;
    return true;
  });

  // Step 6 — next step.
  const qf01 = getAnswer(answers, "QF01");
  const qf03 = getAnswer(answers, "QF03");
  const nextStepType: RecommendationResult["nextStepType"] =
    gated.nextStepOverride === "Non-paid" || qf03 === "No" || qf01 === "Later" || qf01 === "Just exploring" ? "Non-paid" : "Paid, book advisor call";

  // Urgency, from QF01 — TAL02 "immediately" can raise (never lower) it.
  let urgency: RecommendationResult["urgency"] = qf01 === "As soon as possible" || qf01 === "Within 30 days" ? "High" : qf01 === "Within 3 months" ? "Medium" : "Low";
  if (getAnswer(answers, "TAL02") === "Yes, immediately") urgency = "High";

  return {
    stage,
    mainService,
    flags: Array.from(flags),
    extrasPrescribeNow,
    extrasLater,
    alsoFlagged,
    gatesTriggered: gated.gatesTriggered,
    advisorNotes,
    nextStepType,
    urgency,
  };
}
