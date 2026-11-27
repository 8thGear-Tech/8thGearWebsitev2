// Runs the 14 test cases from the "8thGear Business Diagnostic" spec, Part E
// (p.16-17), against the pure rules engine in src/lib/businessDiagnostic.
// No DB/network — just the branching, flag, gate and recommendation logic.
//
//   npx tsx scripts/test-business-diagnostic-cases.ts

import { type Answers } from "../src/lib/businessDiagnostic/types";
import { B1, B2_OPTIONS } from "../src/lib/businessDiagnostic/questions";
import { getOpenSections } from "../src/lib/businessDiagnostic/sections";
import { computeRecommendation } from "../src/lib/businessDiagnostic/recommendation";
import { FLAGS, MAIN_SERVICE_EXTRA } from "../src/lib/businessDiagnostic/flags";

type Check = { label: string; pass: boolean; detail?: string };

function openIds(answers: Answers): string[] {
  return getOpenSections(answers).map((s) => s.id);
}

function check(label: string, pass: boolean, detail?: string): Check {
  return { label, pass, detail };
}

function runCase(name: string, answers: Answers, checks: (ctx: { opens: string[]; rec: ReturnType<typeof computeRecommendation> }) => Check[]): { name: string; checks: Check[] } {
  const opens = openIds(answers);
  const rec = computeRecommendation(answers);
  return { name, checks: checks({ opens, rec }) };
}

const results: { name: string; checks: Check[] }[] = [];

// 1. Idea-stage founder
results.push(
  runCase(
    "1. Idea-stage founder",
    { B1: B1.IDEA_NOT_STARTED, G10: "No", G11: "Less than 6 months", LEG01: "CAC registration" },
    ({ opens, rec }) => [
      check("opens EAT + LEGALMO", opens.includes("EAT") && opens.includes("LEGALMO"), opens.join(",")),
      check("main service EAT", rec.mainService === FLAGS.EAT, rec.mainService),
      check("extra LEGALMO", rec.extrasPrescribeNow.includes(FLAGS.LEGALMO), rec.extrasPrescribeNow.join(",")),
      check("stage Idea", rec.stage === "Idea", rec.stage),
    ],
  ),
);

// 2. Operating, inconsistent sales
results.push(
  runCase(
    "2. Operating, inconsistent sales",
    { B1: B1.STRUGGLE_SALES, G10: "Yes", G11: "1–3 years", EGL01: "Inconsistent sales" },
    ({ opens, rec }) => [
      check("opens EGL", opens.includes("EGL"), opens.join(",")),
      check("main service EGL", rec.mainService === MAIN_SERVICE_EXTRA.EGL, rec.mainService),
      check("EGL_SALES set", rec.flags.includes(FLAGS.EGL_SALES), rec.flags.join(",")),
      check("no EAT", !rec.flags.includes(FLAGS.EAT)),
      check("no BAM", !rec.flags.includes(FLAGS.BAM)),
    ],
  ),
);

// 3. New market only
results.push(
  runCase("3. New market only", { B1: B1.UNDERSTAND_MARKET, G10: "Yes", B2: [], MKT04: "Understanding customers" }, ({ opens, rec }) => [
    check("opens Market only", opens.length === 1 && opens[0] === "MARKET", opens.join(",")),
    check("main service MIRE_MARKET", rec.mainService === FLAGS.MIRE_MARKET, rec.mainService),
    check("no funding questions", !opens.includes("FUNDING")),
  ]),
);

// 4. Funding, incomplete records
results.push(
  runCase("4. Funding, incomplete records", { B1: B1.EXPLORE_FUNDING, G10: "Yes", FND01: "Loan", FND04: "Incomplete" }, ({ rec }) => [
    check("main service MIRE_FUNDING", rec.mainService === FLAGS.MIRE_FUNDING, rec.mainService),
    check("extra FINAMO", rec.extrasPrescribeNow.includes(FLAGS.FINAMO), rec.extrasPrescribeNow.join(",")),
    check("note records first", rec.advisorNotes.some((n) => n.includes("Records first")), rec.advisorNotes.join(" | ")),
  ]),
);

