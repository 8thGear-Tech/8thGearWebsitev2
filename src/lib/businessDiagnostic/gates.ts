import { type Answers, getAnswer, hasValue } from "./types";
import { B1 } from "./questions";
import { isEatStrong } from "./sections";
import { FLAGS, MAIN_SERVICE_EXTRA, type FlagKey } from "./flags";

export type GatesResult = {
  mainService: string;
  flags: Set<FlagKey>;
  notes: string[];
  gatesTriggered: string[];
  nextStepOverride: "Non-paid" | null;
  /** Extras that must not be offered as "prescribe now" even if otherwise eligible — Idea-stage hold. */
  forceLater: Set<FlagKey>;
};

// Applies the 7 gates from spec Part D3 (p.14), in the order below — each
// gate's own "When" condition self-gates it, but Idea-stage hold is
// evaluated last because it depends on the *final* main service (which the
// earlier gates may have changed), and Registration-before-funding only
// matters once MIRE_FUNDING's final state is settled.
export function applyGates(answers: Answers, flags: Set<FlagKey>, mainService: string): GatesResult {
  const result: GatesResult = {
    mainService,
    flags: new Set(flags),
    notes: [],
    gatesTriggered: [],
    nextStepOverride: null,
    forceLater: new Set(),
  };

  // 1. Validation gate — B1=B, EAT01="Yes, already selling", and at least 2
  // of EAT02/EAT03/EAT04 are strong. Do not set EAT; main service becomes
  // EGL with EGL_SALES set.
  if (getAnswer(answers, "B1") === B1.STARTED_NEEDS_VALIDATION && getAnswer(answers, "EAT01") === "Yes, already selling") {
    const strongCount = (["EAT02", "EAT03", "EAT04"] as const).filter((key) => hasValue(answers, key) && isEatStrong(key, getAnswer(answers, key))).length;
    if (strongCount >= 2) {
      result.flags.delete(FLAGS.EAT);
      result.flags.add(FLAGS.EGL_SALES);
      result.mainService = MAIN_SERVICE_EXTRA.EGL;
      result.gatesTriggered.push("Validation gate");
    }
  }

  // 2/3. Commitment gates — only relevant when BAM is (or would be) the main
  // service, i.e. B1 = F (per D2 step 2, main service is set from B1 alone).
  if (result.mainService === FLAGS.BAM) {
    const bam03 = getAnswer(answers, "BAM03");
    const bam04 = getAnswer(answers, "BAM04");
    if (bam03 === "No" || bam04 === "No") {
      result.flags.delete(FLAGS.BAM);
      result.mainService = MAIN_SERVICE_EXTRA.NONE;
      result.nextStepOverride = "Non-paid";
      result.gatesTriggered.push("Commitment gate (BAM)");
    } else if (bam04 === "Maybe") {
      result.notes.push("Talk about commitment before prescribing.");
      result.gatesTriggered.push("Commitment gate, maybe");
    }
  }

  // 4/5/6. Records gates — only relevant when MIRE_FUNDING is set.
  if (result.flags.has(FLAGS.MIRE_FUNDING)) {
    const fnd04 = getAnswer(answers, "FND04");
    if (fnd04 === "Incomplete") {
      result.flags.add(FLAGS.FINAMO);
      result.notes.push("Records first or alongside.");
      result.gatesTriggered.push("Records gate (funding)");
    } else if (fnd04 === "Not currently maintained") {
      result.mainService = FLAGS.EGL_FINANCE;
      result.flags.add(FLAGS.ZOHO_SETUP);
      result.notes.push("MIRE Funding held as later, after records.");
      result.gatesTriggered.push("Records gate, no records");
    } else if (fnd04 === "Not sure") {
      result.notes.push("Advisor to check records before prescribing.");
      result.gatesTriggered.push("Records gate, unsure");
    }
  }

  // 7. Registration before funding — MIRE_FUNDING is set, and G10 is not Yes.
  if (result.flags.has(FLAGS.MIRE_FUNDING) && getAnswer(answers, "G10") !== "Yes") {
    result.flags.add(FLAGS.LEGALMO);
    result.notes.push("Funders usually require CAC; confirm per funder.");
    result.gatesTriggered.push("Registration before funding");
  }

  // Idea-stage hold — evaluated last, depends on the final main service.
  if (result.mainService === FLAGS.EAT) {
    result.forceLater.add(FLAGS.MIRE_MARKET);
    result.forceLater.add(FLAGS.MIRE_FUNDING);
    result.forceLater.add(FLAGS.DIGIPLUS);
    result.forceLater.add(FLAGS.ZOHO_SETUP);
    result.forceLater.add(FLAGS.ZOHO_TRAINING);
    result.forceLater.add(FLAGS.VIRTUAL_OFFICE);
    // LEGALMO and TALENMO deliberately stay allowed as prescribe-now candidates.
    result.gatesTriggered.push("Idea-stage hold");
  }

  return result;
}
