// Mirrors the 8thGear Full Business Checkup Google Form (see business-checkup-form.json for the raw export)
// so the custom multi-step form below asks the same 34 questions, grouped into the same 6 sections.

export type BusinessCheckupQuestion =
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

export type BusinessCheckupSection = {
  title: string;
  questions: BusinessCheckupQuestion[];
};

export const BUSINESS_CHECKUP_INTRO = {
  title: "8thGear Full Business Checkup",
  description: "Free Diagnostic for MSME Founders & Managers",
  paragraph:
    "Not every founder needs the same thing, and we get that. Take 5 minutes to answer a few simple questions about your business, and we'll do the rest. Within 72 hours, you'll receive a personalized report pinpointing your biggest bottleneck and showing you exactly how 8thGear can help.",
  accent: "It's free. It's fast and it could change how you see your business.",
};

export const BUSINESS_CHECKUP_SECTIONS: BusinessCheckupSection[] = [
  {
    title: "About You and Your Business",
    questions: [
      { key: "fullName", label: "What is your FULL NAME?", required: true, type: "text" },
      { key: "email", label: "Email address", required: true, type: "text" },
      { key: "whatsappPhone", label: "Phone Number (WhatsApp)", required: true, type: "text" },
      {
        key: "callPhone",
        label: "Phone Number (For Phone call - if different from your WhatsApp number)",
        required: true,
        type: "text",
      },
      { key: "businessName", label: "What is your BUSINESS NAME?", required: true, type: "text" },
      {
        key: "sector",
        label: "What sector best describes your business",
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
          "Others",
        ],
      },
      {
        key: "businessAge",
        label: "How long has the business been operating?",
        required: true,
        type: "radio",
        options: ["Less than 6 months", "6 months - 1 year", "1-3 years", "3 - 5 years", "5+ years"],
      },
      {
        key: "role",
        label: "What is your current role in the business?",
        required: true,
        type: "radio",
        options: ["Founder/CEO", "Co-founder", "Manager/Director", "Business Partner", "Employee/Staff"],
      },
      {
        key: "teamSize",
        label: "How many people currently work in your business (Including yourself)",
        required: true,
        type: "radio",
        options: ["Just me (solo)", "2 - 5 people", "6 - 10 people", "11 - 20 people", "20+ people"],
      },
      {
        key: "registered",
        label: "Is your business formally registered?",
        required: true,
        type: "radio",
        options: ["Yes - CAC registered", "No - not yet registered", "In progress", "Not sure what that requires"],
      },
    ],
  },
  {
    title: "Business Health (Tell Us Your Symptoms)",
    questions: [
      {
        key: "businessStage",
        label: "Which of these best describes where your business is right now?",
        required: true,
        type: "radio",
        options: [
          "Pre-idea: I have a concept but have not started yet",
          "Early stage: I've started but have little or no revenue yet",
          "Growth stage: I'm generating revenue but struggling with consistency and scale",
          "Established: Revenue is flowing but I need systems, structure, and smarter strategy",
          "Seeking funding or market expansion in the near term",
        ],
      },
      {
        key: "marketClarity",
        label: "On a scale of 1-5, how clearly defined is your target customer and market position?",
        required: true,
        type: "scale",
        min: 1,
        max: 5,
        minLabel: "We're still figuring it out",
        maxLabel: "Crystal clear, well documented",
      },
      {
        key: "revenueSituation",
        label: "How would you describe your current revenue situation?",
        required: true,
        type: "radio",
        options: [
          "No revenue yet - still pre-launch",
          "Irregular/inconsistent revenue",
          "Consistent revenue but not yet profitable",
          "Profitable and growing steadily",
          "Profitable but growth has plateaued",
        ],
      },
      {
        key: "fundingHistory",
        label: "Have you ever raised or accessed external funding (loan, grant, equity)?",
        required: true,
        type: "radio",
        options: [
          "Yes, debt (loan/credit)",
          "Yes, grant funding",
          "Yes, equity investment",
          "Not yet - but actively looking",
          "Not yet - and not sure how to start",
          "Not interested at this stage",
        ],
      },
      {
        key: "annualTurnover",
        label: "What is your most recent Annual Turnover?",
        help: "How much altogether is the revenue of your business last year?",
        required: true,
        type: "radio",
        options: [
          "Less that N1m",
          "Less than N10m",
          "Less than N50m",
          "Less than N100m",
          "Less than N500m",
          "Above N500m",
        ],
      },
      {
        key: "investmentReadiness",
        label: "On a scale of 1-5, how investment-ready or fundable do you believe your business currently is?",
        required: true,
        type: "scale",
        min: 1,
        max: 5,
        minLabel: "Not at all ready",
        maxLabel: "Ready today",
      },
      {
        key: "financialRecords",
        label: "How are your financial records currently managed?",
        required: true,
        type: "radio",
        options: [
          "All in my head - no written records",
          "Accounting software (Zoho Books, QuickBooks, Wave, e.t.c)",
          "A dedicated finance team handles it",
          "Basic notes or spreadsheets (manually)",
          "Spreadsheets managed by an Accountant/Book-keeper",
        ],
      },
      {
        key: "recordsCleanup",
        label: "Do your last two year financial records need to be cleaned up or prepared for audit or tax filing?",
        required: true,
        type: "radio",
        options: [
          "Yes - two year ago from now needs clean up",
          "Yes - last year needs clean up",
          "Both last two years needs help",
          "No. Records are already clean",
          "Not sure what you mean or where to start",
        ],
      },
      {
        key: "numbersUnderstanding",
        label: "On a scale of 1-5, how well do you understand your business's numbers (cash flow, profit margin, burn rate)?",
        required: true,
        type: "scale",
        min: 1,
        max: 5,
        minLabel: "Honestly, not well",
        maxLabel: "Very well - I track them weekly",
      },
    ],
  },
  {
    title: "Operations and Technology",
    questions: [
      {
        key: "dayToDayOps",
        label: "Which of these best describes how your business currently operates day-to-day?",
        required: true,
        type: "radio",
        options: [
          "Mostly manual: Whatsapp, Phone calls and cash payments",
          "Some digital tools but very informal and inconsistent",
          "Moderate use of digital tools, still lots of manual gaps",
          "Well structured with clear processes and good digital tools",
          "Highly systemized, we run on data and automation",
        ],
      },
      {
        key: "hasWebsite",
        label: "Does your business have a professional website",
        required: true,
        type: "radio",
        options: [
          "Yes - professional and up to date",
          "Yes - but outdated or poorly designed",
          "No - only on social media",
          "No - we have nothing online yet",
          "In progress/being built",
        ],
      },
      {
        key: "digitalTools",
        label: "Which digital tools does your business currently use? (select all that apply)",
        required: true,
        type: "checkbox",
        options: [
          "Social Media (Instagram, Facebook, LinkedIn, Tiktok)",
          "Whatsapp Business",
          "Email Marketing (Mailchimp, Brevo, e.t.c)",
          "Google Workspace or Microsoft 365",
          "Canva or design tools",
          "Online payments (Paystack, Flutterwave, e.t.c)",
          "Accounting/bookkeeping software (Zoho Books, Quickbooks, e.t.c)",
          "CRM or sales tracking tool",
          "Project management tools (Notion, Trello, Asana)",
          "None of the above yet",
        ],
      },
      {
        key: "usesCrmOrAccounting",
        label: "Does your business use any CRM, accounting, or business management software?",
        required: true,
        type: "radio",
        options: ["Yes - and it works well", "Yes - but we barely use it", "No - but we need not", "No - and not sure we need one"],
      },
      {
        key: "techTalentNeed",
        label: "Do you currently have (or need) a tech team or technical talent to build/maintain a product?",
        required: true,
        type: "radio",
        options: [
          "Yes - I have a tech team in place",
          "Yes - I need to hire or access tech talent urgently",
          "I'm looking for a developer/technical co-founder",
          "My business is not tech-dependent",
          "Not sure what kind of technical support I need",
        ],
      },
    ],
  },
  {
    title: "People and Legal",
    questions: [
      {
        key: "brandProtection",
        label: "Have you trademarked or legally protected your brand name or products?",
        required: true,
        type: "radio",
        options: [
          "Yes. Fully trademarked and protected",
          "No. I know I should and want to",
          "No. I'm not what you mean or where to start",
          "Partially - some aspects are protected",
          "In progress",
        ],
      },
      {
        key: "peopleChallenge",
        label: "What is your biggest challenge when it comes to people in your business?",
        required: true,
        type: "radio",
        options: [
          "Finding the right people to hire",
          "Retaining good staff",
          "Managing performance and acountability",
          "I'm doing everything myself and need to delegate",
          "I need skilled freelancers or contract talent",
          "People are not currently a challenge",
        ],
      },
    ],
  },
  {
    title: "Workspace and Community",
    questions: [
      {
        key: "workLocation",
        label: "Where do you currently work from?",
        required: true,
        type: "radio",
        options: ["Home/remote", "A co-working space", "My own office", "Client sites/field based", "Multiple locations"],
      },
      {
        key: "businessAddressInterest",
        label: "Would a professional business address in Lagos (without renting an office) be valuable to you?",
        required: true,
        type: "radio",
        options: [
          "Very valuable - I need this now",
          "Somewhat - I'd consider it",
          "Not really - I have an office",
          "Not applicable to my business",
        ],
      },
      {
        key: "communityImportance",
        label: "How important is being part of a community of other founders and entrepreneurs to you right now?",
        required: true,
        type: "radio",
        options: ["Very important - I need this now", "Important - I'd welcome connections", "Somewhat - nice to have"],
      },
    ],
  },
  {
    title: "Your Biggest Challenge - In Your Words",
    questions: [
      {
        key: "biggestProblem",
        label: "If you could solve one problem in your business tomorrow, what would it be?",
        help: "Be as specific or as open as you like. This is your chance to speak freely.",
        required: true,
        type: "textarea",
      },
      {
        key: "twelveMonthGoal",
        label: "Where do you want this business to be in the next 12 months?",
        help: "Revenue target, team size, market expansion, funding raised - whatever success looks like to you.",
        required: true,
        type: "textarea",
      },
      {
        key: "hearAboutUs",
        label: "How did you hear about 8thGear?",
        required: true,
        type: "radio",
        options: [
          "Referred by someone I know",
          "Google Search",
          "Social media (Instagram, LinkedIn, e.t.c)",
          "8thGear event or programme",
          "Newsletter or article",
          "Whatsapp Community",
          "Other",
        ],
      },
      {
        key: "willingToPay",
        label: "Are you willing to pay for services that will turn your business around?",
        required: true,
        type: "radio",
        options: [
          "No - I am not able to invest money in my business right now",
          "I am not sure. I am not sure what i want to do.",
          "Yes - Once I am convinced that the service will help me.",
        ],
      },
      {
        key: "bestFitService",
        label: "Which of 8thGear's services do you believe best benefit your business right now?",
        help: "This is not a compulsory question. You can skip if you are unable to answer.",
        required: false,
        type: "radio",
        otherOption: true,
        options: [
          "I do not know what will benefit my business",
          "Market and Investment Readiness for Entrepreneurs (MIRE) - 4weeks program that prepare my business for Debt/Equity/Grant and growth",
          "Entrepreneurs Growth Lab (EGL) - 4weeks program that show how digital tools can help my buisness",
          "8thGear Hub Membership - monthly access to expert mentors to hold me accountable",
          "Entrepreneurship Appreciation Training (EAT) - 2weeks program for upcoming entreprenuers",
          "FinaMo offering - Bookkeeping, Audit, Financial records and compliance support",
          "LegalMo Offering - Trademark, Incorporation/Registration, corporate governance and contract law support",
          "TalenMo Offering - Access to Talent/employee management tools and Recruiting support",
          "Digiplus Starter Kit - Digital Front store, professional email & website connected to social media",
          "Zoho One/Books/CRM - Naira-based softwares tools that help you automate different part of your business",
          "Virtual Office Subscription - Office Address in Ikeja/Magodo Business District with your signage at the Hub",
        ],
      },
    ],
  },
];
