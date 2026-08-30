import Image from "next/image";
import Link from "next/link";

const whyChooseData = [
  {
    title: "Start",
    image: "/images/gaasImage/gaasprocess.png",
    description:
      "We build strong foundations by understanding your business needs and goals, then create a tailored growth strategy for successful launch and sustainable growth.",
  },
  {
    title: "Build",
    image: "/images/gaasImage/gaasbusiness.png",
    description:
      "Our experienced team provides hands-on support in marketing, sales, product development, and customer engagement to execute your strategy.",
  },
  {
    title: "Scale",
    image: "/images/gaasImage/gaaspeople.png",
    description:
      "We provide the expertise and tools to expand your market reach, optimize operations, and drive revenue growth to full potential.",
  },
];

const whatWeDoItems = [
  {
    title: "Advisory",
    description:
      "Our team of seasoned advisors provides strategic guidance and insights tailored to your unique business challenges. We help you navigate complex business environments and make informed decisions that drive growth.",
    imageUrl: "/images/gaasImage/advisory.jpg",
  },
  {
    title: "Networking",
    description:
      "We connect you with a vast network of industry experts, potential partners, and investors. Our extensive connections open doors to new opportunities and collaborations that can accelerate your business growth.",
    imageUrl: "/images/gaasImage/networking.jpg",
  },
  {
    title: "Growth Strategy",
    description:
      "We work closely with you to develop and implement a comprehensive growth strategy. This includes market analysis, competitive positioning, product development, and customer acquisition tactics designed to drive sustainable growth.",
    imageUrl: "/images/gaasImage/growthstrategy.jpg",
  },
  {
    title: "Deal Management",
    description:
      "Our GaaS service includes expert deal management support. We help you identify, negotiate, and close deals that align with your growth objectives, ensuring you get the best value and strategic fit for your business.",
    imageUrl: "/images/gaasImage/dealmgt.jpg",
  },
];

const programs = [
  {
    title: "MIRE",
    subtitle: "Market & Investment Readiness for Entrepreneurs",
    description:
      "Grant-ready, loan-ready, and investor-ready support for high-potential entrepreneurs. Access up to ₦5M in funding, workshops, mentorship, and investor pitch opportunities.",
    href: "/MIREPlus",
    icon: "💼",
  },
  {
    title: "EGL",
    subtitle: "Entrepreneurs Growth Lab",
    description:
      "Live quarterly masterclasses featuring hands-on digital tools and practical strategies for sales and marketing, accounting and bookkeeping, business IP protection, and team optimization.",
    href: "/entrepreneurs-growth-lab",
    icon: "🚀",
  },
  {
    title: "Hub Membership",
    subtitle: "Premium Growth Ecosystem",
    description:
      "Access accountability support, ecosystem connections, and exclusive growth sessions to accelerate your business.",
    href: "/hub-membership",
    icon: "⭐",
  },
];

const steps = [
  {
    id: 1,
    title: "DISCOVERY",
    icon: "/images/gaasImage/gaasicon1.png",
    description:
      "We begin with a deep dive into your business to understand your goals, challenges, and market environment. We use Discovery Calls and Discovery Forms to help us tailor our services to your specific needs.",
  },
  {
    id: 2,
    title: "STRATEGY DEVELOPMENT",
    icon: "/images/gaasImage/gaasicon2.png",
    description:
      "Our team collaborates with you to develop a customized growth strategy. We focus on actionable steps that can drive immediate and long-term results.",
  },
  {
    id: 3,
    title: "IMPLEMENTATION",
    icon: "/images/gaasImage/gaasicon3.png",
    description:
      "We support you in implementing the strategy, providing hands-on assistance in key areas such as marketing, sales, and operations. Our team ensures that the plan is executed effectively and efficiently.",
  },
  {
    id: 4,
    title: "MONITORING & OPTIMISATION",
    icon: "/images/gaasImage/gaasicon4.png",
    description:
      "We continuously monitor your progress and optimize the strategy as needed. Regular check-ins and performance reviews help us stay on track and make necessary adjustments to maximize growth.",
  },
  {
    id: 5,
    title: "SCALING UP",
    icon: "/images/gaasImage/gaasicon5.png",
    description:
      "As your business grows, we help you scale operations, enter new markets, and expand your customer base. Our goal is to ensure sustained growth and long-term success.",
  },
];

const successStories = [
  {
    id: 1,
    title: "Numo - San Fransisco, US.",
    description:
      "Numo sought to expand into the Nigerian FinTech market but faced some challenges. Our team provided the necessary market research, strategic guidance, networking opportunities and support that helped Numo quickly gain traction, establish credibility, and receive positive user feedback. As a result, Numo successfully penetrated the market and with this solid foundation is now set to expand into Kenya, South Africa, Vietnam, Thailand, Malaysia, and the Philippines.",
    image: "/images/gaasImage/numo.png",
  },
  {
    id: 2,
    title: "dNetgurus - Lagos, Nigeria.",
    description:
      "8thGear conducted comprehensive market research and strategic analysis for dNetgurus, helping them identify growth opportunities and enhance their service offerings. By providing strategic guidance and facilitating key industry collaborations, 8thGear enabled dNetgurus to strengthen its market position and expand its reach, establishing the company as a leading provider of innovative IT solutions.",
  },
];

