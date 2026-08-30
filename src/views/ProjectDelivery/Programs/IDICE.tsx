"use client";

import { useEffect } from "react";
import Image from "next/image";

const PROGRAMME_STEPS = [
  {
    week: "Weeks 1–3",
    title: "Foundation & Ideation",
    desc: "Understand your market landscape, define your value proposition and develop a clear problem-solution framework.",
    icon: "🧭",
  },
  {
    week: "Weeks 4–6",
    title: "Business Model Design",
    desc: "Map out your revenue streams, customer segments and cost structures using proven startup frameworks.",
    icon: "🗂️",
  },
  {
    week: "Weeks 7–9",
    title: "Market Validation",
    desc: "Test your assumptions, engage with target customers and iterate your product based on real feedback.",
    icon: "🔬",
  },
  {
    week: "Weeks 10–11",
    title: "Execution & Scaling",
    desc: "Build your go-to-market plan, optimise operations and prepare for early-stage growth.",
    icon: "🚀",
  },
  {
    week: "Week 12",
    title: "Demo Day",
    desc: "Showcase your solution to investors, mentors and ecosystem stakeholders at the Startup Bridge Demo Day.",
    icon: "🏆",
  },
];

const ELIGIBILITY = [
  "Business is at idea or market validation stage",
  "Business will operate from any of the 36+ states in Nigeria or FCT Abuja",
  "Founder is between 18 and 35 years old",
  "Ability to commit to the full 12-week structured programme",
  "Willingness to participate in learning sessions and assignments",
  "Ready to take part in evaluations and Demo Day activities",
];

const APPLY_URL = "https://accelerator.vester.ai/apply/start?code=nDC1MhZl";

// Scroll-reveal utility classes: elements start hidden/offset, then the observer
// below swaps them for the "revealed" utility classes once they enter the viewport.
const REVEAL_HIDDEN = "opacity-0 translate-y-[22px]";
const REVEAL_SHOWN = "opacity-100 translate-y-0";
const REVEAL_BASE = `${REVEAL_HIDDEN} transition-[opacity,transform] duration-[600ms] ease-in-out`;

const REVEAL_DELAYS = [
  "[transition-delay:0.1s]",
  "[transition-delay:0.2s]",
  "[transition-delay:0.3s]",
  "[transition-delay:0.4s]",
];

const revealDelay = (i: number) => REVEAL_DELAYS[Math.min(i, 3)];

const progCardBase =
  "relative overflow-hidden rounded-xl border-[1.5px] border-grey-border bg-grey-bg p-7 transition-[border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[3px] hover:border-teal/28 hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-teal before:to-purple before:content-['']";

function progCardClass(isLast: boolean) {
  const layout = isLast
    ? "flex flex-col lg:col-span-full lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-6"
    : "";
  const bg = isLast
    ? "bg-[linear-gradient(110deg,rgba(0,164,149,0.05)_0%,rgba(130,30,107,0.04)_100%)] border-teal/28"
    : "";
  const beforeOpacity = isLast ? "before:opacity-100" : "before:opacity-0 hover:before:opacity-100";
  return `${progCardBase} ${layout} ${bg} ${beforeOpacity}`.trim();
}

function progCardTopClass(isLast: boolean) {
  return `mb-[0.9rem] flex items-center gap-3 ${
    isLast ? "lg:col-start-1 lg:row-start-1 lg:flex-col lg:items-start lg:gap-[0.4rem]" : ""
  }`.trim();
}

function progTitleClass(isLast: boolean) {
  return `mb-2 font-heading text-[1.05rem] font-semibold text-primary ${
    isLast ? "lg:col-start-2 lg:row-start-1 lg:self-center" : ""
  }`.trim();
}

function progDescClass(isLast: boolean) {
  return `font-body text-[0.875rem] leading-[1.7] font-light text-secondary ${
    isLast ? "lg:col-start-2 lg:row-start-2" : ""
  }`.trim();
}

function heroStatClass(index: number, total: number) {
  const base = "flex-[0_0_calc(50%-0.5rem)] p-0 sm:flex-1 sm:border-r sm:border-white/8 sm:px-5 sm:py-0";
  const first = index === 0 ? "sm:pl-0" : "";
  const last = index === total - 1 ? "sm:border-r-0 sm:pr-0" : "";
  return `${base} ${first} ${last}`.trim();
}

