"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { PartnersMarquee } from "@/components/PartnersMarquee";

import dbnIbadan from "@/assets/images/tech-marketplace/DBN Ibadan.jpeg";
import dbnIbadan1 from "@/assets/images/tech-marketplace/DBN Ibadan 1.jpeg";
import dbnIbadan2 from "@/assets/images/tech-marketplace/DBN Ibadan 2.jpeg";
import dseLagos1 from "@/assets/images/tech-marketplace/DSE Lagos 1.jpeg";
import dseLagos from "@/assets/images/tech-marketplace/DSE Lagos.jpeg";
import dseOgun1 from "@/assets/images/tech-marketplace/DSE Ogun 1.jpeg";
import dseOgun from "@/assets/images/tech-marketplace/DSE Ogun.jpeg";
import dbnLagos from "@/assets/images/tech-marketplace/DBN Lagos.jpeg";
import dbnLagos1 from "@/assets/images/tech-marketplace/DBN Lagos 1.jpeg";
import dbnLagos2 from "@/assets/images/tech-marketplace/DBN Lagos 2.jpeg";
import employabilityGIZ from "@/assets/gallerycards/employabilityGIZ.png";
import employability2 from "@/assets/gallerycards/employability2.jpg";
import employability3 from "@/assets/gallerycards/employability3.jpg";
import getOnlineWithDigiplus from "@/assets/gallerycards/getOnlineWithDigiplus.png";
import lsetfTraining23 from "@/assets/gallerycards/LSETFTraining23.png";

/* ── Icons ─────────────────────────────────────── */

function ArrowR({ sz = 15 }: { sz?: number }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" className="inline-block">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowL({ sz = 15 }: { sz?: number }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" className="inline-block">
      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ExtIcon({ sz = 14 }: { sz?: number }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" className="inline-block">
      <path
        d="M10 2h4v4M14 2L8 8M6 4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function DownloadIcon({ sz = 15 }: { sz?: number }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none" className="inline-block">
      <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="inline-block">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 36 28" fill="none">
      <path
        d="M0 28V17C0 7.5 5.5 2 16.5 0l1.8 2.8C12 4.2 8.4 7.5 7.5 12H14V28H0zm20 0V17C20 7.5 25.5 2 36.5 0L38.3 2.8C32.3 4.2 28.7 7.5 27.8 12H34V28H20z"
        fill="var(--color-teal)"
        opacity="0.15"
      />
    </svg>
  );
}
function PdfIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 26 26" fill="none" className="inline-block">
      <rect x="2" y="2" width="22" height="22" rx="5" fill="var(--color-muted)" opacity="0.1" />
      <rect x="2" y="2" width="22" height="22" rx="5" stroke="var(--color-muted)" strokeWidth="1.5" />
      <path d="M7 9h6M7 13h9M7 17h5" stroke="var(--color-muted)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill={filled ? "#f59e0b" : "none"} stroke={filled ? "none" : "#f59e0b"} strokeWidth="1.2">
      <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.27l-4.33 2.23.83-4.82L1 6.27l4.91-.71L8 1z" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Fade-in-on-scroll wrapper ─────────────────── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, vis] as const;
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, vis] = useFadeIn();

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.48s ease ${delay}ms, transform 0.48s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Data ──────────────────────────────────────── */

const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: "enterprise", label: "Enterprise Support" },
  { key: "talent", label: "Talent Development" },
];

type Programme = {
  id: number;
  cat: "enterprise" | "talent";
  col: "teal" | "purple";
  badge: string;
  title: string;
  body: string;
  images: StaticImageData[];
  metrics: { val: string; key: string }[] | null;
  highlights: string[];
  pills: string[];
  report: { title: string; desc: string; pdf: string; type: string; isRFP: boolean };
};

