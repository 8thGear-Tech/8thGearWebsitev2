import { type Answers, type Question, getAnswer, getAnswerList, hasValue } from "./types";
import { B1, B2_OPTIONS } from "./questions";

function b1Is(answers: Answers, ...values: string[]): boolean {
  const b1 = getAnswer(answers, "B1");
  return values.includes(b1);
}

function b2Includes(answers: Answers, option: string): boolean {
  return getAnswerList(answers, "B2").includes(option);
}

export type DiagnosticSection = {
  id: string;
  title: string;
  opensWhen: (answers: Answers) => boolean;
  questions: (answers: Answers) => Question[];
};

// ── EAT — Entrepreneurship Appreciation Training. Spec p.6. ──────────────
// Opens when: B1 = A or B, or G11 = Not started.
const EAT: DiagnosticSection = {
  id: "EAT",
  title: "A Few Questions About Starting Out",
  opensWhen: (answers) => b1Is(answers, B1.IDEA_NOT_STARTED, B1.STARTED_NEEDS_VALIDATION) || getAnswer(answers, "G11") === "Not started",
  questions: () => [
    {
      key: "EAT01",
      label: "Have you started selling a product or service yet?",
      required: true,
      type: "radio",
      options: ["Not started", "Preparing to launch", "Yes, already selling"],
    },
    {
      key: "EAT02",
      label: "Have you identified a specific group of customers who are likely to pay for your product or service?",
      required: true,
      type: "radio",
      options: ["Yes", "Partly", "No", "Not sure"],
    },
    {
      key: "EAT03",
      label: "Have you spoken to or tested your offer with potential customers?",
      required: true,
      type: "radio",
      options: ["Yes, with evidence", "Informally", "Not yet"],
    },
    {
      key: "EAT04",
      label: "Do you know exactly what customers will pay for and how the business will make money?",
      required: true,
      type: "radio",
      options: ["Yes", "Partly", "No", "Not sure"],
    },
    {
      key: "EAT05",
      label: "What is the biggest question or obstacle stopping you from starting or validating the business?",
      required: true,
      type: "textarea",
    },
  ],
};

export function isEatStrong(key: "EAT02" | "EAT03" | "EAT04", value: string): boolean {
  if (key === "EAT03") return value === "Yes, with evidence";
  return value === "Yes";
}

// ── EGL — Entrepreneurs' Growth Lab. Spec p.6-8. ──────────────────────────
// Opens when: B1 = C, or B2 includes the sales, digital or finance option.
// Shows in full once, however many of those three answers qualify it.
const FND04_QUESTION: Question = {
  key: "FND04",
  label: "Do you currently keep financial records showing revenue, expenses, profit and cash flow?",
  required: true,
  type: "radio",
  options: ["Up to date", "Incomplete", "Not currently maintained", "Not sure"],
};

export function eglOpensWhen(answers: Answers): boolean {
  return b1Is(answers, B1.STRUGGLE_SALES) || b2Includes(answers, B2_OPTIONS.SALES) || b2Includes(answers, B2_OPTIONS.DIGITAL) || b2Includes(answers, B2_OPTIONS.FINANCE);
}

const EGL: DiagnosticSection = {
  id: "EGL",
  title: "Entrepreneurs' Growth Lab",
  opensWhen: eglOpensWhen,
  questions: () => [
    {
      key: "EGL01",
      label: "What is your biggest sales challenge?",
      required: true,
      type: "radio",
      options: ["Getting leads", "Converting enquiries", "Retaining customers", "Increasing average sale", "Inconsistent sales", "Other"],
    },
    {
      key: "EGL02",
      label: "How consistent are your monthly sales?",
      required: true,
      type: "radio",
      options: ["Very consistent", "Somewhat consistent", "Unpredictable", "No sales yet"],
    },
    {
      key: "EGL03",
      label: "How clearly defined are your target customers and the value you offer them?",
      required: true,
      type: "scale",
      min: 1,
      max: 5,
      minLabel: "Not defined at all",
      maxLabel: "Very clearly defined",
    },
    {
      key: "EGL04",
      label: "Which digital tools does your business currently use for sales, customer communication or operations?",
      help: "Select all that apply.",
      required: true,
      type: "checkbox",
      otherOption: true,
      options: ["WhatsApp Business", "Social media", "Website", "Payment tool", "Accounting software", "CRM", "Spreadsheets", "None"],
    },
    {
      key: "EGL05",
      label: "Which important business activities have documented processes that your team follows?",
      help: "Select all that apply.",
      required: true,
      type: "checkbox",
      otherOption: true,
      options: ["Sales", "Customer service", "Delivery", "Finance", "Stock or operations", "None"],
    },
    {
      key: "EGL06",
      label: "How confident are you in calculating revenue, expenses, profit and cash available?",
      required: true,
      type: "scale",
      min: 1,
      max: 5,
      minLabel: "Not confident at all",
      maxLabel: "Very confident",
    },
    {
      key: "EGL07",
      label: "What is your biggest challenge with managing business finances?",
      required: true,
      type: "radio",
      options: ["Tracking income and expenses", "Pricing", "Cash flow", "Separating personal and business money", "Understanding profit", "Other"],
    },
    {
      key: "EGL08",
      label: "What is your biggest team or day-to-day operations challenge?",
      required: true,
      type: "textarea",
    },
    {
      key: "EGL09",
      label: "What have you already tried to solve your main challenge, and what happened?",
      required: true,
      type: "textarea",
    },
    FND04_QUESTION,
  ],
};

