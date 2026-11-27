import Link from "next/link";

const noteItems = [
  "No Operational Structure",
  "Weak Decision-Making Data",
  "Customer Retention Gaps",
  "Pricing Misalignment",
  "Scaling Too Early",
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Shared by the homepage and the /business-checkup page's own hero, so the pitch reads identically in both places.
export function BusinessCheckupHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#007d71_0%,#024b30_100%)] px-4 py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(255,255,255,0.14)_0%,transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
      <div className="relative z-10 mx-auto grid max-w-300 grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-3 text-xs font-bold uppercase tracking-widest">
            Full Business Checkup for Founders
          </div>

          <h1 className="mb-6 max-w-165 font-heading text-4xl leading-tight md:text-5xl">
            Most Founders Think <span className="text-teal">Money</span> Is Always What They Need
          </h1>

          <div className="mb-7 h-1 w-17.5 rounded-full bg-[linear-gradient(90deg,#00a495,#821e6b)]" />

          <p className="mb-4 max-w-160 text-lg leading-relaxed text-white/85">
            When growth slows, the instinct is to raise more capital. But founders who&apos;ve worked with us reveal
            something different, their real constraints aren&apos;t financial. They&apos;re operational, strategic,
            or systemic.
          </p>

          <p className="max-w-155 font-semibold text-white">Money alone won&apos;t fix what&apos;s actually broken.</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/business-checkup-form"
              className="inline-flex items-center gap-3 rounded-full bg-purple px-8 py-4 font-heading font-bold text-white shadow-brand-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-hover"
            >
              Take the Full Business Checkup
              <ArrowIcon />
            </Link>
            <span className="text-sm text-white/60">Takes only 5 minutes</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rotate-[-0.7deg] overflow-hidden rounded-3xl bg-[#fff7e8] p-8 shadow-brand-lg">
            <div className="absolute left-1/2 top-[-10px] h-5.5 w-5.5 -translate-x-1/2 rounded-full bg-[#d4333f] shadow-[0_4px_14px_rgba(212,51,63,0.3)]" />
            <p className="mb-6 font-heading text-lg font-bold text-primary">What&apos;s Actually Slowing Growth</p>
            {noteItems.map((item) => (
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
  );
}
