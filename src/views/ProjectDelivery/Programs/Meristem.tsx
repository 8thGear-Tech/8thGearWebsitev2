import Image from "next/image";
import meristemLogo from "@/assets/images/projectdelivery/meristem/meristem.png";

export function MeristemGreenLagos() {
  return (
    <div>
      <MeristemHero />
      <MeristemJourney />
      <MeristemCohortII />
      <MeristemDeliverables />
      <MeristemImpact />
    </div>
  );
}

function MeristemHero() {
  return (
    <section
      id="meristem-green-lagos"
      className="relative flex min-h-[85vh] items-center bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_40%),radial-gradient(circle_at_bottom_left,rgba(61,124,94,0.15)_0%,transparent_40%),linear-gradient(135deg,#6E006A_0%,#3D7C5E_100%)] py-6"
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-4 inline-block rounded-full bg-[#3D7C5E] px-5 py-3 text-sm font-semibold text-white">
              Accelerator Program
            </span>

            <h1 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">MIRE Meristem</h1>

            <p className="mb-5 max-w-[600px] text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.7] text-white/95">
              Transforming 30 entrepreneurs into investment-ready founders through milestone-driven acceleration.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/95 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-[18px] md:p-8">
              <Image src={meristemLogo} alt="More Lagos Green" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const journey = [
  {
    phase: "Select",
    icon: "🎯",
    description: "30 entrepreneurs chosen through rigorous screening",
    borderClass: "border-[#6E006A]",
    textClass: "text-[#6E006A]",
  },
  {
    phase: "Build",
    icon: "🛠️",
    description: "8 virtual sessions + 2 physical touchpoints for intensive development",
    borderClass: "border-[#3D7C5E]",
    textClass: "text-[#3D7C5E]",
  },
  {
    phase: "Validate",
    icon: "✅",
    description: "Business models, plans, and pitch decks tested and refined",
    borderClass: "border-[#F4A460]",
    textClass: "text-[#F4A460]",
  },
  {
    phase: "Invest",
    icon: "💰",
    description: "Top 13 businesses advance to More by Meristem investment",
    borderClass: "border-[#9B1B96]",
    textClass: "text-[#9B1B96]",
  },
];

function MeristemJourney() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold">The Journey</h3>
          <p className="mx-auto max-w-[700px] text-[1.1rem] text-secondary">
            A structured pathway from selection to investment readiness
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-20 left-[12%] right-[12%] hidden h-[3px] bg-[linear-gradient(90deg,#6E006A,#3D7C5E,#F4A460,#9B1B96)] lg:block" />

          <div className="relative z-[1] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <div key={step.phase} className="text-center">
                <div
                  className={`mx-auto mb-3 flex h-[120px] w-[120px] items-center justify-center rounded-full border-4 bg-white text-5xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] ${step.borderClass}`}
                >
                  {step.icon}
                </div>
                <h4 className={`mb-2 font-bold ${step.textClass}`}>{step.phase}</h4>
                <p className="mb-0 text-[0.95rem] text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MeristemCohortII() {
  return (
    <section className="border-t-[6px] border-t-[#3D7C5E] bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-[880px]">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#3D7C5E30] bg-[linear-gradient(135deg,#6E006A10_0%,#3D7C5E15_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#3D7C5E20,transparent_70%)]" />

            <div className="relative z-[1] grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="mb-3 inline-block rounded-full bg-[#F4A460] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#333]">
                  Applications Open
                </span>

                <h3 className="mb-3 font-bold text-[#6E006A]">MIRE Meristem Cohort II</h3>

                <p className="max-w-[520px] text-[1.05rem] leading-[1.8] text-[#4a5568]">
                  Applications are now open for the second cohort of the More Investment-Ready Entrepreneurs (MIRE)
                  accelerator. Express your interest today and take the first step toward building an
                  investment-ready business.
                </p>
              </div>

              <div className="text-center lg:col-span-5">
                <div className="mx-auto max-w-[320px] rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3D7C5E15] text-2xl">
                    📝
                  </div>
                  <h5 className="mb-1 text-center font-bold text-[#6E006A]">Expression of Interest</h5>
                  <p className="mb-4 text-center text-[0.88rem] text-secondary">
                    Complete the form to register your interest for Cohort II
                  </p>
                  <a
                    href="https://forms.cloud.microsoft/r/jCwR0wC256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-[10px] bg-[linear-gradient(135deg,#6E006A,#3D7C5E)] px-6 py-3.5 text-center font-bold text-white transition-opacity hover:opacity-90"
                  >
                    Apply Now →
                  </a>
                  <p className="mb-0 mt-3 text-[0.8rem] text-secondary">Limited spots available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeristemDeliverables() {
  const deliverables = [
    {
      icon: "📋",
      title: "Business Model Canvas",
      desc: "Validated framework with clear value proposition and revenue streams",
      borderTopClass: "border-t-[#6E006A]",
      iconBgClass: "bg-[#6E006A15]",
    },
    {
      icon: "📊",
      title: "Complete Business Plan",
      desc: "Market analysis, financials, and operational roadmap",
      borderTopClass: "border-t-[#3D7C5E]",
      iconBgClass: "bg-[#3D7C5E15]",
    },
    {
      icon: "🎤",
      title: "Investor Pitch Deck",
      desc: "Professional presentation ready for funding conversations",
      borderTopClass: "border-t-[#F4A460]",
      iconBgClass: "bg-[#F4A46015]",
    },
    {
      icon: "🤝",
      title: "Network Access",
      desc: "Connections with mentors, investors, and peer entrepreneurs",
      borderTopClass: "border-t-[#9B1B96]",
      iconBgClass: "bg-[#9B1B9615]",
    },
  ];

  return (
    <section className="bg-[linear-gradient(135deg,#f8f4f8_0%,#f0f8f4_100%)] py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-4 font-bold">What Participants Achieve</h2>
            <p className="mb-4 leading-[1.8] text-[#4a5568]">
              Every entrepreneur completes the program with tangible, investor-ready outputs developed through expert
              guidance and peer collaboration.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#6E006A] p-4 text-center text-white">
                <h3 className="mb-1 font-bold">100%</h3>
                <p className="mb-0 text-[0.85rem] text-white">Completion Rate</p>
              </div>
              <div className="rounded-xl bg-[#3D7C5E] p-4 text-center text-white">
                <h3 className="mb-1 font-bold">56.5%</h3>
                <p className="mb-0 text-[0.85rem] text-white">Investment Track</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className={`h-full rounded-xl border-t-[5px] bg-white p-4 shadow-brand transition-transform hover:-translate-y-1 ${item.borderTopClass}`}
                >
                  <div className={`mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-xl text-2xl ${item.iconBgClass}`}>
                    {item.icon}
                  </div>
                  <h5 className="mb-2 font-bold">{item.title}</h5>
                  <p className="mb-0 text-[0.9rem] text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const impactPoints = [
  {
    icon: "🚀",
    title: "Accelerated Growth",
    desc: "30-week intensive program compressing years of learning",
  },
  {
    icon: "🎓",
    title: "Expert Guidance",
    desc: "Mentorship from successful founders and industry leaders",
  },
  {
    icon: "💎",
    title: "Investment Pipeline",
    desc: "Direct access to More by Meristem funding opportunities",
  },
];

function MeristemImpact() {
  return (
    <section className="bg-[linear-gradient(135deg,#6E006A_0%,#3D7C5E_100%)] py-20 text-white">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-[880px]">
          <div className="mb-5 text-center">
            <h3 className="mb-4 font-bold">Building Investment-Ready Businesses</h3>
            <p className="mx-auto max-w-[800px] leading-[1.8] text-white/95">
              More Lagos Green represents the partnership between 8thGear and More by Meristem to nurture
              Nigeria&apos;s next generation of successful entrepreneurs through structured acceleration and direct
              investment pathways.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {impactPoints.map((item) => (
              <div key={item.title} className="p-4 text-center">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 text-4xl">
                  {item.icon}
                </div>
                <h5 className="mb-2 font-bold">{item.title}</h5>
                <p className="mb-0 text-[0.95rem] text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