// 5. Funding, no records
results.push(
  runCase("5. Funding, no records", { B1: B1.EXPLORE_FUNDING, G10: "Yes", FND01: "Loan", FND04: "Not currently maintained" }, ({ rec }) => [
    check("main service EGL_FINANCE", rec.mainService === FLAGS.EGL_FINANCE, rec.mainService),
    check("MIRE_FUNDING also flagged (later)", rec.alsoFlagged.includes(FLAGS.MIRE_FUNDING), rec.alsoFlagged.join(",")),
    check("ZOHO_SETUP set", rec.flags.includes(FLAGS.ZOHO_SETUP), rec.flags.join(",")),
  ]),
);

// 6. Accountability and sales
results.push(
  runCase(
    "6. Accountability and sales",
    { B1: B1.NEEDS_MENTORSHIP, B2: [B2_OPTIONS.SALES], BAM03: "Yes", BAM04: "Yes" },
    ({ opens, rec }) => [
      check("opens BAM + EGL", opens.includes("BAM") && opens.includes("EGL"), opens.join(",")),
      check("main service BAM", rec.mainService === FLAGS.BAM, rec.mainService),
      check("also flagged EGL_SALES", rec.alsoFlagged.includes(FLAGS.EGL_SALES), rec.alsoFlagged.join(",")),
    ],
  ),
);

// 7. Mentorship, no commitment
results.push(
  runCase("7. Mentorship, no commitment", { B1: B1.NEEDS_MENTORSHIP, BAM04: "No" }, ({ rec }) => [
    check("no BAM flag", !rec.flags.includes(FLAGS.BAM), rec.flags.join(",")),
    check("next step Non-paid", rec.nextStepType === "Non-paid", rec.nextStepType),
  ]),
);

// 8. Unregistered, wants sales help
results.push(
  runCase("8. Unregistered, wants sales help", { B1: B1.STRUGGLE_SALES, G10: "No", EGL01: "Converting enquiries", LEG01: "CAC registration" }, ({ opens, rec }) => [
    check("opens EGL + LEGALMO", opens.includes("EGL") && opens.includes("LEGALMO"), opens.join(",")),
    check("main service EGL", rec.mainService === MAIN_SERVICE_EXTRA.EGL, rec.mainService),
    check("LEGALMO is an extra", rec.extrasPrescribeNow.includes(FLAGS.LEGALMO), rec.extrasPrescribeNow.join(",")),
  ]),
);

// 9. Website and CRM
results.push(
  runCase(
    "9. Website and CRM",
    { B1: B1.STRUGGLE_SALES, B2: [B2_OPTIONS.DIGITAL, B2_OPTIONS.SOFTWARE], DIG01: "No website", ZOH02: "No" },
    ({ opens, rec }) => [
      check("opens EGL + WEBSITE + SOFTWARE", ["EGL", "WEBSITE", "SOFTWARE"].every((id) => opens.includes(id)), opens.join(",")),
      check("main service EGL", rec.mainService === MAIN_SERVICE_EXTRA.EGL, rec.mainService),
      check(
        "extras DIGIPLUS + ZOHO_SETUP",
        rec.extrasPrescribeNow.includes(FLAGS.DIGIPLUS) && rec.extrasPrescribeNow.includes(FLAGS.ZOHO_SETUP),
        rec.extrasPrescribeNow.join(","),
      ),
    ],
  ),
);

// 10. Already validated
results.push(
  runCase(
    "10. Already validated",
    { B1: B1.STARTED_NEEDS_VALIDATION, EAT01: "Yes, already selling", EAT02: "Yes", EAT03: "Yes, with evidence" },
    ({ rec }) => [
      check("validation gate fired", rec.gatesTriggered.includes("Validation gate"), rec.gatesTriggered.join(",")),
      check("main service EGL, not EAT", rec.mainService === MAIN_SERVICE_EXTRA.EGL, rec.mainService),
    ],
  ),
);

