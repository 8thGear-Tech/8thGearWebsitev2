"use client";

import { useState } from "react";
import Image from "next/image";
import EGLImage from "@/assets/images/projectdelivery/DSE/DSE.jpg";

export function EGL() {
  return (
    <>
      <EGLHero />
      <EGLAbout />
      <EGLModules />
      <EGLSchedule />
      <EGLOffices />
      <EGLCallToAction />
    </>
  );
}

function EGLHero() {
  return (
    <div className="bg-[linear-gradient(135deg,#6E006A_0%,#9B1B96_100%)]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center px-4 md:px-12">
        <div className="w-full py-12 text-white md:w-1/2">
          <span className="mb-3 inline-block rounded-full bg-white px-3 py-2 text-base font-light text-ink">
            Quarterly Sessions
          </span>
          <h3 className="mb-3 text-[clamp(1.5rem,5vw,2.2rem)] font-bold leading-tight">
            Entrepreneurs
            <br />
            <span className="text-[#00d2ff]">Growth Lab</span>
          </h3>
          <p className="mb-4 text-[clamp(0.9rem,3vw,1rem)] leading-[1.8] text-white">
            Quarterly masterclasses featuring hands-on digital tools and practical strategies for sales and
            marketing, accounting and bookkeeping, business IP protection, and team optimization.
          </p>
          <div className="flex max-w-[450px] flex-col gap-3 md:max-w-[600px] md:flex-row md:gap-4">
            <a href="#schedule" className="w-full md:max-w-[210px] md:flex-1">
              <button className="w-full rounded-lg bg-white px-6 py-3 text-base font-bold text-[#6E006A] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                View Schedule →
              </button>
            </a>
            <a
              href="https://forms.gle/deVsWi1aGdpeJg7E9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:max-w-[210px] md:flex-1"
            >
              <button className="w-full rounded-lg bg-white px-6 py-3 text-base font-bold text-[#6E006A] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                Apply Now
              </button>
            </a>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <Image src={EGLImage} alt="Entrepreneurs Growth Lab" className="max-h-[500px] rounded object-cover" />
        </div>
      </div>
    </div>
  );
}

