"use client";

import { useRef, useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

import zohologo from "@/assets/images/tech-marketplace/zohos-logo.png";
import zohoonelogo from "@/assets/images/tech-marketplace/zohoone-logo.png";
import crmlogo from "@/assets/images/tech-marketplace/crm.png";
import zohobookslogo from "@/assets/images/tech-marketplace/zohobooks-logo.png";
import zohosalesiqlogo from "@/assets/images/tech-marketplace/zohosalesiq-logo.png";
import zohocommercelogo from "@/assets/images/tech-marketplace/zoho_commerce.png";
import zohocampaigns from "@/assets/images/tech-marketplace/zohocampaigns-logo.png";

const SIGNUP_URL =
  "https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab";

// This page keeps its own self-contained "pink" visual identity (distinct from the
// rest of the site), so the palette below is expressed as literal hex/rgba values
// inside Tailwind arbitrary classes rather than shared theme tokens.
const CARD_BORDER = "border-[#e8d4e8]";

const SECTION_TITLE = "mb-3 text-center font-heading text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold text-ink";
const SECTION_SUB = "mx-auto mb-[52px] max-w-[560px] text-center text-[1.05rem] font-light text-[#64748b]";
const DIVIDER = "mx-auto mt-3 h-1 w-14 rounded bg-[#920f84]";

const CTA_PRIMARY =
  "inline-block rounded-full border-0 bg-white px-8 py-[14px] font-heading text-base font-bold text-[#920f84] no-underline shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#fff8fe] hover:text-[#6b0a60] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]";
const CTA_PRIMARY_LARGE =
  "inline-block rounded-full border-0 bg-white px-5 py-4 font-heading text-[1.05rem] font-bold text-[#920f84] no-underline shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#fff8fe] hover:text-[#6b0a60] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]";
const CTA_SECONDARY =
  "mt-3 block rounded-full border-2 border-white/50 bg-transparent px-7 py-[13px] text-center font-heading text-base font-semibold text-white no-underline transition duration-300 ease-in-out hover:border-white hover:bg-white/15 hover:text-white md:mt-0 md:inline-block md:text-left";
const SEE_ALL =
  "inline-block rounded-full border-[1.5px] border-[#920f84] px-7 py-[10px] font-heading text-[0.9rem] font-semibold text-[#920f84] no-underline transition duration-300 ease-in-out hover:bg-[#920f84] hover:text-white";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Reveal({
  children,
  variant = fadeUp,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  variant?: Variants;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const STATS = [
  { num: "60+", label: "Products" },
  { num: "150M+", label: "Users Worldwide" },
  { num: "30+", label: "Years in Business" },
  { num: "₦ NGN", label: "Local Naira Pricing" },
];

type Product = { logo: StaticImageData; name: string; link: string; desc: string };

const PRODUCTS: Product[] = [
  {
    logo: zohoonelogo,
    name: "Zoho One",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
    desc: "The all-in-one operating system for your business. 60+ integrated apps covering CRM, Books, Desk, HR, Projects, Campaigns and more.",
  },
  {
    logo: crmlogo,
    name: "Zoho CRM",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    desc: "Manage leads, automate your sales pipeline, track customer interactions, and close deals faster with AI-powered insights.",
  },
  {
    logo: zohobookslogo,
    name: "Zoho Books",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1957eae31aff62948c7fe7f162b916b5",
    desc: "Complete accounting software for invoicing, expenses, bank reconciliation, tax compliance, and detailed financial reports.",
  },
  {
    logo: zohosalesiqlogo,
    name: "Zoho SalesIQ",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
    desc: "Live chat and visitor intelligence tool that helps you engage website visitors in real time and convert them into customers.",
  },
  {
    logo: zohocommercelogo,
    name: "Zoho Commerce",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=0755c2d5f4c2664cb06af372be5cef32",
    desc: "An all-in-one eCommerce platform that helps businesses create online stores, manage products, accept payments, track inventory, and deliver seamless shopping experiences across web and mobile.",
  },
  {
    logo: zohocampaigns,
    name: "Zoho Campaigns",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
    desc: "Email marketing platform to design campaigns, build automation workflows, segment audiences, and track engagement analytics.",
  },
];

type PricingPlan = {
  logo: StaticImageData;
  name: string;
  featured: boolean;
  badge?: string;
  price: string;
  yearlyPrice: string;
  period: string;
  tagline: string;
  link: string;
  features: string[];
};

const PRICING: PricingPlan[] = [
  {
    logo: zohoonelogo,
    name: "Zoho One",
    featured: true,
    badge: "Most Popular",
    price: "₦69,300",
    yearlyPrice: "₦80,850",
    period: "/ user / month",
    tagline: "Best value all-in-one suite",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
    features: [
      "60+ integrated business apps",
      "CRM, Books, Desk, Campaigns & more",
      "Single sign-on across all apps",
      "Advanced analytics & reporting",
      "AI-powered Zia assistant",
      "Unlimited users on all apps",
      "Billed in Nigerian Naira",
    ],
  },
  {
    logo: crmlogo,
    name: "Zoho CRM",
    featured: false,
    price: "₦15,400",
    yearlyPrice: "₦10,780",
    period: "/ user / month",
    tagline: "Grow your sales pipeline",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    features: [
      "Lead & contact management",
      "Sales pipeline automation",
      "Email & phone integration",
      "Real-time analytics & dashboards",
      "Workflow automation (Blueprints)",
      "AI sales predictions (Zia)",
    ],
  },
  {
    logo: zohobookslogo,
    name: "Zoho Books",
    featured: false,
    price: "₦4,320",
    yearlyPrice: "₦3,600",
    period: "/ user / month",
    tagline: "Smart accounting for MSMEs",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    features: [
      "Professional invoicing & billing",
      "Expense tracking & receipts",
      "Bank feeds & reconciliation",
      "Workflow automation",
      "Unified collaboration with your team",
      "Client portal & payment links",
    ],
  },
  {
    logo: zohosalesiqlogo,
    name: "Zoho SalesIQ",
    featured: false,
    price: "₦7,700",
    yearlyPrice: "₦5,390",
    period: "/ operator / month",
    tagline: "Convert visitors into customers",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
    features: [
      "Live chat & visitor tracking",
      "AI-powered chatbot builder",
      "Lead scoring & hot prospects",
      "CRM and Social Media integration",
      "Contact management",
      "Real-time chat analytics",
    ],
  },
  {
    logo: zohocommercelogo,
    name: "Zoho Commerce",
    featured: false,
    price: "₦7,299",
    yearlyPrice: "₦5,299",
    period: "/ user / month",
    tagline: "E-commerce Made Easy",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=0755c2d5f4c2664cb06af372be5cef32",
    features: [
      "Customisable templates",
      "Custom domain",
      "Free hosting & unlimited bandwidth",
      "Built-in SEO & Blog",
      "500 product listings",
      "Zoho CRM & other Zoho product integration",
    ],
  },
  {
    logo: zohocampaigns,
    name: "Zoho Campaigns",
    featured: false,
    price: "₦3,080",
    yearlyPrice: "₦2,310",
    period: "/ month",
    tagline: "Email marketing that converts",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
    features: [
      "Unlimited emails",
      "SMS marketing",
      "Access to all ready-to-use email templates",
      "Dedicated IP",
      "10 users",
      "Basic drag-and-drop workflows",
      "Basic segmentation",
    ],
  },
];

const WHY_US = [
  { icon: "🏆", label: "Official Zoho Partner", desc: "We are a certified and authorized Zoho reseller in Nigeria. You are in safe hands." },
  {
    icon: "🛠️",
    label: "Expert Setup & Onboarding",
    desc: "Our Zoho Support Team handles everything, from initial configuration to team training and workflow optimization.",
  },
  { icon: "🇳🇬", label: "Local Nigeria Support", desc: "Get fast, knowledgeable support from a team that understands the Nigerian business environment." },
  { icon: "💳", label: "Pay in Naira", desc: "No dollar billing surprises. All pricing is fixed in Naira, predictable and stable." },
  { icon: "📈", label: "Growth-Focused Approach", desc: "We don't just sell software, we help you scale your business with the right Zoho tools." },
  { icon: "🔒", label: "Data Privacy & Security", desc: "GDPR compliant. Your business data is protected to the highest standards." },
];

type Faq = { q: string; a: string; links?: { text: string; href: string }[]; aSuffix?: string };

const FAQS: Faq[] = [
  {
    q: "What is the difference between Zoho One and Zoho CRM?",
    a: "Zoho CRM is a dedicated sales and customer management tool. Zoho One is the full business suite; it includes Zoho CRM plus 45+ other apps (accounting, HR, marketing, helpdesk, etc.) under one subscription.",
  },
  {
    q: "Do I get support after signing up?",
    a: "Yes. As an authorized Zoho partner, we provide paid dedicated onboarding, configuration, and ongoing support. For assistance, you can ",
    links: [
      { text: "call us", href: "tel:+2348000000000" },
      { text: "send an email", href: "mailto:zoho@8thgearhub.com" },
      { text: "fill out our contact form", href: "/contact" },
    ],
    aSuffix: " and our team will get back to you.",
  },
  {
    q: "I have a need for a custom application specific to my business. Can Zoho One help?",
    a: "Zoho One includes Zoho Creator, an application development platform that lets you build custom apps for your business needs. Over 1.5 million custom apps have been built on this platform. If you're not comfortable building your own, we have a developer team who can help.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Most Zoho products offer a 15-day free trial with no credit card required. You can test the full feature set before committing to a paid plan.",
  },
];

function SectionHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <Reveal className="mb-5 text-center">
      <h2 className={SECTION_TITLE}>{title}</h2>
      <div className={DIVIDER} />
      <p className={SECTION_SUB}>{sub}</p>
    </Reveal>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${CARD_BORDER} bg-white px-6 py-7 transition duration-300 ease-in-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[#920f84] before:transition-transform before:duration-[350ms] before:content-[''] hover:-translate-y-1.5 hover:border-[#b8178a] hover:shadow-[0_20px_60px_rgba(146,15,132,0.18)] group-hover:before:scale-x-100`}
      >
        <Image src={product.logo} alt={product.name} className="mb-5 h-16 self-start object-contain object-left" />
        <h5 className="mb-[10px] font-heading text-base font-medium text-ink">{product.name}</h5>
        <p className="flex-1 font-body text-[0.9rem] font-light leading-[1.65] text-[#64748b]">{product.desc}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block w-auto self-start rounded-full border-0 bg-[#920f84] px-6 py-[10px] font-heading text-[0.875rem] font-semibold text-white no-underline shadow-[0_4px_14px_rgba(146,15,132,0.3)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#6b0a60] hover:text-white hover:shadow-[0_6px_20px_rgba(146,15,132,0.4)]"
        >
          Get {product.name} →
        </a>
      </div>
    </motion.div>
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const { featured } = plan;
  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl px-7 py-8 transition duration-300 ease-in-out ${
          featured
            ? "border border-transparent bg-[linear-gradient(160deg,#6b0a60_0%,#920f84_60%,#b8178a_100%)] text-white"
            : `border-[1.5px] ${CARD_BORDER} bg-white hover:-translate-y-[5px] hover:border-[#920f84] hover:shadow-[0_20px_60px_rgba(146,15,132,0.18)]`
        }`}
      >
        {plan.badge && (
          <span className="absolute right-5 top-5 rounded-full bg-[#920f84] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.5px] text-white">
            {plan.badge}
          </span>
        )}
        <Image src={plan.logo} alt={plan.name} className="mb-[18px] h-11 object-contain" />
        <h4 className={`mb-[6px] font-heading text-[1.3rem] font-semibold ${featured ? "text-white/90" : "text-ink"}`}>{plan.name}</h4>
        <p className={`mb-5 font-body text-[0.85rem] font-light ${featured ? "text-white/90" : "text-[#64748b]"}`}>{plan.tagline}</p>
        <div className="mb-5">
          <span className={`mb-1 block font-heading text-[0.72rem] font-semibold uppercase tracking-[0.06em] ${featured ? "text-white/60" : "text-[#b8178a]"}`}>
            Starting from
          </span>
          <div>
            <span className={`font-heading text-[2rem] font-bold leading-none ${featured ? "text-white/90" : "text-[#920f84]"}`}>{plan.price}</span>
            <span className={`ml-0.5 font-body text-[0.8rem] font-normal ${featured ? "text-white/90" : "text-[#64748b]"}`}>{plan.period}</span>
          </div>
          <div
            className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-body text-[0.78rem] font-semibold ${
              featured ? "border-white/35 bg-white/15 text-white/95" : "border-[#920f84]/20 bg-[#920f84]/[0.07] text-[#920f84]"
            }`}
          >
            Annual: {plan.yearlyPrice}
            {plan.period}
          </div>
        </div>
        <ul className="m-0 mb-6 flex-1 list-none p-0">
          {plan.features.map((f) => (
            <li
              key={f}
              className={`flex items-start gap-2 border-b py-[7px] font-body text-[0.98rem] font-normal before:mt-px before:flex-shrink-0 before:font-bold before:content-['✓'] ${
                featured ? "border-white/10 before:text-white/90" : "border-black/5 before:text-[#920f84]"
              }`}
            >
              {f}
            </li>
          ))}
        </ul>
        <a
          href={plan.link}
          target="_blank"
          rel="noreferrer"
          className={`block rounded-full px-6 py-3 text-center font-heading text-[0.9rem] font-semibold no-underline shadow-[0_4px_14px_rgba(146,15,132,0.3)] transition duration-300 ease-in-out ${
            featured
              ? "bg-white text-[#920f84] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#fff8fe] hover:text-[#6b0a60]"
              : "bg-[#920f84] text-white hover:-translate-y-px hover:bg-[#6b0a60] hover:text-white hover:shadow-[0_6px_20px_rgba(146,15,132,0.4)]"
          }`}
        >
          Get {plan.name}
        </a>
      </div>
    </motion.div>
  );
}

function WhyCard({ item }: { item: (typeof WHY_US)[number] }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        className={`h-full rounded-2xl border ${CARD_BORDER} bg-white px-7 py-8 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:border-[#920f84] hover:shadow-[0_8px_32px_rgba(146,15,132,0.14)]`}
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#920f84]/[0.07] text-[1.8rem]">{item.icon}</div>
        <h5 className="mb-[10px] font-heading text-base font-medium text-ink">{item.label}</h5>
        <p className="m-0 font-body text-[0.875rem] font-medium leading-[1.7] text-[#64748b]">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);

  const renderAnswer = () => {
    if (!item.links) return item.a;
    return (
      <>
        {item.a}
        {item.links.map((link, i) => (
          <span key={link.text}>
            <a href={link.href} className="font-semibold text-[#920f84] underline decoration-solid underline-offset-2 transition duration-300 ease-in-out hover:text-[#6b0a60]">
              {link.text}
            </a>
            {i < item.links!.length - 1 && (i === item.links!.length - 2 ? ", or " : ", ")}
          </span>
        ))}
        {item.aSuffix}
      </>
    );
  };

  return (
    <div
      className={`mb-3 overflow-hidden rounded-[10px] border bg-white transition-colors duration-200 hover:border-[#920f84] hover:shadow-[0_2px_12px_rgba(146,15,132,0.08)] ${
        open ? "border-[#920f84]" : CARD_BORDER
      }`}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-6 py-5 text-left font-heading text-base font-semibold text-ink focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span>{item.q}</span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[1.1rem] font-bold transition duration-300 ease-in-out ${
            open ? "bg-[#920f84] text-white" : "bg-[#920f84]/[0.08] text-[#920f84]"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[0.9rem] leading-[1.75] text-[#64748b]">{renderAnswer()}</div>
      </motion.div>
    </div>
  );
}

export function ZohoLandingPage() {
  return (
    <div className="text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#3a0535_0%,#6b0a60_35%,#920f84_70%,#b8178a_100%)] pt-10 pb-[120px] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_55%_70%_at_75%_50%,rgba(255,255,255,0.18)_0%,transparent_65%),radial-gradient(ellipse_30%_40%_at_15%_80%,rgba(130,30,107,0.25)_0%,transparent_60%)] before:content-[''] after:absolute after:inset-x-0 after:-bottom-[2px] after:h-20 after:bg-white after:[clip-path:ellipse(55%_100%_at_50%_100%)] after:content-[''] md:pt-20 md:pb-[100px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="relative z-[2] mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Reveal variant={fadeRight}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-[6px] text-[13px] font-semibold text-white backdrop-blur-[8px]">
                <span className="block h-2 w-2 rounded-full bg-[#4ade80] [animation:zoho-pulse_2s_infinite]" /> Trusted Zoho Partner in
                Nigeria
              </div>
              <h1 className="mb-5 font-heading text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.15] text-white">
                Run Your Entire Business on Zoho
              </h1>
              <p className="mb-9 font-body text-base font-light leading-7 text-white/85">
                The complete cloud software suite for Nigerian businesses. Manage Sales, Accounting, Customer Support
                and Marketing, all from one powerful platform. Pay in Naira. No dollar surprises.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={CTA_PRIMARY}>
                  Create Free Account →
                </a>
                <a href="#pricing" className={CTA_SECONDARY}>
                  See Pricing
                </a>
              </div>
            </Reveal>

            <Reveal variant={fadeLeft} delay={0.15} className="mt-12 md:mt-0">
              <div className="relative rounded-[24px] border border-white/40 bg-white/[0.22] p-10 text-center shadow-[0_32px_80px_rgba(0,0,0,0.15)] backdrop-blur-[6px]">
                <div className="absolute -top-[18px] right-5 whitespace-nowrap rounded-full bg-white px-5 py-[10px] text-[13px] font-bold text-ink shadow-[0_8px_32px_rgba(146,15,132,0.14)]">
                  <span className="text-[15px] text-[#920f84]">150M+</span> Users Globally
                </div>
                <Image src={zohologo} alt="Zoho" className="mx-auto w-full max-w-[320px]" />
                <div className="absolute -bottom-[18px] left-5 whitespace-nowrap rounded-full bg-white px-5 py-[10px] text-[13px] font-bold text-ink shadow-[0_8px_32px_rgba(146,15,132,0.14)]">
                  🇳🇬 <span className="text-[15px] text-[#920f84]">Billed in ₦ Naira</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-10 mx-auto mb-5 max-w-[1400px] px-4 -mt-[50px]">
        <Reveal>
          <div className="relative z-10 -mt-[50px] rounded-2xl bg-white px-5 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] md:px-10 md:py-8">
            <div className="grid grid-cols-2 items-center justify-around gap-3 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-[2rem] font-bold text-[#920f84]">{s.num}</div>
                  <div className="mt-1 text-[0.85rem] text-[#64748b]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Products */}
      <section className="py-10">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeader title="Zoho Products" sub="Choose the tools that power your business or get all of them with Zoho One." />
          <StaggerGrid>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </StaggerGrid>
          <Reveal>
            <div className="mt-4 text-center">
              <a
                href="https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab"
                target="_blank"
                rel="noopener noreferrer"
                className={SEE_ALL}
              >
                See All Products →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#fdf0fc] py-10" id="pricing">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeader title="Zoho Pricing in Nigeria" sub="All prices shown are starting from the lowest monthly plan. Annual billing saves you up to 15%." />
          <StaggerGrid>
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PRICING.map((p) => (
                <PricingCard key={p.name} plan={p} />
              ))}
            </div>
          </StaggerGrid>
          <Reveal>
            <div className="mt-4 text-center">
              <a
                href="https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab"
                target="_blank"
                rel="noopener noreferrer"
                className={SEE_ALL}
              >
                See All Pricing →
              </a>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-center text-[0.8rem] text-[#64748b]">
              * Prices shown are the lowest available monthly starting price. Annual plans offer savings of up to 15%.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-10">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeader title="Why Get Zoho From Us" sub="We're not just resellers, we're your local Zoho Growth Partner." />
          <StaggerGrid>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {WHY_US.map((w) => (
                <WhyCard key={w.label} item={w} />
              ))}
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fdf0fc] py-10">
        <div className="mx-auto max-w-[1400px] px-4">
          <SectionHeader title="Frequently Asked Questions" sub="Everything you need to know about Zoho in Nigeria." />
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              {FAQS.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#3a0535_0%,#6b0a60_40%,#920f84_80%,#b8178a_100%)] pt-15 before:absolute before:inset-0 before:bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxnIGZpbGw9JyNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNCc+PHBhdGggZD0nTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Jy8+PC9nPjwvZz48L3N2Zz4=)] before:content-['']">
        <Reveal>
          <div className="relative z-[2] mx-auto max-w-[1400px] px-4 pb-[50px] text-center">
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-white">Start Using Zoho Today</h2>
            <p className="mb-10 font-body text-[1.05rem] leading-7 text-white/80">
              Join thousands of Nigerian businesses growing smarter with Zoho.
            </p>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={CTA_PRIMARY_LARGE}>
              Create Your Zoho Account
            </a>

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="mb-[0.8rem] font-heading text-[0.85rem] text-white/60">Need a demo or have questions?</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="tel:+2349132462410"
                  className="font-heading text-[0.9rem] font-semibold text-white/85 no-underline transition duration-300 ease-in-out hover:text-white hover:underline"
                >
                  📞 Call Us
                </a>
                <span className="inline-block h-1 w-1 rounded-full bg-white/35" />
                <a
                  href="mailto:support@8thgearpartners.com"
                  className="font-heading text-[0.9rem] font-semibold text-white/85 no-underline transition duration-300 ease-in-out hover:text-white hover:underline"
                >
                  ✉️ Send an Email
                </a>
                <span className="inline-block h-1 w-1 rounded-full bg-white/35" />
                <a
                  href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[0.9rem] font-semibold text-white/85 no-underline transition duration-300 ease-in-out hover:text-white hover:underline"
                >
                  📋 Fill a Form
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
