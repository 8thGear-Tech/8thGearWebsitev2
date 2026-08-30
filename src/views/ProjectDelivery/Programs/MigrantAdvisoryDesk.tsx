import Image from "next/image";
import migrationadvisorydesk from "@/assets/images/talentplacement/migrationadvisorydesk.jpg";
import german from "@/assets/images/projectdelivery/m.A.D/Aligned GIZ DTC Nigeria Block-Approve-Logo  2.png";
import giz from "@/assets/images/projectdelivery/m.A.D/gizlogo_unternehmen-en-implemented-rgb-300.jpg.jpeg";
import ngc from "@/assets/images/projectdelivery/m.A.D/download.png";
import fmle from "@/assets/images/projectdelivery/m.A.D/FMLE.png";

export function MigrantAdvisoryDesk() {
  return (
    <div>
      <MADHero />
      <MADAbout />
      <MADServices />
      <MADWhoWeServe />
      <MADPartners />
      <MADHowItWorks />
      <MADCTA />
    </div>
  );
}

function MADHero() {
  const checklist = [
    "Career Guidance & Counselling",
    "Vocational, Technical & Digital Upskilling",
    "Employability Preparation",
    "Local & Migration Opportunities",
  ];

  return (
    <div
      id="migrant-advisory-desk"
      className="bg-[linear-gradient(135deg,rgba(130,30,107,0.05)_0%,rgba(130,30,107,0.15)_100%)] py-12"
    >
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 font-bold">Migrant Advisory Desk</h2>
            <h5 className="mb-4 text-lg">Verified Guidance for Safe, Successful Migration</h5>

            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#821E6B]">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <h6 className="mb-0 text-[#681955]">{item}</h6>
                </div>
              ))}
            </div>

            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href="https://chat.whatsapp.com/HDLz4wKecgt19Cl3oSAW1O"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-[#6E006A] px-4 py-2 font-semibold text-[#6E006A] transition-transform hover:-translate-y-0.5"
              >
                Join Applicants Group →
              </a>

              <a
                href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-[#6E006A] px-4 py-2 font-semibold text-[#6E006A] transition-transform hover:-translate-y-0.5"
              >
                Access Talent Pool →
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl bg-white p-4 shadow-[0_10px_40px_rgba(130,30,107,0.15)]">
              <Image src={migrationadvisorydesk} alt="Migrant Advisory Desk" className="w-full rounded-lg" />
            </div>
            <div className="absolute -right-5 -top-5 -z-10 h-[100px] w-[100px] rounded-full bg-[rgba(130,30,107,0.1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MADAbout() {
  const cards = [
    {
      icon: "🎯",
      title: "Data-Driven",
      desc: "Guided assessments to understand unique skills and aspirations",
      borderClass: "border-t-[#6E006A]",
      bgClass: "bg-[rgba(110,0,106,0.1)]",
    },
    {
      icon: "🛣️",
      title: "Clear Pathways",
      desc: "Direct connections to training, jobs, and migration opportunities",
      borderClass: "border-t-[#9B1B96]",
      bgClass: "bg-[rgba(155,27,150,0.1)]",
    },
    {
      icon: "✅",
      title: "Informed Decisions",
      desc: "Reduce risks and improve long-term economic outcomes",
      borderClass: "border-t-[#E91E63]",
      bgClass: "bg-[rgba(233,30,99,0.1)]",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[900px] px-4">
        <div className="mb-4 text-center">
          <h3 className="font-bold">What is the Migrant Advisory Desk?</h3>
          <p className="text-secondary">Making informed decisions about skills, livelihoods, and migration</p>
        </div>

        <div className="mb-12 rounded-xl bg-white px-6 py-6 shadow-brand">
          <p className="mb-3 leading-[1.9] text-[#4a5568]">
            The <strong>Migrant Advisory Desk (m.A.D)</strong> is a structured counselling and profiling platform
            developed by GIZ and implemented by 8thGear to empower young people, especially those not in education,
            employment, or training (NEETs) to make informed decisions about skills, livelihoods, and migration.
            Through m.A.D, 8thGear supports MSMEs by connecting them with trained, job-ready talent that meets their
            specific workforce needs.
          </p>
          <p className="mb-0 leading-[1.9] text-[#4a5568]">
            Using guided interviews and data-driven tools, we assess individual backgrounds, interests, and
            constraints, then link participants to appropriate training, employment, or enterprise pathways. For
            MSMEs, we provide direct access to a pool of skilled, motivated candidates while reducing uninformed
            migration and improving long-term economic outcomes for individuals and businesses alike.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl border-t-4 bg-white p-4 text-center shadow-brand ${card.borderClass}`}
            >
              <div className={`mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full ${card.bgClass}`}>
                <span className="text-4xl">{card.icon}</span>
              </div>
              <h5 className="mb-2 font-bold">{card.title}</h5>
              <p className="mb-0 text-secondary">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🗺️",
    title: "Migration Counselling",
    description:
      "Expert guidance on legal migration pathways, requirements, and risks. Comprehensive support for safe, informed migration decisions.",
    borderLeftClass: "border-l-[#6E006A]",
    bgClass: "bg-[#6E006A]",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    description:
      "Professional career counselling for local jobseekers. Skills assessment and pathway planning for sustainable employment.",
    borderLeftClass: "border-l-[#9B1B96]",
    bgClass: "bg-[#9B1B96]",
  },
  {
    icon: "🎓",
    title: "Skills Training",
    description:
      "Employability workshops covering CV writing, digital skills, and workplace readiness. Sector-specific training aligned with market demand.",
    borderLeftClass: "border-l-[#E91E63]",
    bgClass: "bg-[#E91E63]",
  },
  {
    icon: "🤝",
    title: "Job Placement",
    description: "Direct connections to employment opportunities through our extensive employer network and partnerships.",
    borderLeftClass: "border-l-[#9C27B0]",
    bgClass: "bg-[#9C27B0]",
  },
  {
    icon: "🏠",
    title: "Reintegration Support",
    description:
      "Comprehensive support for returnees from abroad, including entrepreneurship guidance and local job placement.",
    borderLeftClass: "border-l-[#3F51B5]",
    bgClass: "bg-[#3F51B5]",
  },
  {
    icon: "📊",
    title: "Labour Market Intelligence",
    description: "Data-driven insights on skills demand, market gaps, and employment trends to guide your decisions.",
    borderLeftClass: "border-l-[#009688]",
    bgClass: "bg-[#009688]",
  },
];

function MADServices() {
  return (
    <section className="bg-[linear-gradient(135deg,#f5f0f5_0%,#ffffff_100%)] py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-2 font-bold">Our Services</h3>
          <p className="text-secondary">Comprehensive support for your journey</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl border-l-[5px] bg-white p-4 shadow-brand ${service.borderLeftClass}`}
            >
              <div className={`mb-3 flex h-[60px] w-[60px] items-center justify-center rounded-xl text-[1.8rem] ${service.bgClass}`}>
                {service.icon}
              </div>
              <h5 className="mb-2 font-bold">{service.title}</h5>
              <p className="mb-0 text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const targetGroups = [
  {
    title: "MSMEs & Employers in Lagos",
    description:
      "Businesses seeking access to trained, job-ready talent for their workforce needs through our verified talent pool",
    icon: "🏢",
  },
  {
    title: "Youth Jobseekers in Lagos",
    description: "Unemployed and underemployed young people seeking career opportunities and skills development",
    icon: "👥",
  },
  {
    title: "Prospective Migrants",
    description: "Individuals seeking structured pathways to study, vocational training, or work in Germany",
    icon: "✈️",
  },
  {
    title: "Returnees from Germany/Europe",
    description: "Migrants requiring reintegration support and access to local opportunities",
    icon: "🏠",
  },
  {
    title: "Training Providers & Sponsors",
    description: "Organizations seeking direct access to motivated, ready participants",
    icon: "🎓",
  },
];

function MADWhoWeServe() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold">Who We Serve</h3>
          <p className="text-secondary">Supporting diverse groups on their journey to success</p>
        </div>

        <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {targetGroups.map((group) => (
            <div key={group.title} className="h-full rounded-xl bg-white p-4 shadow-brand">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6E006A,#9B1B96)] text-3xl">
                  {group.icon}
                </div>
                <div>
                  <h5 className="mb-2 font-bold">{group.title}</h5>
                  <p className="mb-0 text-secondary">{group.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partnerLogos = [
  { src: german, alt: "German Cooperation" },
  { src: giz, alt: "GIZ" },
  { src: ngc, alt: "Nigerian-German Centre" },
  { src: fmle, alt: "Federal Ministry of Labour & Employment" },
];

function MADPartners() {
  return (
    <section className="bg-[linear-gradient(135deg,#f5f0f5_0%,#e8d4e8_100%)] py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-bold">Our Partners</h3>
        </div>

        <div className="mx-auto max-w-[850px] rounded-xl bg-white p-4 shadow-brand">
          <div className="flex flex-wrap items-center justify-center gap-1">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="relative h-[110px] w-[160px] p-1">
                <Image src={logo.src} alt={logo.alt} fill sizes="160px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "1",
    title: "Migration & Employment Counselling",
    description:
      "Expert guidance on legal migration pathways, career counselling for jobseekers, and reintegration support for returnees.",
  },
  {
    number: "2",
    title: "Labour Market Data Hub",
    description:
      "Profile jobseekers and migrants, capture skills and aspirations, and provide data-driven labour market insights.",
  },
  {
    number: "3",
    title: "Training & Upskilling",
    description:
      "Employability workshops and sector-specific training in healthcare, ICT, logistics, construction through partnership programs.",
  },
  {
    number: "4",
    title: "Partnerships & Programme Alignment",
    description:
      "Collaboration with GIZ/ZME, LEEP (Labour Employment and Empowerment Programme, Federal Ministry of Youth Development), government programs, and corporate and NGO sponsors for comprehensive support.",
  },
];

function MADHowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 font-bold">How It Works</h3>
          <p className="text-secondary">Our comprehensive approach to migration advisory and talent development</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.number}
                className={`relative rounded-xl p-4 pt-8 shadow-brand ${
                  isLast ? "bg-[linear-gradient(135deg,#6E006A,#9B1B96)] text-white" : "bg-white text-black"
                }`}
              >
                <div
                  className={`absolute -top-[15px] left-5 flex h-[50px] w-[50px] items-center justify-center rounded-full text-2xl font-bold shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${
                    isLast ? "bg-white text-[#6E006A]" : "bg-[#6E006A] text-white"
                  }`}
                >
                  {step.number}
                </div>
                <div className="mt-2">
                  <h5 className="mb-2 font-bold">{step.title}</h5>
                  <p className={`mb-0 ${isLast ? "opacity-95" : ""}`}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MADCTA() {
  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#6E006A_0%,#9B1B96_100%)] py-10 text-white">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-4 font-bold">Ready to Start Your Journey?</h3>
          <p className="mb-4 leading-[1.8]">
            Whether you&apos;re an MSME seeking trained talent, a jobseeker planning your career, considering
            migration, need reintegration support, or looking to access our talent pool, the Migrant Advisory Desk is
            here to guide you every step of the way.
          </p>
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-lg font-bold text-[#6E006A]"
            >
              Get Counselling →
            </a>
            <a
              href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white px-6 py-3 text-lg font-bold text-white"
            >
              Access Talent Pool →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
