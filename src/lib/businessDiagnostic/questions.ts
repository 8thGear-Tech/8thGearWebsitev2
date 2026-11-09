import { type Answers, type Question, getAnswer, hasValue } from "./types";

// Part A — General questions (everyone, 11 questions, always shown, in order).
// Spec p.3. Answers are reused across the form (ask once, reuse — build rule #1).
export const GENERAL_QUESTIONS: Question[] = [
  { key: "G01", label: "What is your full name?", required: true, type: "text" },
  { key: "G02", label: "What is your email address?", required: true, type: "text" },
  { key: "G03", label: "What is your phone number?", help: "WhatsApp preferable.", required: true, type: "text" },
  { key: "G04", label: "What is your business name?", required: true, type: "text" },
  {
    key: "G05",
    label: "Which sector best describes your business or proposed business?",
    required: true,
    type: "select",
    options: [
      "Food and Beverage",
      "Fashion and apparel",
      "Beauty and personal care",
      "Health and wellness",
      "Education and training",
      "Technology and software",
      "Trade and retail",
      "Logistics and transport",
      "Hospitality and accomodation",
      "Agriculture and agro-processing",
      "Creative arts and media",
      "Professional services (legal, finance, consulting)",
      "Manufacturing",
      "Other",
    ],
  },
  {
    key: "G06",
    label: "What is your current role in the business?",
    required: true,
    type: "radio",
    options: ["Founder or owner", "Co-founder", "Director or manager", "Employee", "Aspiring founder", "Other"],
  },
  {
    key: "G07",
    label: "How many people currently work in the business, including you?",
    required: true,
    type: "radio",
    options: ["0", "1–2", "3–5", "6–10", "11–20", "21+"],
  },
  {
    key: "G08",
    label: "Where do you want the business to be in the next 12 months?",
    required: true,
    type: "textarea",
  },
  {
    key: "G09",
    label: "How did you hear about 8thGear?",
    required: true,
    type: "radio",
    options: ["Referral", "Facebook, Instagram, 8thGear website", "Event or workshop", "Partner organization", "Search engine", "Other"],
  },
  {
    key: "G10",
    label: "Is the business formally registered with the Corporate Affairs Commission (CAC)?",
    required: true,
    type: "radio",
    options: ["Yes", "No", "In progress", "Not sure"],
  },
  {
    key: "G11",
    label: "How long has the business been operating?",
    required: true,
    type: "radio",
    options: ["Not started", "Less than 6 months", "6–12 months", "1–3 years", "4–5 years", "Over 5 years"],
  },
];

// Part B — Qualifying questions (everyone, 2 questions). Spec p.4-5.
// B1's answer text IS the value stored (radio/select options are matched by
// their exact display label throughout this module, same pattern as the
// original flat Business Checkup form).
export const B1_OPTIONS = [
  "I have a business idea but have not started the business.",
  "I have started a business but need to validate demand, identify paying customers or develop a viable business model.",
  "My business is operating, but I struggle to generate consistent sales, convert enquiries or manage the sales process.",
  "I want to understand my market better, improve my positioning, reach new customer segments or enter a new market.",
  "I want to explore funding and need to understand my readiness or identify suitable financing options.",
  "I need ongoing strategic guidance, mentorship and accountability to implement my business growth plans.",
  "My main challenge is not listed here.",
] as const;

// Letter aliases (A–G), matching the spec's own table lettering — used throughout
// flags.ts/gates.ts/sections.ts so the rule code reads the same as the spec.
export const B1 = {
  IDEA_NOT_STARTED: B1_OPTIONS[0],
  STARTED_NEEDS_VALIDATION: B1_OPTIONS[1],
  STRUGGLE_SALES: B1_OPTIONS[2],
  UNDERSTAND_MARKET: B1_OPTIONS[3],
  EXPLORE_FUNDING: B1_OPTIONS[4],
  NEEDS_MENTORSHIP: B1_OPTIONS[5],
  OTHER: B1_OPTIONS[6],
} as const;

export const B2_OPTIONS = {
  SALES: "Improving sales, lead generation, conversion or customer retention",
  DIGITAL: "Improving digital sales, website, online presence or use of business technology",
  FINANCE: "Understanding business finances, improving financial records or preparing accounts",
  MARKET: "Understanding customers, competitors, market positioning or entering a new market",
  FUNDING: "Preparing for a loan, grant, equity investment or another funding opportunity",
  MENTORSHIP: "Getting regular business advice, mentorship and accountability",
  CAC_IP: "CAC registration or protecting my business name, brand or intellectual property",
  SOFTWARE: "Setting up or improving accounting, CRM or business management software",
  TECHNICAL_TALENT: "Finding technical talent or a technical co-founder",
  ADDRESS: "Getting a professional business address in Lagos",
  OTHER: "Other",
} as const;

export const QUALIFYING_QUESTIONS: Question[] = [
  {
    key: "B1",
    label: "Which statement best describes the main business challenge you want to address right now?",
    required: true,
    type: "radio",
    options: [...B1_OPTIONS],
  },
  {
    key: "B2",
    label: "Are there any other business challenges you would like help with? Select all that apply.",
    // Not required in the strict validation sense, even though the spec
    // labels it "required" — there's no "none of the above" option, and Part
    // E's own test cases (3, 12) rely on an empty B2 being a valid, complete
    // answer (a respondent whose B1 answer already covers their one
    // challenge has nothing else to add).
    required: false,
    type: "checkbox",
    options: Object.values(B2_OPTIONS),
  },
];

// Part C7 — Final questions (everyone, after every open section). Spec p.12.
// A function (not a static array) because QF02 is skipped and auto-copied
// from EGL09 when the EGL section opened and EGL09 has a value — "ask once,
// reuse" (build rule #1), same pattern used by sections.ts for FND04/DIG02.
export function finalQuestions(answers: Answers): Question[] {
  const skipQF02 = hasValue(answers, "EGL09");

  const questions: Question[] = [
    {
      key: "QF01",
      label: "When would you like to start addressing this challenge?",
      required: true,
      type: "radio",
      options: ["As soon as possible", "Within 30 days", "Within 3 months", "Later", "Just exploring"],
    },
  ];

  if (!skipQF02) {
    questions.push({
      key: "QF02",
      label: "What have you already tried to solve this challenge, and what results did you get?",
      required: true,
      type: "textarea",
    });
  }

  questions.push({
    key: "QF03",
    label:
      "If we identify a suitable solution, would you be open to receiving details of the available support or booking a conversation with our team?",
    required: true,
    type: "radio",
    options: ["Yes", "Maybe", "No"],
  });

  return questions;
}

// QF02's effective value: the question itself if answered, otherwise EGL09's
// value (copied, not re-asked — see finalQuestions above).
export function getQF02(answers: Answers): string {
  const direct = getAnswer(answers, "QF02");
  return direct || getAnswer(answers, "EGL09");
}