// ── Market — MIRE Market Readiness. Spec p.8. ─────────────────────────────
// Opens when: B1 = D, or B2 includes the market option.
const MARKET: DiagnosticSection = {
  id: "MARKET",
  title: "Understanding Your Market",
  opensWhen: (answers) => b1Is(answers, B1.UNDERSTAND_MARKET) || b2Includes(answers, B2_OPTIONS.MARKET),
  questions: () => [
    { key: "MKT01", label: "Which market or customer segment are you trying to reach or expand into?", required: true, type: "textarea" },
    { key: "MKT02", label: "What makes customers choose your business instead of competitors?", required: true, type: "textarea" },
    {
      key: "MKT03",
      label: "What evidence do you have that customers in this market need or want your offer?",
      required: true,
      type: "radio",
      options: ["Existing sales", "Customer interviews", "Pilot or test", "Research only", "No evidence yet", "Other"],
    },
    {
      key: "MKT04",
      label: "What is the biggest obstacle to reaching this market?",
      required: true,
      type: "radio",
      options: ["Understanding customers", "Positioning", "Pricing", "Reaching buyers", "Distribution", "Competition", "Other"],
    },
    {
      key: "MKT05",
      label: "What market-growth outcome would you like to achieve in the next 12 months?",
      help: "Shown from your earlier answer — add anything extra here if you like.",
      required: false,
      type: "textarea",
    },
  ],
};

// ── Funding — MIRE Funding Readiness. Spec p.8-9. ─────────────────────────
// Opens when: B1 = E, or B2 includes the funding option. Never shown to
// market-only respondents.
export function fundingOpensWhen(answers: Answers): boolean {
  return b1Is(answers, B1.EXPLORE_FUNDING) || b2Includes(answers, B2_OPTIONS.FUNDING);
}

const FUNDING: DiagnosticSection = {
  id: "FUNDING",
  title: "Funding Readiness",
  opensWhen: fundingOpensWhen,
  questions: (answers) => {
    const questions: Question[] = [
      {
        key: "FND01",
        label: "What type of funding are you exploring?",
        required: true,
        type: "radio",
        options: ["Loan", "Grant", "Equity investment", "Asset finance", "Other", "Not sure"],
      },
      {
        key: "FND02",
        label: "How much funding are you seeking, and what will it be used for?",
        help: "It's fine to say \"not sure yet\" on the amount.",
        required: true,
        type: "textarea",
      },
      {
        key: "FND03",
        label: "Have you previously received a loan, grant, equity investment or other external funding?",
        required: true,
        type: "radio",
        options: ["Yes", "No"],
      },
    ];

    if (getAnswer(answers, "FND03") === "Yes") {
      questions.push({ key: "FND03_details", label: "What type, and briefly, what were the details?", required: true, type: "textarea" });
    }

    // Shared records field: ask it here only if the EGL section did not also
    // open (EGL comes first in the form, so its FND04 answer is reused here).
    if (!eglOpensWhen(answers)) {
      questions.push(FND04_QUESTION);
    }

    questions.push(
      { key: "FND05", label: "Do you have a current business plan or funding proposal?", required: true, type: "radio", options: ["Yes", "In progress", "No"] },
      {
        key: "FND06",
        label: "How prepared are you to provide the business and financial documents a funder may request?",
        required: true,
        type: "scale",
        min: 1,
        max: 5,
        minLabel: "Not prepared at all",
        maxLabel: "Fully prepared",
      },
      {
        key: "FND07",
        label: "What is your biggest obstacle to securing suitable funding?",
        required: true,
        type: "radio",
        options: ["Finding suitable options", "Eligibility", "Financial records", "Business plan", "Collateral or guarantees", "Application process", "Other"],
      },
    );

    return questions;
  },
};

// Shared FND04 answer, however it was collected (EGL's copy or Funding's own).
export function getFND04(answers: Answers): string {
  return getAnswer(answers, "FND04");
}