export function IDICE() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove(...REVEAL_HIDDEN.split(" "));
            e.target.classList.add(...REVEAL_SHOWN.split(" "));
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-body text-primary">
      {/* HERO */}
      <section className="relative bg-[linear-gradient(150deg,#0d1a19_0%,#0a1512_45%,#0f1a2e_100%)] pt-20 pb-12 sm:pt-22 sm:pb-14 lg:pt-28 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_75%_40%,rgba(0,164,149,0.16)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_15%_80%,rgba(130,30,107,0.12)_0%,transparent_60%)]" />
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <div className="relative z-2 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative z-2">
              <div className="mb-5 inline-flex items-center gap-[0.55rem] rounded-full border border-[rgba(0,164,149,0.32)] bg-[rgba(0,164,149,0.15)] px-4 py-[0.35rem] font-heading text-[0.72rem] font-medium tracking-[0.1em] text-[#4dd9cc] uppercase [animation:fade-down_0.6s_ease_both]">
                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-teal [animation:pulse-dot_1.8s_ease_infinite]" />
                Applications Ongoing · Closes July 26, 2026
              </div>

              <h1 className="mb-4 font-heading text-[clamp(1.75rem,2.6vw,2.4rem)] leading-[1.2] font-bold text-white [animation:fade-up_0.6s_0.1s_ease_both]">
                iDICE Startup Bridge – <span className="text-[#2dd4bf]">Founders Lab</span>
              </h1>

              <p className="mb-7 font-body text-[0.95rem] font-light leading-[1.8] text-white/[0.68] [animation:fade-up_0.6s_0.18s_ease_both]">
                A 12-week capacity-building programme under the iDICE Startup Bridge initiative, designed to help
                early-stage founders take the first structured steps in building a digital or technical business.
              </p>

              <div className="mb-8 flex flex-wrap gap-[0.9rem] [animation:fade-up_0.6s_0.26s_ease_both]">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-purple px-[1.9rem] py-[0.82rem] font-heading text-[0.9rem] font-medium tracking-[0.03em] text-white no-underline shadow-[0_4px_18px_rgba(130,30,107,0.38)] transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-purple-hover hover:text-white hover:no-underline hover:shadow-[0_8px_26px_rgba(130,30,107,0.46)]"
                >
                  Apply Now →
                </a>
                <a
                  href="#idice-about"
                  className="inline-block rounded-md border border-[rgba(255,255,255,0.28)] bg-transparent px-[1.9rem] py-[0.82rem] font-heading text-[0.9rem] font-normal tracking-[0.03em] text-white/80 no-underline transition-[border-color,color,background] duration-200 hover:border-[#2dd4bf] hover:bg-[rgba(0,164,149,0.07)] hover:text-[#2dd4bf] hover:no-underline"
                >
                  Learn More
                </a>
              </div>

              <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6 [animation:fade-up_0.6s_0.34s_ease_both] sm:flex-nowrap sm:gap-0">
                {[
                  { val: "12 Weeks", label: "Programme Duration" },
                  { val: "Jul 26", label: "Closes" },
                  { val: "36+ States", label: "Nigeria-Wide" },
                  { val: "18-35", label: "Age Requirement" },
                ].map((s, i, arr) => (
                  <div className={heroStatClass(i, arr.length)} key={s.label}>
                    <div className="mb-[0.28rem] font-heading text-[1.2rem] leading-none font-bold text-[#2dd4bf]">
                      {s.val}
                    </div>
                    <div className="font-body text-[0.72rem] font-light tracking-[0.04em] text-white/[0.42]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-2 order-first flex items-center [animation:fade-up_0.7s_0.2s_ease_both] lg:order-none">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=720&q=85&auto=format&fit=crop"
                alt="Early-stage founders collaborating in a workspace"
                className="block h-auto w-full rounded-xl object-cover aspect-[4/3] object-[center_15%] shadow-[0_0_0_1px_rgba(0,164,149,0.2),0_20px_56px_rgba(0,0,0,0.42)] sm:aspect-[16/7] lg:aspect-[4/3] lg:object-[center_20%]"
                width={720}
                height={540}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-grey-bg py-16 sm:py-22" id="idice-about">
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <span data-reveal className={`mb-3 inline-block font-heading text-[0.7rem] font-bold tracking-[0.2em] text-teal uppercase ${REVEAL_BASE}`}>
                About the Programme
              </span>
              <h2
                data-reveal
                className={`mb-[0.9rem] font-heading text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] font-bold text-primary ${REVEAL_BASE} ${revealDelay(0)}`}
              >
                Built for Founders Ready to Start Strong
              </h2>
              <p
                data-reveal
                className={`mb-3 max-w-[620px] font-body text-[0.97rem] leading-[1.85] font-light text-secondary last-of-type:mb-0 ${REVEAL_BASE} ${revealDelay(1)}`}
              >
                Founders Lab is for early-stage innovators ready to turn ideas into real businesses. If you have an
                idea, prototype, or early MVP, the programme gives you the guidance, structure, and practical tools
                needed to start strong.
              </p>
              <p
                data-reveal
                className={`mb-3 max-w-[620px] font-body text-[0.97rem] leading-[1.85] font-light text-secondary last-of-type:mb-0 ${REVEAL_BASE} ${revealDelay(2)}`}
              >
                Using a hands-on, build-as-you-learn approach, founders develop clearer products and stronger
                business models. Milestone-based funding is also provided to help transform progress into growth.
              </p>
            </div>

            <div
              data-reveal
              className={`relative overflow-hidden rounded-xl border-[1.5px] border-grey-border bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.05)] ${REVEAL_BASE} ${revealDelay(1)}`}
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal to-purple" />
              <p className="mb-3 font-heading text-[0.7rem] font-bold tracking-[0.14em] text-teal uppercase">
                Programme Snapshot
              </p>
              <p className="mb-3 font-heading text-[1.35rem] leading-[1.25] font-bold text-primary">
                Hands-On. Structured. Funded.
              </p>
              <p className="mb-6 font-body text-[0.9rem] leading-[1.75] font-light text-secondary">
                A 12-week build-as-you-learn experience — combining practical tools, structured milestones and
                funding to move founders from idea to execution.
              </p>
              <div className="flex flex-col gap-[0.65rem] border-t border-grey-border pt-5">
                <div className="flex items-center gap-[0.65rem] font-body text-[0.88rem] font-light text-secondary">
                  <span className="w-[1.4rem] shrink-0 text-center text-base">📅</span>
                  <span>
                    Closes <strong className="font-semibold text-primary">July 26, 2026</strong>
                  </span>
                </div>
                <div className="flex items-center gap-[0.65rem] font-body text-[0.88rem] font-light text-secondary">
                  <span className="w-[1.4rem] shrink-0 text-center text-base">📍</span>
                  <span>All 36 states + FCT Abuja</span>
                </div>
                <div className="flex items-center gap-[0.65rem] font-body text-[0.88rem] font-light text-secondary">
                  <span className="w-[1.4rem] shrink-0 text-center text-base">⏱️</span>
                  <span>12 weeks · Applications ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME STRUCTURE */}
      <section className="bg-white py-16 sm:py-22" id="idice-programme">
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <span data-reveal className={`mb-3 inline-block font-heading text-[0.7rem] font-bold tracking-[0.2em] text-teal uppercase ${REVEAL_BASE}`}>
            Programme Structure
          </span>
          <h2
            data-reveal
            className={`mb-[0.9rem] font-heading text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] font-bold text-primary ${REVEAL_BASE} ${revealDelay(0)}`}
          >
            A 12-Week Founder Journey
          </h2>
          <p
            data-reveal
            className={`mb-3 max-w-[620px] font-body text-[0.97rem] leading-[1.85] font-light text-secondary last-of-type:mb-0 ${REVEAL_BASE} ${revealDelay(1)}`}
          >
            From idea through market validation to Demo Day — with expert support at every step.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {PROGRAMME_STEPS.map((step, i) => {
              const isLast = i === PROGRAMME_STEPS.length - 1;
              return (
                <div
                  key={step.title}
                  data-reveal
                  className={`${progCardClass(isLast)} ${REVEAL_BASE} ${revealDelay(i)}`}
                >
                  <div className={progCardTopClass(isLast)}>
                    <span className="shrink-0 text-[1.65rem] leading-none">{step.icon}</span>
                    <span className="font-heading text-[0.7rem] font-bold tracking-[0.13em] text-teal uppercase">
                      {step.week}
                    </span>
                  </div>
                  <p className={progTitleClass(isLast)}>{step.title}</p>
                  <p className={progDescClass(isLast)}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-grey-bg py-16 sm:py-22" id="idice-eligibility">
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <span data-reveal className={`mb-3 inline-block font-heading text-[0.7rem] font-bold tracking-[0.2em] text-teal uppercase ${REVEAL_BASE}`}>
            Who Should Apply
          </span>
          <h2
            data-reveal
            className={`mb-[0.9rem] font-heading text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.2] font-bold text-primary ${REVEAL_BASE} ${revealDelay(0)}`}
          >
            The Programme is Designed For
          </h2>
          <p
            data-reveal
            className={`mb-3 max-w-[620px] font-body text-[0.97rem] leading-[1.85] font-light text-secondary last-of-type:mb-0 ${REVEAL_BASE} ${revealDelay(1)}`}
          >
            Founders Lab is built for early-stage innovators across Nigeria who are ready to commit to structured
            learning and take decisive steps on their idea.
          </p>

          <div
            data-reveal
            className={`mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 ${REVEAL_BASE} ${revealDelay(2)}`}
          >
            {ELIGIBILITY.map((item) => (
              <div
                key={item}
                className="flex items-start gap-[0.85rem] rounded-[10px] border-[1.5px] border-grey-border bg-white px-5 py-[1.1rem] transition-[border-color,box-shadow] duration-200 hover:border-teal/28 hover:shadow-[0_0_0_3px_rgba(0,164,149,0.06)]"
              >
                <span className="mt-px flex h-[22px] w-[22px] min-w-[22px] shrink-0 items-center justify-center rounded-full bg-teal text-[0.68rem] font-bold text-white">
                  ✓
                </span>
                <p className="font-body text-[0.9rem] leading-[1.6] font-normal text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal to-teal-dark py-16 sm:py-22 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_70%_at_85%_50%,rgba(255,255,255,0.07)_0%,transparent_55%),radial-gradient(ellipse_40%_60%_at_10%_60%,rgba(130,30,107,0.14)_0%,transparent_55%)] before:content-['']">
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <div className="relative z-1 mx-auto max-w-[720px] text-center">
            <span
              data-reveal
              className={`mb-3 inline-block font-heading text-[0.7rem] font-bold tracking-[0.2em] text-[rgba(255,255,255,0.65)] uppercase ${REVEAL_BASE}`}
            >
              Apply Now
            </span>
            <h2
              data-reveal
              className={`mb-4 font-heading text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.15] font-bold text-white ${REVEAL_BASE} ${revealDelay(0)}`}
            >
              Ready to Build Your Business?
            </h2>
            <p
              data-reveal
              className={`mb-8 font-body text-base leading-[1.85] font-light text-white/[0.88] ${REVEAL_BASE} ${revealDelay(1)}`}
            >
              Applications are ongoing and close on <strong className="font-semibold text-white">July 26, 2026</strong>. If you have an idea, prototype,
              or early MVP — apply today and get the guidance, structure and funding to start strong.
            </p>
            <div data-reveal className={`${REVEAL_BASE} ${revealDelay(2)}`}>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-white px-[2.4rem] py-[0.9rem] font-heading text-[0.97rem] font-semibold tracking-[0.03em] text-teal-dark no-underline shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#e6faf8] hover:text-teal-dark hover:no-underline hover:shadow-[0_8px_26px_rgba(0,0,0,0.22)]"
              >
                Apply Now →
              </a>
            </div>
            <p
              data-reveal
              className={`mt-[1.1rem] font-body text-[0.8rem] font-light text-white/[0.62] ${REVEAL_BASE} ${revealDelay(3)}`}
            >
              Closes July 26, 2026 · Ages 18–35 · Open to all 36 states + FCT Abuja
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