const BOOKING_URL = "https://calendar.app.google/t7TiMRDyXA1Ssvxs8";

export function GrowthAsAService() {
  return (
    <>
      <GaaSHero />
      <WhyChooseUs />
      <WhatWeDo />
      <OurGrowthPrograms />
      <OurProcess />
      <OurSuccess />
      <GaasReady />
    </>
  );
}

function GaaSHero() {
  return (
    <div className="bg-[linear-gradient(135deg,#061b52,#010b23)] px-4 py-10 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="w-full md:w-1/2">
          <h1 className="font-heading text-3xl text-white md:text-[2.6rem]">
            Great people building <span className="text-[#00d2ff]">enduring ventures.</span>
          </h1>
          <p className="mt-3 text-white">
            Unlock your company&apos;s potential with tailored strategies, innovative technologies, and expert
            guidance.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg border border-white px-6 py-2 text-lg text-white transition-colors hover:bg-white hover:text-[#061b52]"
          >
            Book a Growth Session
          </a>
        </div>
        <div className="hidden w-1/2 md:block">
          <Image src="/images/gaasImage/gaasHero.png" alt="Growth" width={600} height={480} className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="px-4 py-12 text-center">
      <h4 className="mb-8 text-center uppercase text-purple">Why Choose Us</h4>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
        {whyChooseData.map((item) => (
          <div key={item.title} className="flex h-full flex-col rounded-xl bg-white p-6 shadow-brand-md">
            <div className="mx-auto mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-[0_0_0_20px_#F0E4EF]">
              <Image src={item.image} alt={item.title} width={60} height={60} className="h-[60px] w-[60px]" />
            </div>
            <h5 className="mt-2 font-bold text-black">{item.title}</h5>
            <hr className="my-2" />
            <p className="flex-grow text-left text-sm leading-relaxed text-[#6c757d]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <div className="bg-[#f7f2f7] px-4 py-12 text-center md:px-12">
      <h4 className="mb-8 text-center uppercase text-purple">What We Do</h4>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDoItems.map((item) => (
          <div key={item.title} className="flex h-full w-full max-w-[250px] flex-col border-0">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={250}
              height={200}
              className="h-[200px] w-full object-cover"
            />
            <div className="p-4 text-left">
              <h5 className="mb-1 text-lg">{item.title}</h5>
              <hr className="my-1" />
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-lg bg-purple px-6 py-2 text-lg text-[#D3D3D3] transition-colors hover:bg-[#D3D3D3] hover:text-black"
      >
        Book a Growth Session
      </a>
    </div>
  );
}

function OurGrowthPrograms() {
  return (
    <div className="px-4 py-12 md:px-12">
      <div className="mb-10 text-center">
        <h4 className="text-center uppercase text-purple">Our Programs</h4>
        <p className="text-[#6c757d]">Choose your growth path</p>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <div
            key={program.title}
            className="border-l-[6px] border-purple bg-white p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
          >
            <div className="mb-4 text-5xl">{program.icon}</div>
            <h4 className="mb-2 font-bold text-[#1a1a1a]">{program.title}</h4>
            <p className="mb-4 text-[#6c757d]">{program.subtitle}</p>
            <p className="mb-4 min-h-[100px] text-sm leading-relaxed text-[#4a5568]">{program.description}</p>
            <Link
              href={program.href}
              className="inline-flex items-center text-sm font-semibold text-purple transition-transform hover:translate-x-1"
            >
              Explore Program <span className="ml-2 text-lg">&rarr;</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurProcess() {
  return (
    <div className="px-4 py-12 md:px-12">
      <h2 className="mb-8 text-center text-xl text-purple">Our Process</h2>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center rounded-2xl bg-[#F7F2F7] p-6 text-center">
            <Image src={step.icon} alt={step.title} width={50} height={50} className="mb-3 h-[50px] w-auto" />
            <h5 className="font-bold text-purple">{step.title}</h5>
            <p className="text-sm text-[#6c757d]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurSuccess() {
  return (
    <div className="bg-purple px-4 py-12 text-white md:px-12">
      <h2 className="mb-8 text-center text-xl">Our Success Stories</h2>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {successStories.map((story) => (
          <div key={story.id} className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h5 className="font-bold">{story.title}</h5>
              <p className="text-white">{story.description}</p>
            </div>
            {story.image && (
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image src={story.image} alt={story.title} fill className="object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GaasReady() {
  return (
    <div className="px-4 py-12 text-center">
      <h2 className="mb-3 font-bold">Ready to Accelerate Your Growth?</h2>
      <p className="mx-auto mb-4 max-w-2xl">
        Fill out this form and contact us today to learn more about our Growth-as-a-Service (GaaS) offerings and how
        we can help your business achieve its growth potential.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-purple px-6 py-2 text-lg text-[#D3D3D3] transition-colors hover:bg-[#D3D3D3] hover:text-black"
      >
        Book a Growth Session
      </a>
    </div>
  );
}
