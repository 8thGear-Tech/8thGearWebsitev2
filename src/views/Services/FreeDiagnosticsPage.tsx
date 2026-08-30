"use client";

const brokenItems = [
  {
    icon: "🏗️",
    title: "No Operational Structure",
    desc: "Your team is working hard but without systems in place, everything depends on you.",
  },
  {
    icon: "📊",
    title: "Weak Decision-Making Data",
    desc: "Decisions are gut-driven. Without reliable data, every move is a guess.",
  },
  {
    icon: "🔄",
    title: "Customer Retention Gaps",
    desc: "You're acquiring customers but losing them quietly. Revenue never compounds.",
  },
  {
    icon: "💰",
    title: "Pricing Misalignment",
    desc: "Your pricing doesn't reflect your value, you're leaving money on the table.",
  },
  {
    icon: "🚀",
    title: "Scaling Too Early",
    desc: "Growing before the foundation is solid amplifies every problem you already have.",
  },
];

const steps = [
  {
    icon: "⏱️",
    title: "5-Minute Diagnostic",
    desc: "Answer focused questions designed to surface your real operational constraints not the symptoms.",
  },
  {
    icon: "🔍",
    title: "Identify What's Actually Broken",
    desc: "Get a clear picture of which area is truly holding your growth back.",
  },
  {
    icon: "🗺️",
    title: "Know Your Next Move",
    desc: "Walk away with actionable clarity on exactly where to focus your energy next.",
  },
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5l7kRjJTfdzKAAhff_VXCoihQUFwkEaUFZOkx3m5hyHUOpA/viewform?embedded=true";

function handleStartAssessment() {
  window.open(FORM_URL, "_blank", "noopener,noreferrer");
}

function AssessmentButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={handleStartAssessment}
      className="inline-flex items-center gap-3 rounded-full bg-purple px-8 py-4 font-heading font-bold text-white shadow-brand-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-hover"
    >
      {children}
      <ArrowIcon />
    </button>
  );
}

export function FreeDiagnosticsPage() {
  return (
    <div className="bg-white text-primary">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#007d71_0%,#024b30_100%)] px-4 py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(255,255,255,0.14)_0%,transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-300 grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-3 text-xs font-bold uppercase tracking-widest">
              For Founders Ready to Diagnose the Real Problem
            </div>

            <h1 className="mb-6 max-w-165 font-heading text-4xl leading-tight md:text-5xl">
              Most Founders Think <span className="text-teal">Money</span> Is Always What They Need
            </h1>

            <div className="mb-7 h-1 w-17.5 rounded-full bg-[linear-gradient(90deg,#00a495,#821e6b)]" />

            <p className="mb-4 max-w-160 text-lg leading-relaxed text-white/85">
              When growth slows, the instinct is to raise more capital. But founders who&apos;ve worked with us
              reveal something different, their real constraints aren&apos;t financial. They&apos;re operational,
              strategic, or systemic.
            </p>

            <p className="max-w-155 font-semibold text-white">Money alone won&apos;t fix what&apos;s actually broken.</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <AssessmentButton>Take the Free Assessment</AssessmentButton>
              <span className="text-sm text-white/60">Takes only 5 minutes</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rotate-[-0.7deg] overflow-hidden rounded-3xl bg-[#fff7e8] p-8 shadow-brand-lg">
              <div className="absolute left-1/2 top-[-10px] h-5.5 w-5.5 -translate-x-1/2 rounded-full bg-[#d4333f] shadow-[0_4px_14px_rgba(212,51,63,0.3)]" />
              <p className="mb-6 font-heading text-lg font-bold text-primary">What&apos;s Actually Slowing Growth</p>
              {[
                "No Operational Structure",
                "Weak Decision-Making Data",
                "Customer Retention Gaps",
                "Pricing Misalignment",
                "Scaling Too Early",
              ].map((item) => (
                <div key={item} className="mb-4 flex items-start gap-3 text-sm font-semibold leading-snug text-primary">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal">
                    <CheckIcon />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey-bg px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal">Here&apos;s What We&apos;re Actually Seeing</p>
            <h2 className="mb-5 font-heading text-3xl leading-tight text-primary">
              The Real Constraints Holding Founders Back
            </h2>
            <p className="max-w-150 text-secondary">
              Across every founder we&apos;ve worked with, the same five operational gaps keep surfacing and none of
              them are solved by writing a bigger cheque.
            </p>
            <div className="mt-7 h-1 w-17.5 rounded-full bg-[linear-gradient(90deg,#00a495,#821e6b)]" />
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {brokenItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-3xl border border-grey-border bg-white p-7 transition-transform hover:-translate-y-1 hover:shadow-brand-md"
                >
                  <div className="shrink-0 text-3xl">{item.icon}</div>
                  <div>
                    <p className="mb-2 font-heading font-bold text-primary">{item.title}</p>
                    <p className="text-sm text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-300">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal">Diagnose the Real Problem</p>
            <h2 className="font-heading text-3xl text-primary">
              Three Steps to Clarity
              <span className="ml-3 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#00a495,#007d71)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Free
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-150 text-secondary">
              No fluff. No sales pitch. Just a focused diagnostic that tells you exactly where to look.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-grey-border bg-white p-8 text-center shadow-[0_12px_40px_rgba(3,160,98,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(3,160,98,0.14)]"
              >
                <div className="mb-5 text-3xl">{step.icon}</div>
                <p className="mb-3 font-heading font-bold text-primary">{step.title}</p>
                <p className="text-sm text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#007d71_0%,#024b30_100%)] px-4 py-16 text-center text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12)_0%,transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-200">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal">The Free Assessment</p>
          <h2 className="mb-6 font-heading text-3xl leading-tight">
            Stop Guessing. Start <span className="text-teal">Growing</span>.
          </h2>
          <p className="mx-auto mb-8 max-w-160 text-lg leading-relaxed text-white/85">
            Take the 5-minute founder diagnostic and walk away knowing exactly which operational constraint is
            slowing your growth and what to do about it.
          </p>
          <AssessmentButton>Get Started &mdash; It&apos;s Free</AssessmentButton>
        </div>
      </section>
    </div>
  );
}