// ── BAM — Business Accountability and Mentorship. Spec p.9-10. ───────────
// Opens when: B1 = F, or B2 includes the mentorship option. Never opened by
// business age, working from home or wanting a community alone.
const BAM: DiagnosticSection = {
  id: "BAM",
  title: "Accountability and Mentorship",
  opensWhen: (answers) => b1Is(answers, B1.NEEDS_MENTORSHIP) || b2Includes(answers, B2_OPTIONS.MENTORSHIP),
  questions: () => [
    { key: "BAM01", label: "What decisions or business challenges would you like an experienced mentor to help you work through?", required: true, type: "textarea" },
    { key: "BAM02", label: "What are the three most important business goals you want to achieve in the next 6–12 months?", required: true, type: "textarea" },
    { key: "BAM03", label: "Would regular check-ins, guidance and accountability help you implement agreed actions?", required: true, type: "radio", options: ["Yes", "Maybe", "No"] },
    { key: "BAM04", label: "Are you willing to commit time to mentorship sessions and take action between sessions?", required: true, type: "radio", options: ["Yes", "Maybe", "No"] },
    { key: "BAM05", label: "What have you already tried to move these goals forward, and what has prevented progress?", required: true, type: "textarea" },
  ],
};

// ── Service follow-ups. Spec p.10-11. ─────────────────────────────────────

const LEGALMO_FOLLOWUP: DiagnosticSection = {
  id: "LEGALMO",
  title: "Registration and Brand Protection",
  opensWhen: (answers) => getAnswer(answers, "G10") !== "Yes" || b2Includes(answers, B2_OPTIONS.CAC_IP),
  questions: () => [
    {
      key: "LEG01",
      label: "What do you need help with?",
      required: true,
      type: "radio",
      options: ["CAC registration", "Protecting my business name, brand or IP", "Both", "Not sure"],
    },
  ],
};

const SOFTWARE_FOLLOWUP: DiagnosticSection = {
  id: "SOFTWARE",
  title: "Business Software",
  opensWhen: (answers) => b2Includes(answers, B2_OPTIONS.SOFTWARE),
  questions: () => [
    {
      key: "ZOH01",
      label: "Which process do you want to improve?",
      help: "Select all that apply.",
      required: true,
      type: "checkbox",
      otherOption: true,
      options: ["Accounting and invoicing", "Customer follow-up (CRM)", "Sales tracking", "Team tasks and projects"],
    },
    {
      key: "ZOH02",
      label: "Do you already use a system for this?",
      required: true,
      type: "radio",
      options: ["No", "Yes, but we barely use it", "Yes, and we use it well"],
    },
  ],
};

const WEBSITE_FOLLOWUP: DiagnosticSection = {
  id: "WEBSITE",
  title: "Your Website",
  opensWhen: (answers) => b2Includes(answers, B2_OPTIONS.DIGITAL),
  questions: (answers) => {
    const questions: Question[] = [
      {
        key: "DIG01",
        label: "Does your business have a website?",
        required: true,
        type: "radio",
        options: ["No website", "Yes, but it is outdated or weak", "Yes, and it works well"],
      },
    ];
    if (getAnswer(answers, "DIG01") !== "No website" && hasValue(answers, "DIG01")) {
      questions.push({ key: "DIG02", label: "What is your website address?", required: true, type: "text" });
    }
    questions.push({
      key: "DIG03",
      label: "What is the main purpose of the website?",
      required: true,
      type: "radio",
      options: ["Sell online", "Build credibility", "Get leads", "Give information", "Other"],
    });
    return questions;
  },
};

const TALENMO_FOLLOWUP: DiagnosticSection = {
  id: "TALENMO",
  title: "Technical Talent",
  opensWhen: (answers) => b2Includes(answers, B2_OPTIONS.TECHNICAL_TALENT),
  questions: () => [
    {
      key: "TAL01",
      label: "What role or capability do you need?",
      required: true,
      type: "radio",
      options: ["Software developer", "Technical co-founder", "Designer", "Data or IT support", "Other"],
    },
    { key: "TAL02", label: "Is the need immediate?", required: true, type: "radio", options: ["Yes, immediately", "Within 3 months", "Later"] },
  ],
};

const VIRTUAL_OFFICE_FOLLOWUP: DiagnosticSection = {
  id: "VIRTUAL_OFFICE",
  title: "Virtual Office",
  opensWhen: (answers) => b2Includes(answers, B2_OPTIONS.ADDRESS),
  questions: () => [
    {
      key: "VO01",
      label: "What will you use the address for?",
      required: true,
      type: "radio",
      options: ["Registration and documents", "Receiving mail", "Business cards and website", "Not sure"],
    },
  ],
};

// Order matters: EGL before Funding (for the FND04 reuse rule above), and
// this is also the order sections are walked in the form.
export const DIAGNOSTIC_SECTIONS: DiagnosticSection[] = [
  EAT,
  EGL,
  MARKET,
  FUNDING,
  BAM,
  LEGALMO_FOLLOWUP,
  SOFTWARE_FOLLOWUP,
  WEBSITE_FOLLOWUP,
  TALENMO_FOLLOWUP,
  VIRTUAL_OFFICE_FOLLOWUP,
];

export function getOpenSections(answers: Answers): DiagnosticSection[] {
  return DIAGNOSTIC_SECTIONS.filter((section) => section.opensWhen(answers));
}