const PROGRAMMES: Programme[] = [
  {
    id: 1,
    cat: "enterprise",
    col: "teal",
    badge: "Ibadan · Oct 2–4, 2025",
    title: "DBN Capacity Building Workshop — Ibadan",
    body: "Brought together 60+ MSME operators, startup founders, and PFIs. Sessions covered investment readiness, access to finance, and business.",
    images: [dbnIbadan, dbnIbadan1, dbnIbadan2],
    metrics: [
      { val: "60+", key: "Participants" },
      { val: "89%", key: "Endline Score" },
      { val: "4.4/5", key: "Rating" },
    ],
    highlights: [
      "60+ participants engaged",
      "Investment readiness improved to 89%",
      "Post-workshop rating: 4.4/5",
      "96.3% confirmed stronger networking",
    ],
    pills: ["DBN ETP 2025", "Grants ₦5M", "Investment Readiness"],
    report: {
      title: "DBN Ibadan Workshop — Impact Report 2025",
      desc: "Full assessment, participant data, and outcomes from the October 2025 Ibadan workshop.",
      pdf: "/pdfs/Impact Report_DBN Capacity Building Workshop for Southwest Nigeria.pdf",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 2,
    cat: "talent",
    col: "purple",
    badge: "Oct 17 – Nov 7, 2025",
    title: "Digital Skills for Entrepreneurs (DSE)",
    body: "Trained 89 MSMEs across Ogun and Lagos states. Covered digital marketing, e-commerce, financial literacy, and Digital Transformation Roadmaps.",
    images: [dseLagos1, dseLagos, dseOgun1, dseOgun],
    metrics: [
      { val: "89", key: "MSMEs" },
      { val: "82%", key: "Attendance" },
      { val: "95%", key: "Excellent" },
    ],
    highlights: [
      "89 MSMEs trained across 2 states",
      "62% women representation",
      "82% attendance & participation rate",
      "95% rated as Excellent or Good",
    ],
    pills: ["E-Commerce", "Digital Marketing", "DTR Roadmaps", "62% Women"],
    report: {
      title: "DSE Programme Report 2025",
      desc: "Attendance data, DTR completion rates, and participant feedback across the two-state cohort.",
      pdf: "/pdfs/DSE Programme Report 2025.pdf",
      type: "Programme Report",
      isRFP: false,
    },
  },
  {
    id: 3,
    cat: "enterprise",
    col: "purple",
    badge: "Lagos · Nov 26–28, 2025",
    title: "DBN Capacity Building Workshop — Lagos",
    body: "Built on Ibadan learnings with sharper sessions on pitch-deck preparation, advanced money management, legal protection, and sales strategies.",
    images: [dbnLagos, dbnLagos1, dbnLagos2],
    metrics: [
      { val: "40+", key: "Participants" },
      { val: "4.46/5", key: "Rating" },
      { val: "84.8%", key: "Networking" },
    ],
    highlights: [
      "40+ MSMEs and startup founders",
      "Significant gains in planning & bookkeeping",
      "Post-workshop rating: 4.46/5",
      "84.8% confirmed enhanced networking",
    ],
    pills: ["DBN ETP 2025", "Sales Strategy", "Legal Readiness"],
    report: {
      title: "DBN Lagos Workshop — Impact Report 2025",
      desc: "Detailed findings, ratings, and recommendations from the Lagos November 2025 workshop.",
      pdf: "/pdfs/DBN Lagos Workshop Impact Report, 2025..pdf",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 4,
    cat: "enterprise",
    col: "teal",
    badge: "GIZ-DTC · EU Funded",
    title: "GIZ-DTC / EU Digital Innovation Hub",
    body: "Leading a consortium driving digital transformation for MSMEs across Trade, Transport & Logistics, and Education in Southwest Nigeria, co-funded by GIZ and the European Union.",
    images: [employabilityGIZ, employability2, employability3],
    metrics: null,
    highlights: ["98 Beneficiaries", "Over 120 job/Internship placements", "ECOWAS regional scope", "EU and GIZ co-funded"],
    pills: ["GIZ Nigeria", "European Union", "ECOWAS", "SW Nigeria"],
    report: {
      title: "GIZ-DTC Programme Brief",
      desc: "Overview of the consortium mandate, sectors covered, and digital transformation objectives.",
      pdf: "#",
      type: "Programme Brief",
      isRFP: false,
    },
  },
  {
    id: 5,
    cat: "enterprise",
    col: "teal",
    badge: "April 15 – April 26, 2024",
    title: "Get Online with DigiPlus Training",
    body: "The training program, conducted by Digiplus Alliance was a pivotal initiative aimed at digitally transforming venture entrepreneurs in Lagos, Nigeria.",
    images: [getOnlineWithDigiplus],
    metrics: [
      { val: "22", key: "Participants" },
      { val: "2 Weeks", key: "Duration" },
      { val: "Positive", key: "Feedback" },
    ],
    highlights: [
      "2-week training for venture entrepreneurs",
      "Emphasized gender equality",
      "Comprehensive digital skills curriculum",
      "Pre and post-training surveys",
      "Interactive group work and presentations",
      "Graduation ceremony on April 29, 2024",
      "Recommendations for future improvements",
    ],
    pills: ["Digiplus Alliance", "Digital Upskilling", "MSME", "Gender Equality"],
    report: {
      title: "Get Online with DigiPlus Report",
      desc: "Program outcomes, participant feedback, and recommendations from the Digiplus Alliance training.",
      pdf: "https://docs.google.com/document/d/1JDeMTLqpN_BwAh24zlkD9_xxCo25THqI/edit?usp=sharing&ouid=112570706098096412627&rtpof=true&sd=true",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 6,
    cat: "talent",
    col: "purple",
    badge: "Dec 11, 2023 – Aug 16, 2024",
    title: "USADF/LSETF Fully Funded Scholarship",
    body: "The application process attracted over 1,000 applicants, leading to a rigorous selection process.",
    images: [lsetfTraining23],
    metrics: [
      { val: "1,000+", key: "Applicants" },
      { val: "172", key: "Enrolled" },
      { val: "135", key: "Admitted" },
    ],
    highlights: [
      "Over 1,000 applicants attracted",
      "172 beneficiaries enrolled after screening",
      "135 individuals admitted after admission window",
      "Comprehensive integration with theoretical and practical classes",
      "Two-week break for Christmas and New Year",
      "Monitoring and evaluation with positive feedback",
    ],
    pills: ["USADF", "LSETF", "8thGear Partners"],
    report: {
      title: "USADF/LSETF Scholarship Impact Report",
      desc: "Placement outcomes, skill acquisition data, and participant testimonials from the USADF/LSETF cohort.",
      pdf: "https://docs.google.com/document/d/1HJwaaDhRUIbwuA-hg1OUINnoNfCWNB1b/edit?usp=sharing&ouid=112570706098096412627&rtpof=true&sd=true",
      type: "Impact Report",
      isRFP: false,
    },
  },
];

const COMPETENCIES = [
  {
    title: "Enterprise Support",
    desc: "We have a range of support services and programs designed to assist MSMEs. We also have experienced advisors and mentors who can guide startups.",
    tags: ["MSME Support", "Advisory", "Mentorship"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L3 8v10l10 5 10-5V8L13 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M3 8l10 5m0 0l10-5m-10 5v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Talent Development and Employability",
    desc: "At 8thGear, we are committed to providing exceptional Talent Management to individuals and organizations alike.",
    tags: ["Talent Development", "Employability", "Training"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 13l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    role: "MSME — Ibadan",
    text: "This workshop has impacted me by giving more confidence to present my business idea clearly and professionally.",
  },
  {
    id: 2,
    rating: 5,
    role: "DBN — Lagos",
    text: "The workshop has introduced me to innovative ways to solve any challenges I can encouter with my business.",
  },
  {
    id: 3,
    rating: 5,
    role: "DSE Participant",
    text: "This has been the best organized, highest value and intentionally transformative programme that i have ever attended(and i have attended a few).",
  },
  {
    id: 4,
    rating: 5,
    role: "DBN - Ibadan",
    text: "It has helped me clearly identify my target audience and understand promotional and marketing strategies to scale my business.",
  },
];

/* ── Shared style fragments ─────────────────────── */

const EYEBROW_BASE =
  "inline-flex items-center justify-center rounded-full border border-teal/25 bg-teal/7 py-[5px] px-[14px] text-[11px] font-bold uppercase tracking-[0.1em]";
const SECTION_TITLE = "mb-[10px] text-2xl font-bold tracking-[-0.02em] text-ink";
const SECTION_DIVIDER = "mt-[10px] mb-[18px] h-[3px] w-11 rounded-full bg-teal";
const SECTION_COPY = "text-[0.9rem] font-light leading-[1.75rem] text-secondary";
const BTN_BASE =
  "inline-flex items-center gap-2 rounded-xl border-none py-3 px-7 text-sm font-semibold no-underline transition-[transform,background-color,color,border-color] duration-200 ease-[ease] hover:-translate-y-px focus-visible:-translate-y-px";

/* ── Cards ─────────────────────────────────────── */

function ProgrammeCard({ data }: { data: Programme }) {
  const [cur, setCur] = useState(0);
  const hasPdf = Boolean(data.report.pdf && data.report.pdf !== "#");
  const visibleHighlights = data.highlights.slice(0, 3);
  const visiblePills = data.pills.slice(0, 3);
  const isExternalReport = hasPdf && /^https?:\/\//i.test(data.report.pdf);
  const isPurple = data.col === "purple";

  const nextSlide = () => setCur((prev) => (prev + 1) % data.images.length);
  const prevSlide = () => setCur((prev) => (prev - 1 + data.images.length) % data.images.length);

  const reportClass = [
    "inline-flex shrink-0 items-center gap-[5px] rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] no-underline cursor-pointer transition-all duration-200 ease-[ease]",
    hasPdf
      ? isPurple
        ? "bg-purple/7 border border-purple/20 text-purple hover:bg-purple focus-visible:bg-purple hover:text-white focus-visible:text-white"
        : "bg-teal/7 border border-teal/25 text-teal hover:bg-teal focus-visible:bg-teal hover:text-white focus-visible:text-white"
      : "bg-grey-bg border border-grey-border text-muted cursor-default",
  ].join(" ");

  return (
    <div
      className={`group relative flex h-auto min-h-0 flex-col overflow-hidden rounded-xl border border-grey-border bg-white shadow-brand transition-[transform,box-shadow,border-color] duration-[260ms] ease-[ease] hover:shadow-brand-lg hover:-translate-y-1 lg:h-[670px] ${
        isPurple ? "hover:border-purple" : "hover:border-teal"
      }`}
    >
      <div
        className={`h-[3px] shrink-0 ${
          isPurple
            ? "bg-[linear-gradient(90deg,var(--color-purple),rgba(130,30,107,0.55))]"
            : "bg-[linear-gradient(90deg,var(--color-teal),rgba(0,164,149,0.55))]"
        }`}
      />

      <div className="p-[14px] pb-0">
        <div className="relative overflow-hidden rounded-lg bg-grey-bg">
          <Image
            src={data.images[cur]}
            alt={`${data.title} slide ${cur + 1}`}
            className="block h-[250px] w-full object-cover"
          />
          <span
            className={`absolute left-[10px] top-[10px] z-[1] rounded-full px-[10px] py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_2px_8px_rgba(0,0,0,0.2)] ${
              isPurple ? "bg-purple" : "bg-teal"
            }`}
          >
            {data.badge}
          </span>

          {data.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={`Previous image for ${data.title}`}
                className="absolute top-1/2 left-[10px] z-[1] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[rgba(15,23,42,0.2)] p-0 text-white backdrop-blur-[2px]"
              >
                <ArrowL sz={12} />
              </button>
              <button
                onClick={nextSlide}
                aria-label={`Next image for ${data.title}`}
                className="absolute top-1/2 right-[10px] z-[1] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[rgba(15,23,42,0.2)] p-0 text-white backdrop-blur-[2px]"
              >
                <ArrowR sz={12} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex grow flex-col pt-4 px-[18px] pb-[18px]">
        <div className="mb-[10px] flex items-start justify-between gap-3">
          <h3 className="m-0 font-heading text-base font-bold leading-[1.35] text-ink">{data.title}</h3>
          <a
            href={hasPdf ? data.report.pdf : undefined}
            target={isExternalReport ? "_blank" : undefined}
            rel={isExternalReport ? "noopener noreferrer" : undefined}
            download={hasPdf && !isExternalReport ? true : undefined}
            onClick={!hasPdf ? (e) => e.preventDefault() : undefined}
            className={reportClass}
          >
            {hasPdf ? data.report.isRFP ? <ExtIcon sz={10} /> : <DownloadIcon sz={10} /> : <PdfIcon />}
            {data.report.type}
          </a>
        </div>

        <p className="mb-[10px] line-clamp-3 text-[0.82rem] font-light leading-[1.55rem] text-secondary">{data.body}</p>

        {data.metrics && (
          <div className="grid grid-cols-3 gap-2">
            {data.metrics.map((m) => (
              <div
                key={m.key}
                className={`rounded-[10px] border py-[10px] px-2 text-center ${
                  isPurple ? "bg-purple/7 border-purple/20" : "bg-teal/7 border-teal/25"
                }`}
              >
                <span className="block font-heading text-[0.95rem] font-bold text-ink">{m.val}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-secondary">{m.key}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-[19px] flex flex-col gap-[10px]">
          <div>
            <h4 className="mb-[6px] font-heading text-[0.88rem] font-bold text-ink">Impact Highlights</h4>
            <ul className="m-0 pl-[18px] text-[0.82rem] leading-6 text-secondary [&>li+li]:mt-1">
              {visibleHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap gap-[6px]">
              {visiblePills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full border border-grey-border bg-grey-bg py-[3px] px-[9px] text-[10px] font-semibold text-secondary"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetencyCard({ item }: { item: (typeof COMPETENCIES)[number] }) {
  return (
    <div className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-xl border border-grey-border bg-white shadow-brand transition-[transform,box-shadow,background-color,border-color] duration-[260ms] ease-[ease] hover:-translate-y-1 hover:border-teal/20 hover:bg-[linear-gradient(145deg,rgba(0,164,149,0.07),#fff)] hover:shadow-brand-lg">
      <div className="absolute left-0 top-0 bottom-0 w-0 rounded-[0_2px_2px_0] bg-[linear-gradient(to_bottom,var(--color-teal),var(--color-teal-dark))] transition-[width] duration-[280ms] ease-[ease] group-hover:w-1" />

      <div className="flex grow flex-col pt-6 px-6 pb-5 transition-[padding-left] duration-[280ms] ease-[ease] group-hover:pl-7">
        <div className="mb-4">
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border-[1.5px] border-grey-border bg-grey-bg text-muted transition-all duration-[260ms] ease-[ease] group-hover:border-teal group-hover:bg-teal group-hover:text-white">
            {item.icon}
          </div>
        </div>

        <h3 className="mb-2 font-heading text-base font-bold leading-[1.3] text-primary group-hover:text-ink">{item.title}</h3>

        <p className="mb-4 grow text-[0.84rem] font-light leading-[1.65rem] text-secondary">{item.desc}</p>

        <div className="mt-auto flex flex-wrap gap-[5px]">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-grey-border bg-grey-bg px-[9px] py-[3px] text-[10px] font-semibold text-secondary transition-all duration-[220ms] ease-[ease] group-hover:border-teal/20 group-hover:bg-teal/7 group-hover:text-teal"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= n} />
      ))}
    </div>
  );
}

function TestiCard({ data }: { data: (typeof TESTIMONIALS)[number] }) {
  const hasArrowIcon = data.id === 3 || data.id === 4;

  return (
    <div className="flex h-[270px] flex-col rounded-xl border border-grey-border bg-white p-[22px] shadow-brand">
      <div className="mb-[10px] flex items-center gap-2">
        <QuoteIcon />
        {hasArrowIcon && <ArrowR sz={12} />}
      </div>
      <p className="mb-4 mt-0 grow text-[0.85rem] font-light italic leading-[1.75rem] text-secondary">&quot;{data.text}&quot;</p>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-grey-border pt-3">
        <div>
          <div className="text-[11px] font-light text-secondary">{data.role}</div>
        </div>
        <Stars n={data.rating} />
      </div>
    </div>
  );
}

function TestimonialLink({ lnk }: { lnk: { label: string; href: string } }) {
  return (
    <a
      href={lnk.href}
      target={lnk.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-[1.5px] border-teal/25 bg-transparent py-[9px] px-5 text-[13px] font-semibold text-teal no-underline transition-colors duration-200 ease-[ease] hover:border-teal hover:bg-teal hover:text-white focus-visible:border-teal focus-visible:bg-teal focus-visible:text-white"
    >
      {lnk.label} <ArrowR />
    </a>
  );
}

/* ── Page ──────────────────────────────────────── */

export function InitiativesSection() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? PROGRAMMES : PROGRAMMES.filter((p) => p.cat === filter);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(140deg,var(--color-teal-dark)_0%,var(--color-teal)_55%,var(--color-teal-dark)_100%)] pt-20 pb-15">
        <div className="absolute -top-20 -right-25 h-105 w-105 rounded-full border-[60px] border-white/7 pointer-events-none" />
        <div className="absolute -bottom-[110px] -left-[90px] h-90 w-90 rounded-full border-[50px] border-white/5 pointer-events-none" />

        <div className="relative z-[1] mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-[18px] text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                Building Resilient
                <br />
                <span className="text-mint">MSMEs &amp; Entrepreneurs</span>
                <br />
                Across Nigeria
              </h1>

              <p className="mb-9 max-w-[520px] font-light text-white/78">
                From enterprise support to talent development initiatives, 8thGear Hub is driving measurable impact
                across Southwest Nigeria and beyond
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_BASE} bg-purple text-white hover:bg-purple-hover hover:text-white focus-visible:bg-purple-hover focus-visible:text-white`}
                >
                  Request for Proposal <ExtIcon />
                </a>
                <a
                  href="#programmes"
                  className={`${BTN_BASE} border-[1.5px] border-white/50 bg-transparent text-white hover:bg-white/13 hover:text-white focus-visible:bg-white/13 focus-visible:text-white`}
                >
                  Impact Report <ArrowR />
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-white/22 bg-white/12 py-[30px] px-[26px]">
                <p className={`${EYEBROW_BASE} mb-[22px] text-white/72`}>Impact at a Glance</p>

                {[
                  { label: "StartUps Supported", val: "2000+" },
                  { label: "Projects Delivered", val: "10+" },
                  { label: "Tech Talents Empowered", val: "1000+" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-white/25 py-3">
                    <span className="text-[13px] font-light text-white/72">{item.label}</span>
                    <span className="font-heading text-[1.35rem] font-bold text-white">{item.val}</span>
                  </div>
                ))}

                <div className="pt-3">
                  <div className="mb-2 flex justify-between">
                    <span className="text-xs font-light text-white/60">Satisfaction Rate</span>
                    <span className="font-heading text-[13px] font-bold text-white">95%</span>
                  </div>
                  <div className="h-[6px] overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[95%] rounded-full bg-mint" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-22 pb-4">
        <div className="mx-auto mb-4 max-w-[1400px] px-4">
          <div className="text-center">
            <div className={`${EYEBROW_BASE} text-teal`}>Our Partners</div>
            <div className={`${SECTION_DIVIDER} mx-auto`} />
            <h2 className={SECTION_TITLE}>
              Trusted by Leading <span className="text-teal">Institutions</span>
            </h2>
            <p className={`${SECTION_COPY} mx-auto max-w-[460px]`}>
              We collaborate with development agencies, Corporate CSR units and Philanthropies to design and deliver
              on Social Impact driven initiatves.
            </p>
          </div>
        </div>
        <PartnersMarquee title={null} />
      </section>

      <section className="bg-grey-bg py-22">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-5 text-center">
            <div className={`${EYEBROW_BASE} text-teal`}>Our Competencies</div>
            <div className={`${SECTION_DIVIDER} mx-auto`} />
            <h2 className={SECTION_TITLE}>
              Our Core <span className="text-teal">Competencies</span>
            </h2>
            <p className={`${SECTION_COPY} mx-auto max-w-[620px]`}>
              We are keeping this section focused on two core areas where 8thGear delivers the strongest value.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
            {COMPETENCIES.map((item, i) => (
              <FadeUp key={item.title} delay={i * 55}>
                <CompetencyCard item={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-22" id="programmes">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-4 flex flex-wrap items-end gap-3">
            <div className="lg:w-2/3">
              <div className={`${EYEBROW_BASE} text-teal`}>Impact Reports</div>
              <div className={SECTION_DIVIDER} />
              <h2 className={SECTION_TITLE}>
                Initiatives &amp; <span className="text-teal">Impact Evidence</span>
              </h2>
              <p className={`${SECTION_COPY} max-w-[500px]`}>Fueling Innovation, Empowering Entrepreneurs and Transforming Communities.</p>
            </div>

            <div className="flex justify-end lg:ml-auto">
              <div className="flex w-full shrink-0 flex-col flex-wrap gap-1 rounded-lg border border-grey-border bg-grey-bg p-1 md:w-auto md:flex-row">
                {FILTER_TABS.map((t) => (
                  <button
                    key={t.key}
                    className={`inline-flex w-full items-center justify-center rounded-[7px] border-none bg-transparent py-[7px] px-4 text-center text-[13px] font-semibold text-secondary transition-colors duration-200 ease-[ease] hover:bg-white hover:text-teal focus-visible:bg-white focus-visible:text-teal md:w-auto ${
                      filter === t.key ? "bg-teal text-white" : ""
                    }`}
                    onClick={() => setFilter(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d, i) => (
              <FadeUp key={d.id} delay={i * 55}>
                <ProgrammeCard data={d} />
              </FadeUp>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-4 text-center">
              <p className={`${SECTION_COPY} mx-auto max-w-[620px]`}>No programmes found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-grey-bg py-22" id="testimonials">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-5 text-center">
            <div className={`${EYEBROW_BASE} text-teal`}>Testimonials &amp; Reviews</div>
            <div className={`${SECTION_DIVIDER} mx-auto`} />
            <h2 className={SECTION_TITLE}>
              What Participants <span className="text-teal">Are Saying</span>
            </h2>
            <p className={`${SECTION_COPY} mx-auto max-w-[620px]`}>Our programmes earn consistently high ratings across delivery sites.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 xl:w-2/3">
              <div className="rounded-xl bg-teal py-[26px] px-7">
                <p className="text-xs font-light text-white/60">Review Snapshot</p>

                {[
                  { val: "4.4/5", label: "DBN Ibadan" },
                  { val: "4.46/5", label: "DBN Lagos" },
                  { val: "95%", label: "DSE Excellent" },
                  { val: "96.3%", label: "Networking" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between gap-3 border-b border-white/25 py-3 last:border-b-0"
                  >
                    <span className="text-[13px] font-light text-white/75">{r.label}</span>
                    <span className="font-heading text-sm font-bold text-white">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <FadeUp key={t.id} delay={t.id * 65}>
                <TestiCard data={t} />
              </FadeUp>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { label: "View Testimonials", href: "#testimonials" },
              { label: "View Programmes & Reports", href: "#programmes" },
            ].map((lnk) => (
              <TestimonialLink key={lnk.label} lnk={lnk} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(140deg,var(--color-ink)_0%,var(--color-slate)_100%)] py-22">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className={`${EYEBROW_BASE} mb-[22px] text-teal`}>Get Involved</div>
              <h2 className="mb-[14px] text-2xl font-bold tracking-[-0.02em] text-white">
                Ready to Partner with <span className="text-mint">8thGear Hub?</span>
              </h2>
              <p className="max-w-[480px] text-[0.9rem] font-light leading-[1.75rem] text-white/78">
                We collaborate with development agencies, Corporate CSR units and Philanthropies to design and
                deliver on Social Impact driven initiatves.
              </p>

              <ul className="m-0 mt-4 list-none p-0">
                {[
                  "Access to a broad network of MSMEs",
                  "Expert-led programme design and delivery",
                  "Measurable impact reporting",
                ].map((item) => (
                  <li key={item} className="mb-1 flex items-center gap-[10px] text-[0.9rem] font-light text-white/75">
                    <span className="flex-none text-mint">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-xl border border-white/13 bg-white/6 p-[34px]">
                <p className="mb-[6px] font-heading text-[1.05rem] font-bold text-white">What We Deliver</p>
                <p className="text-[0.88rem] font-light leading-[1.75rem] text-white/72">
                  Structured support for innovation, enterprise development, community activation and measurable
                  programme delivery.
                </p>

                <div className="mt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_k2Vk4CgZKz4-sPtP7h7aflemd-AcpGSpWodxUoGT6UuKJg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN_BASE} bg-purple text-white hover:bg-purple-hover hover:text-white focus-visible:bg-purple-hover focus-visible:text-white`}
                  >
                    Request for Proposal <ExtIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
