"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaShop,
  FaBuildingColumns,
} from "react-icons/fa6";
import { IoMdSettings, IoIosPeople } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineEngineering, MdOutlineAttachMoney, MdGroupAdd } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { PillExternalLinkButton } from "@/components/Buttons/PillButtons";

const APPLY_FORM_URL = "https://forms.gle/WJEYcDTdFkgZ6rwUA";

export function VentureStudio() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />

      <div className="mx-auto flex max-w-[1000px] flex-col items-center px-4 py-12 text-center">
        <h3 className="font-heading text-purple">WHAT WE DO</h3>
        <p>
          At our venture studio, we create enterprises with sustainable business strategies. We prioritize engaging
          with potential clients from start and throughout the business lifecycle. Years of iterative learning have
          honed ability to identify the conditions that increase the chances of an idea&rsquo;s success. Our
          in-house team of experts are ready to turn ideas into viable businesses.
        </p>
      </div>

      <CoreServices />
      <HowWeDoIt />
      <ImpactMetrics />
      <PortfolioCompanies />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex h-[16.5rem] w-full items-center bg-[url('/images/ventureStudio/mobileHero.png')] bg-cover bg-center bg-no-repeat px-6 md:h-[20rem] md:px-10 md:bg-[url('/images/ventureStudio/tabHero.png')] xl:h-[34rem] xl:px-16 xl:bg-[url('/images/ventureStudio/heroImage1.png')]">
      <div className="max-w-[20rem] md:max-w-[34rem] xl:max-w-[50rem]">
        <h1 className="text-xl font-bold leading-[1.8rem] text-white md:text-3xl md:leading-[2.4rem] xl:text-5xl xl:leading-[3.5rem]">
          Transforming visionary ideas into thriving sustainable ventures with precision and passion
        </h1>
        <div className="mt-6">
          <PillExternalLinkButton href={APPLY_FORM_URL} className="bg-white">
            Transform Your Idea
          </PillExternalLinkButton>
        </div>
      </div>
    </div>
  );
}

const coreServices = [
  { icon: FaShop, label: "Go-To-Market Strategy" },
  { icon: IoColorPaletteOutline, label: "Visual & UX Design" },
  { icon: MdOutlineEngineering, label: "Engineering" },
  { icon: SiSimpleanalytics, label: "Business Analytics" },
  { icon: FaBuildingColumns, label: "Company Formation" },
  { icon: MdOutlineAttachMoney, label: "Finance" },
  { icon: IoMdSettings, label: "Operations" },
  { icon: IoIosPeople, label: "Legal & HR" },
  { icon: MdGroupAdd, label: "Recruiting" },
];

// Tripled so there's always a full set of cards buffered on either side of the
// visible one; the scroll handler below silently snaps back to the middle copy
// whenever the user scrolls into the leading/trailing copy, making the loop feel infinite.
const loopedCoreServices = [...coreServices, ...coreServices, ...coreServices];