// 11. Market plus finance
results.push(
  runCase("11. Market plus finance", { B1: B1.UNDERSTAND_MARKET, B2: [B2_OPTIONS.FINANCE], MKT04: "Understanding customers", FND04: "Up to date" }, ({ opens, rec }) => [
    check("opens Market + EGL", opens.includes("MARKET") && opens.includes("EGL"), opens.join(",")),
    check("EGL shown once", opens.filter((id) => id === "EGL").length === 1),
    check("main service MIRE_MARKET", rec.mainService === FLAGS.MIRE_MARKET, rec.mainService),
    check("also flagged EGL_FINANCE", rec.alsoFlagged.includes(FLAGS.EGL_FINANCE), rec.alsoFlagged.join(",")),
    check("no funding questions", !opens.includes("FUNDING")),
  ]),
);

// 12. Registered, no finance need
results.push(
  runCase("12. Registered, no finance need", { B1: B1.UNDERSTAND_MARKET, G10: "Yes", B2: [] }, ({ opens }) => [
    check("no EGL (finance questions)", !opens.includes("EGL"), opens.join(",")),
    check("no LegalMo follow-up", !opens.includes("LEGALMO"), opens.join(",")),
  ]),
);

// 13. Two answers open EGL
results.push(
  runCase("13. Two answers open EGL", { B1: B1.UNDERSTAND_MARKET, B2: [B2_OPTIONS.SALES, B2_OPTIONS.FINANCE] }, ({ opens, rec }) => [
    check("opens Market + EGL", opens.includes("MARKET") && opens.includes("EGL"), opens.join(",")),
    check("EGL shown once, not twice", opens.filter((id) => id === "EGL").length === 1),
    check("main service MIRE_MARKET", rec.mainService === FLAGS.MIRE_MARKET, rec.mainService),
    check(
      "also flagged EGL_SALES + EGL_FINANCE",
      rec.alsoFlagged.includes(FLAGS.EGL_SALES) && rec.alsoFlagged.includes(FLAGS.EGL_FINANCE),
      rec.alsoFlagged.join(","),
    ),
  ]),
);

// 14. Funding plus finance
results.push(
  runCase("14. Funding plus finance", { B1: B1.EXPLORE_FUNDING, G10: "Yes", B2: [B2_OPTIONS.FINANCE], FND01: "Loan", FND04: "Up to date" }, ({ opens, rec }) => {
    const egl = getOpenSections({ B1: B1.EXPLORE_FUNDING, G10: "Yes", B2: [B2_OPTIONS.FINANCE], FND01: "Loan", FND04: "Up to date" }).find((s) => s.id === "EGL");
    const funding = getOpenSections({ B1: B1.EXPLORE_FUNDING, G10: "Yes", B2: [B2_OPTIONS.FINANCE], FND01: "Loan", FND04: "Up to date" }).find((s) => s.id === "FUNDING");
    const answers: Answers = { B1: B1.EXPLORE_FUNDING, G10: "Yes", B2: [B2_OPTIONS.FINANCE], FND01: "Loan", FND04: "Up to date" };
    const eglHasFnd04 = egl?.questions(answers).some((q) => q.key === "FND04") ?? false;
    const fundingHasFnd04 = funding?.questions(answers).some((q) => q.key === "FND04") ?? false;
    return [
      check("opens EGL + Funding", opens.includes("EGL") && opens.includes("FUNDING"), opens.join(",")),
      check("FND04 asked in EGL", eglHasFnd04),
      check("FND04 not re-asked in Funding", !fundingHasFnd04),
      check("main service MIRE_FUNDING", rec.mainService === FLAGS.MIRE_FUNDING, rec.mainService),
    ];
  }),
);

let totalPass = 0;
let totalFail = 0;
for (const { name, checks } of results) {
  const allPass = checks.every((c) => c.pass);
  console.log(`${allPass ? "✓" : "✗"} ${name}`);
  for (const c of checks) {
    if (!c.pass) {
      console.log(`    ✗ ${c.label}${c.detail ? ` (got: ${c.detail})` : ""}`);
      totalFail++;
    } else {
      totalPass++;
    }
  }
}

console.log(`\n${totalPass} checks passed, ${totalFail} failed, across ${results.length} cases.`);
if (totalFail > 0) process.exit(1);
