const MSME_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV92nsSXNKZ0hsvZk2rxdFR8FV_5IaM-E9MvbPjwFRr4zhWQ/viewform";
const STUDENT_FORM_URL = "https://forms.gle/UGZsMrsXyKcaXj1AA";

export function DBN() {
  return (
    <div>
      <DBNHero />
      <DBNAbout />
      <DBNProgramHighlights />
      <DBNWhatYouGain />
      <DBNPitchCompetition />
      <DBNCTA />
    </div>
  );
}

function DBNHero() {
  return (
    <section className="flex min-h-[75vh] items-center bg-[linear-gradient(135deg,rgba(0,164,149,0.9)_0%,rgba(130,30,107,0.95)_100%)] py-10 text-white">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-white px-3 py-2 text-sm text-ink">
              Partnership with Development Bank of Nigeria
            </span>
          </div>
          <h3 className="mb-4 text-[1.8rem] font-bold leading-tight">
            DBN Entrepreneurship Training Programme 2026
          </h3>
          <p className="mb-6 leading-[1.8] text-white">
            Calling all Entrepreneurs and Business Owners in South West Nigeria! Join the Development Bank of
            Nigeria&apos;s flagship training, designed to empower MSMEs with skills for growth and funding readiness.
          </p>

          <div className="mb-4 inline-block rounded bg-white/20 px-4 py-3 backdrop-blur-[10px]">
            <p className="mb-0 text-sm font-semibold text-white">PROGRAMME STARTS</p>
            <h3 className="mb-0 text-[1.8rem] font-bold">February 2026</h3>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <div className="text-center">
              <a
                href={MSME_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-white px-7 py-3 text-base font-bold text-purple"
              >
                Apply Now →
              </a>
              <p className="mt-2 text-[0.78rem] text-white/75">For entrepreneurs &amp; MSMEs</p>
            </div>

            <div className="text-center">
              <a
                href={STUDENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border-2 border-white/80 px-7 py-2.5 text-base font-bold text-white"
              >
                Apply Now →
              </a>
              <p className="mt-2 text-[0.78rem] text-white/75">For students &amp; corp members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DBNAbout() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold text-purple">About the Programme</h3>
          <p className="text-secondary">Strengthening MSMEs for sustainable growth and financial readiness</p>
        </div>
        <div className="space-y-4 text-[#4a5568]">
          <p className="leading-[1.9]">
            The <strong>DBN Entrepreneurship Training Programme (ETP)</strong> is designed to strengthen Micro,
            Small, and Medium Enterprises (MSMEs) by equipping them with practical knowledge, essential tools, and
            strategic support to improve financial readiness, sustainability, and long-term growth.
          </p>
          <p className="leading-[1.9]">
            The programme enhances participants&apos; ability to access finance through Participating Financial
            Institutions (PFIs) while building their legal, operational, and strategic capacity.
          </p>
          <p className="font-semibold text-purple">
            Overall, the programme aligns with the Development Bank of Nigeria&apos;s (DBN) broader mandate to
            promote MSME growth, formalisation, and improved access to finance across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: "🎓",
    title: "Comprehensive Training",
    description: "Access a robust online LMS with tailored courses on business planning, finance, marketing & more",
    bg: "bg-teal",
    border: "border-l-teal",
  },
  {
    icon: "💼",
    title: "Practical Training",
    description: "Hands-on workshops in Ondo and Lagos States with expert facilitators",
    bg: "bg-[#FF6B35]",
    border: "border-l-[#FF6B35]",
  },
  {
    icon: "📜",
    title: "Certification",
    description: "Receive official certification upon successful programme completion",
    bg: "bg-purple",
    border: "border-l-purple",
  },
  {
    icon: "🤝",
    title: "PFI Access",
    description: "Enhanced connections to Participating Financial Institutions for funding opportunities",
    bg: "bg-teal",
    border: "border-l-teal",
  },
];

function DBNProgramHighlights() {
  return (
    <section className="bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] py-10">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold text-purple">Programme Highlights</h3>
          <p className="text-secondary">What makes this programme unique</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`flex h-full items-start gap-3 rounded-brand border-l-[5px] bg-white p-6 shadow-brand ${item.border}`}
            >
              <div
                className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl text-[1.8rem] ${item.bg}`}
              >
                {item.icon}
              </div>
              <div>
                <h5 className="mb-2 font-bold">{item.title}</h5>
                <p className="mb-0 text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center pt-16">
          <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-[linear-gradient(135deg,var(--color-teal)_0%,var(--color-purple)_100%)] text-white shadow-brand-lg">
            <div className="px-4 py-12 sm:px-8">
              <h3 className="mb-3 text-center font-bold">Who Should Join?</h3>
              <p className="mb-0 text-center text-white">
                <strong>MSMEs, startups and operators across all sectors</strong> in Ondo and Lagos States looking to
                strengthen their business foundations and improve access to finance.
              </p>

              <hr className="my-7 border-white/30" />

              <p className="mb-4 text-center text-[0.88rem] text-white/85">
                This programme is open to all. Select what describes you to apply:
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex h-full w-full max-w-sm flex-col justify-between rounded-xl border border-white/20 bg-white/10 p-4 sm:w-1/2 md:w-[42%]">
                  <div className="mb-3">
                    <p className="mb-1 text-[0.95rem] font-bold text-white">💼 Entrepreneurs &amp; MSMEs</p>
                    <p className="mb-0 text-[0.83rem] leading-[1.5] text-white/88">
                      Business owners and operators running an existing enterprise or startup
                    </p>
                  </div>
                  <a
                    href={MSME_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md bg-white/95 py-2.5 text-center text-[0.85rem] font-bold text-purple"
                  >
                    Apply Now →
                  </a>
                </div>

                <div className="flex h-full w-full max-w-sm flex-col justify-between rounded-xl border border-white/20 bg-white/10 p-4 sm:w-1/2 md:w-[42%]">
                  <div className="mb-3">
                    <p className="mb-1 text-[0.95rem] font-bold text-white">🎓 Students &amp; Corp Members</p>
                    <p className="mb-0 text-[0.83rem] leading-[1.5] text-white/88">
                      Nigerian university, polytechnic, college of education students, or serving corps members with
                      a business or interest in entrepreneurship
                    </p>
                  </div>
                  <a
                    href={STUDENT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md border-2 border-white/85 py-1.5 text-center text-[0.85rem] font-bold text-white"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Practical knowledge in business planning and financial management",
  "Enhanced legal and regulatory compliance understanding",
  "Improved financial readiness for accessing institutional funding",
  "Networking with fellow entrepreneurs and industry experts",
  "Access to DBN's network of Participating Financial Institutions",
  "Opportunity to participate in pitch competition for funding",
];

function DBNWhatYouGain() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold text-purple">What You&apos;ll Gain</h3>
          <p className="text-secondary">Transform your business with comprehensive support</p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded bg-[#f7f2f7] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal font-bold text-white">
                ✓
              </div>
              <p className="mb-0 font-semibold text-ink">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DBNPitchCompetition() {
  return (
    <section className="bg-[linear-gradient(135deg,rgba(0,164,149,0.05)_0%,rgba(130,30,107,0.05)_100%)] py-20">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="overflow-hidden rounded-2xl shadow-brand-lg">
          <div className="h-2 bg-[linear-gradient(90deg,var(--color-teal),var(--color-purple))]" />
          <div className="bg-white p-6 sm:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="md:w-2/3">
                <h3 className="mb-3 font-bold text-purple">🏆 Pitch Competition Opportunity</h3>
                <p className="mb-3 leading-[1.8] text-ink">
                  As part of the programme, a structured <strong>pitch competition</strong> will be organised to
                  showcase and reward high-performing MSMEs.
                </p>
                <div className="mb-3 rounded bg-teal/10 p-3">
                  <p className="mb-0 font-semibold">
                    💰 Prize Pool: <span className="text-[1.5rem] text-teal">Up to ₦100,000,000</span>
                  </p>
                </div>
                <p className="mb-0 text-secondary">
                  Winners gain visibility, funding, and growth opportunities to scale their businesses.
                </p>
              </div>
              <div className="hidden text-center md:block md:w-1/3">
                <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-teal),var(--color-purple))] text-[4rem]">
                  🏆
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DBNCTA() {
  return (
    <section className="bg-[linear-gradient(135deg,var(--color-teal)_0%,var(--color-purple)_100%)] py-10 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h3 className="mb-4 font-bold">Ready to Transform Your Business?</h3>
        <p className="mb-4 leading-[1.8] text-white">
          Join MSMEs across Ondo and Lagos States in building financial readiness, operational capacity, and
          sustainable growth pathways.
        </p>
        <div className="mb-12">
          <p className="mb-0 font-semibold text-white/95">
            Programme starts: <strong>February 2026</strong>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-stretch">
          <div className="w-full max-w-[320px] rounded-xl border border-white/25 bg-white/10 p-4 text-left backdrop-blur-sm">
            <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-wider text-white/80">
              Entrepreneurs &amp; MSMEs
            </p>
            <p className="mb-3 text-[0.85rem] text-white/90">Business owners &amp; operators in Ondo and Lagos States</p>
            <a
              href={MSME_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-white py-2.5 text-center text-[0.95rem] font-bold text-purple"
            >
              Reserve Your Spot →
            </a>
          </div>

          <div className="w-full max-w-[320px] rounded-xl border border-white/25 bg-white/10 p-4 text-left backdrop-blur-sm">
            <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-wider text-white/80">
              Students &amp; Corp Members
            </p>
            <p className="mb-3 text-[0.85rem] text-white/90">
              University, polytechnic students &amp; serving corps members
            </p>
            <a
              href={STUDENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border-2 border-white/90 py-2 text-center text-[0.95rem] font-bold text-white"
            >
              Reserve Your Spot →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