function EGLAbout() {
  return (
    <div className="bg-[#f5f5f5] py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h4 className="mb-3 text-[1.2rem] font-bold text-[#6E006A]">ABOUT THE PROGRAM</h4>
          <p className="text-base leading-[1.8] text-secondary">
            Three sequential modules targeting different business challenges. Sessions are interactive, hands-on,
            and built around real business pain points with clear action plans.
          </p>
        </div>
      </div>
    </div>
  );
}

const modules = [
  {
    number: "Module 1",
    title: "Digital Tools for Sales",
    description:
      "Helping MSME owners attract, convert, and retain customers using the right digital sales and marketing tools.",
    topics: [
      "Fundamentals of Sales & Marketing",
      "How to manage customer relationships and track your sales pipeline",
      "Using live chat and chatbots to engage customers on your website, social media & WhatsApp",
      "Setting up and managing an online store to sell your products and services",
    ],
    accentClass: "text-[#E91E63]",
    borderClass: "border-l-[6px] border-l-[#E91E63]",
    bgClass: "bg-[linear-gradient(135deg,#FFE5E5_0%,#FFF0F5_100%)]",
    icon: "💼",
  },
  {
    number: "Module 2",
    title: "Digital Tools for Finance",
    description:
      "Equipping MSME owners with practical financial management skills and the software to run clean, compliant books.",
    topics: [
      "Basic bookkeeping principles",
      "Financial and Tax Compliance for Nigerian Businesses",
      "Excel Bookkeeping Templates",
      "Introduction to accounting and bookkeeping softwares",
    ],
    accentClass: "text-[#9C27B0]",
    borderClass: "border-l-[6px] border-l-[#9C27B0]",
    bgClass: "bg-[linear-gradient(135deg,#F3E5F5_0%,#FCE4EC_100%)]",
    icon: "💰",
  },
  {
    number: "Module 3",
    title: "Business Protection & Team Growth",
    description: "Helping MSMEs legally protect their business assets and build a capable, well-managed team.",
    topics: [
      "Incorporation/Business Registration, Trademarks, Copyrights, and Brand protection (CAC vs Trademark Registry)",
      "Basics of Recruitment, drafting Job Descriptions, and Performance Tracking Systems for teams. Templates Incl.",
      "HR and recruitment software for managing your team",
    ],
    accentClass: "text-[#3F51B5]",
    borderClass: "border-l-[6px] border-l-[#3F51B5]",
    bgClass: "bg-[linear-gradient(135deg,#E8EAF6_0%,#F3E5F5_100%)]",
    icon: "🛡️",
  },
];

function EGLModules() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4">
            {modules.map((module) => (
              <div
                key={module.title}
                className={`rounded-[10px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] md:p-10 ${module.bgClass} ${module.borderClass}`}
              >
                <div className="mb-3 flex flex-col items-start gap-3 md:flex-row">
                  <div className="shrink-0 text-[2.5rem]">{module.icon}</div>
                  <div>
                    <p className={`mb-1 text-[0.85rem] font-semibold ${module.accentClass}`}>{module.number}</p>
                    <h5 className="mb-2 text-[1.2rem] font-bold text-[#6E006A]">{module.title}</h5>
                  </div>
                </div>

                <p className="mb-4 leading-[1.7] text-secondary">{module.description}</p>

                <div>
                  <p className="mb-3 text-[0.95rem] font-semibold text-[#6E006A]">Topics Covered:</p>
                  <ul className="list-none space-y-2 p-0">
                    {module.topics.map((topic) => (
                      <li key={topic} className="relative pl-5 text-[0.9rem] text-secondary">
                        <span className={`absolute left-0 ${module.accentClass}`}>✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded bg-[#f5f5f5] p-4 md:p-10">
            <h5 className="mb-4 font-bold text-[#6E006A]">Session Details</h5>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <p className="mb-1 font-semibold">💰 Registration Fee</p>
                <p className="text-secondary">₦5,000 per module</p>
              </div>
              <div>
                <p className="mb-1 font-semibold">🎯 Frequency</p>
                <p className="text-secondary">Quarterly</p>
              </div>
              <div>
                <p className="mb-1 font-semibold">🌐 Format</p>
                <p className="text-secondary">Hybrid (Online + Physical)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Session = { date: string; year: string; module: string; badge: string; badgeType: "sales" | "finance" | "protect" };

const quarters = [
  { id: "q3", label: "Q3 · Jul-Sep" },
  { id: "q4", label: "Q4 · Oct-Dec" },
];

const sessions: Record<string, Session[]> = {
  q3: [
    { date: "Jul 17", year: "2026", module: "Digital Tools for Sales", badge: "Module 1", badgeType: "protect" },
    { date: "Aug 14", year: "2026", module: "Digital Tools for Finance", badge: "Module 2", badgeType: "sales" },
    {
      date: "Sep 18",
      year: "2026",
      module: "Business Protection & Team Growth",
      badge: "Module 3",
      badgeType: "finance",
    },
  ],
  q4: [
    { date: "Oct 16", year: "2026", module: "Digital Tools for Sales", badge: "Module 1", badgeType: "protect" },
    { date: "Nov 13", year: "2026", module: "Digital Tools for Finance", badge: "Module 2", badgeType: "sales" },
    {
      date: "Dec 18",
      year: "2026",
      module: "Business Protection & Team Growth",
      badge: "Module 3",
      badgeType: "finance",
    },
  ],
};

const badgeStyles: Record<Session["badgeType"], string> = {
  sales: "bg-[#FFE5EF] text-[#993556]",
  finance: "bg-[#F3E5F5] text-[#6A1B9A]",
  protect: "bg-[#E8EAF6] text-[#303F9F]",
};

const legend = [
  { label: "Digital Tools for Sales", dotClass: "bg-[#D4537E]" },
  { label: "Digital Tools for Finance", dotClass: "bg-[#9C27B0]" },
  { label: "Business Protection & Team Growth", dotClass: "bg-[#3F51B5]" },
];

function SessionBadge({ session }: { session: Session }) {
  return (
    <span className={`shrink-0 whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium ${badgeStyles[session.badgeType]}`}>
      {session.badge}
    </span>
  );
}

function SessionCard({ session }: { session: Session }) {
  return (
    <div className="rounded-xl border border-[#e8e8e8] bg-white px-[18px] py-3.5 transition-colors hover:border-[#bbb]">
      <div className="flex flex-col gap-2 sm:hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[0.88rem] font-semibold text-[#222]">{session.date}</div>
            <div className="mt-px text-[0.72rem] text-[#999]">{session.year}</div>
          </div>
          <SessionBadge session={session} />
        </div>
        <div className="text-[0.9rem] font-medium text-[#222]">{session.module}</div>
      </div>

      <div className="hidden items-center gap-4 sm:flex">
        <div className="min-w-[64px] shrink-0">
          <div className="text-[0.88rem] font-semibold text-[#222]">{session.date}</div>
          <div className="mt-px text-[0.72rem] text-[#999]">{session.year}</div>
        </div>
        <div className="h-8 w-px shrink-0 bg-[#eee]" />
        <div className="flex-1">
          <div className="text-[0.9rem] font-medium text-[#222]">{session.module}</div>
        </div>
        <SessionBadge session={session} />
      </div>
    </div>
  );
}

function EGLSchedule() {
  const [activeQuarter, setActiveQuarter] = useState("q3");

  return (
    <div id="schedule" className="bg-[#f5f5f5] py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4">
            <h3 className="mb-1 text-[1.2rem] font-bold text-[#6E006A]">2026 Quarterly Schedule</h3>
            <p className="mb-0 text-sm text-secondary">Select a quarter to view sessions</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-3">
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`h-2 w-2 shrink-0 rounded-full ${item.dotClass}`} />
                <span className="text-[0.78rem] text-[#666]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {quarters.map((q) => (
              <button
                key={q.id}
                onClick={() => setActiveQuarter(q.id)}
                className={`rounded-lg border px-[18px] py-[7px] text-[clamp(0.75rem,2vw,0.85rem)] transition-all ${
                  activeQuarter === q.id
                    ? "border-[#6E006A] bg-[#6E006A] font-medium text-white"
                    : "border-[#ccc] bg-white text-[#555]"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {sessions[activeQuarter].map((session) => (
              <SessionCard key={session.date} session={session} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const offices = [
  {
    name: "8thGear HQ",
    address: "41 CMD Road, Secretariat/Magodo, Lagos State, Nigeria",
    icon: "🏢",
    bgClass: "bg-[#E91E630d]",
    borderClass: "border-[#E91E6330]",
  },
  {
    name: "8thGear Ondo Liaison Office",
    address: "Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure, Ondo State, Nigeria",
    icon: "📍",
    bgClass: "bg-[#9C27B00d]",
    borderClass: "border-[#9C27B030]",
  },
];

function EGLOffices() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h3 className="text-[1.2rem] font-bold text-[#6E006A]">OUR LOCATIONS</h3>
            <p className="text-secondary">Physical sessions held at our locations</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.name}
                className={`h-full rounded-xl border-2 p-4 transition-all ${office.bgClass} ${office.borderClass}`}
              >
                <div className="mb-3 text-[2.5rem]">{office.icon}</div>
                <h5 className="mb-3 text-[1.1rem] font-bold text-[#6E006A]">{office.name}</h5>
                <p className="mb-0 text-[0.9rem] leading-[1.6] text-secondary">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EGLCallToAction() {
  return (
    <div className="bg-[linear-gradient(135deg,#6E006A_0%,#9B1B96_100%)] py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-3xl px-3 text-center text-white">
          <h3 className="mb-4 text-[clamp(1.3rem,5vw,1.5rem)] font-bold">Ready to Transform Your Business?</h3>
          <p className="mb-4 text-[clamp(0.9rem,3vw,1.05rem)] leading-[1.8] text-white">
            Join MSMEs learning practical digital strategies. Register for the next quarterly session.
          </p>
          <a href="https://forms.gle/deVsWi1aGdpeJg7E9" target="_blank" rel="noopener noreferrer">
            <button className="rounded-lg bg-white px-[clamp(20px,4vw,28px)] py-[clamp(8px,2vw,12px)] text-[clamp(0.85rem,2.5vw,1.1rem)] font-bold text-[#6E006A] shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