function CoreServices() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const setWidth = () => el.scrollWidth / 3;
    el.scrollLeft = setWidth();

    const handleScroll = () => {
      const width = setWidth();
      if (el.scrollLeft < width * 0.5) {
        el.scrollLeft += width;
      } else if (el.scrollLeft > width * 1.5) {
        el.scrollLeft -= width;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-4 py-6">
      <h3 className="pb-8 text-center font-heading text-purple">SHARED SERVICES</h3>
      <div
        ref={scrollerRef}
        className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 [scroll-padding-inline:1rem]"
      >
        {loopedCoreServices.map(({ icon: Icon, label }, index) => (
          <div
            key={`${label}-${index}`}
            className="flex w-56 shrink-0 snap-center flex-col items-center rounded-xl border-2 border-grey-border bg-white p-8 text-center shadow-[0px_0px_20px_rgba(0,0,0,0.1)] sm:w-64"
          >
            <Icon className="h-12 w-12 py-2 text-5xl text-ink" />
            <hr className="my-3 w-full border-t-2 border-purple" />
            <p className="text-lg">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const howWeDoItStages = [
  {
    imgLink: "/images/ventureStudio/Ideation.png",
    title: "Ideation",
    body: "We explore intriguing and significant problems, diving in to find long-term solutions. Whether the idea originates from us or an external source, when we see potential, we act.",
  },
  {
    imgLink: "/images/ventureStudio/Validation.png",
    title: "Validation",
    body: "We test and validate assumptions by engaging with potential customers to ensure the problem is real and understand their desired solutions.",
  },
  {
    imgLink: "/images/ventureStudio/Creation.png",
    title: "Creation",
    body: "We deploy minimum variable products (MVP’s) quickly, learning from the market in real time and adjusting as needed. We continually refine the idea with customer feedback at the center of our decisions.",
  },
  {
    imgLink: "/images/ventureStudio/Spinout.png",
    title: "Spinout",
    body: "Upon achieving proof of concept with enthusiastic paying customers, we spin off the venture into a standalone enterprise. Our legal branding and HR experts create a robust commercial framework for new businesses.",
  },
  {
    imgLink: "/images/ventureStudio/Scaleup.png",
    title: "Scaleup",
    body: "We allow founders to focus on their core value offerings, ensure the businesses scales while maintaining focus on fundamentals and operational efficiency",
  },
];

function HowWeDoIt() {
  return (
    <div className="bg-[#f9fff5] px-4 py-12">
      <h3 className="pb-8 text-center font-heading text-purple">HOW WE DO IT</h3>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
        {howWeDoItStages.map((stage) => (
          <div key={stage.title} className="flex gap-4">
            <Image src={stage.imgLink} alt="" width={80} height={80} className="h-20 w-20 shrink-0" />
            <div>
              <h3 className="font-heading">{stage.title}</h3>
              <p className="text-base">{stage.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const impactMetrics = [
  { value: "75%", label: "Have Female Co-owners" },
  { value: "240", label: "Mentorship Hours" },
  { value: "12", label: "Portfolio Businesses" },
  { value: "20", label: "Jobs Created" },
];

function ImpactMetrics() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12 text-center">
      <h3 className="py-3 font-heading text-purple">IMPACT METRICS</h3>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {impactMetrics.map((m) => (
          <div key={m.label}>
            <h2 className="font-heading">{m.value}</h2>
            <p>{m.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <PillExternalLinkButton href={APPLY_FORM_URL}>Transform Your Idea</PillExternalLinkButton>
      </div>
    </div>
  );
}

const portfolioCompanies = [
  {
    imgLink: "/images/ventureStudio/haven.svg",
    headText: "Haven",
    subheading: "Portfolio",
    body: "An extra-curricular educational organization providing technology, languages, and arts training for children ages 4-16.",
    tags: ["Ed-Tech", "Lagos", "2019"],
  },
  {
    imgLink: "/images/ventureStudio/inKeeper.svg",
    headText: "Innkeeper",
    subheading: "Portfolio",
    body: "A job-tech venture providing talent development and matching services, upskilling African youth with in-demand tech skills for improved employability.",
    tags: ["Ed-Tech/Job Tech", "Lagos", "2021"],
  },
  {
    imgLink: "/images/digiPlus.png",
    headText: "Digiplus Connect",
    subheading: "Portfolio",
    body: "A technology company providing innovative digital solutions and platforms to support SMEs and multinational organizations.",
    tags: ["Retail Tech", "Lagos", "2023"],
  },
  {
    imgLink: "/images/trulance.png",
    headText: "Trulance",
    subheading: "Portfolio",
    body: "A global marketplace connecting businesses with vetted freelance developers, designers, content creators, and digital marketers for quality, timely delivery.",
    tags: ["Ed-Tech / Job Tech", "Lagos", "2023"],
  },
  {
    imgLink: "/images/legalmo.png",
    headText: "LegalMO",
    subheading: "Portfolio",
    body: "A legal tech platform promoting SME legal health by providing affordable, accessible legal services for startups and small businesses.",
    tags: ["Legal Tech", "Lagos", "2023"],
  },
  {
    imgLink: "/images/everythingMeat.png",
    headText: "Everything Meat",
    subheading: "Portfolio",
    body: "An e-commerce platform connecting buyers and sellers of freshly butchered livestock, ensuring easy access to high-quality meat products.",
    tags: ["Food Tech", "Lagos", "2024"],
  },
  {
    imgLink: "/images/finamo.jpg",
    headText: "FinaMo",
    subheading: "Portfolio",
    body: "Providing affordable, professional, tech-enabled accounting and financial management services to 8thGear's community and the Nigerian market.",
    tags: ["FinTech", "Lagos", "2025"],
  },
  {
    imgLink: "/images/ventureStudio/talenmo.png",
    headText: "TalenMo",
    subheading: "Portfolio",
    body: "A professional recruitment firm focused on sourcing, screening, and placing talent across permanent, contract, temporary, and graduate positions.",
    tags: ["Recruitment", "Lagos", "2026"],
  },
  {
    imgLink: "/images/aikiservices.png",
    headText: "Aiki Services",
    subheading: "Hub Member",
    body: "A provider of air conditioning, electrical, and plumbing solutions, specializing in facility management and technical vocational training for skills empowerment.",
    tags: ["Facility Management", "Lagos", "2020"],
  },
];

function PortfolioCompanies() {
  return (
    <div className="px-4 py-12 text-center">
      <div className="mx-auto max-w-2xl pb-8">
        <h3 className="font-heading text-purple">HUB MEMBERSHIP</h3>
        <p>A platform for collaboration and growth</p>
      </div>

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioCompanies.map((c) => (
          <div
            key={c.headText}
            className="flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(110,0,106,0.15)]"
          >
            <div className="flex min-h-[180px] items-center justify-center bg-[linear-gradient(180deg,#f9f9f9_0%,#ffffff_100%)] px-5 pb-5 pt-10">
              <div className="relative h-[120px] w-[140px]">
                <Image src={c.imgLink} alt={c.headText} fill sizes="140px" className="object-contain" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h4 className="mb-0 text-xl font-bold text-ink">{c.headText}</h4>
                <span className="shrink-0 rounded-xl bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">
                  {c.subheading}
                </span>
              </div>

              <p className="mb-4 flex-1 text-sm text-secondary">{c.body}</p>

              <div className="flex flex-wrap gap-2 border-t border-black/[0.06] pt-4">
                {c.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-grey-bg px-3 py-1.5 text-xs font-medium text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <PillExternalLinkButton href={APPLY_FORM_URL}>Join Our Portfolio</PillExternalLinkButton>
      </div>
    </div>
  );
}
