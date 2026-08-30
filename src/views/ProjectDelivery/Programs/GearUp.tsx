"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PartnersMarquee } from "@/components/PartnersMarquee";

import rocket from "@/assets/images/projectdelivery/gearup-training/rocket.png";
import imgOne from "@/assets/images/projectdelivery/gearup-training/imgOne.png";
import imgTwo from "@/assets/images/projectdelivery/gearup-training/imgTwo.png";
import imgThree from "@/assets/images/projectdelivery/gearup-training/imgThree.png";
import applyNowTimer from "@/assets/images/projectdelivery/gearup-training/applyNowTimer.png";
import bridgeforbillions from "@/assets/images/projectdelivery/gearup-training/partners-logo/bridgeforbillions.png";
import cocacola from "@/assets/images/projectdelivery/gearup-training/partners-logo/cocacola.jpeg";
import idrccrdis from "@/assets/images/projectdelivery/gearup-training/partners-logo/idrccrdi.png";
import poul from "@/assets/images/projectdelivery/gearup-training/partners-logo/poul.png";
import strathmore from "@/assets/images/projectdelivery/gearup-training/partners-logo/strathmore.jpeg";
import melaninkapital from "@/assets/images/projectdelivery/gearup-training/partners-logo/melaninkapitall.png";
import aspen from "@/assets/images/projectdelivery/gearup-training/partners-logo/aspen.png";
import valueproposition from "@/assets/images/projectdelivery/gearup-training/icons/value-proposition.png";
import pricing from "@/assets/images/projectdelivery/gearup-training/icons/pricing.png";
import competitionmap from "@/assets/images/projectdelivery/gearup-training/icons/competition-map.png";
import financial from "@/assets/images/projectdelivery/gearup-training/icons/financial.png";
import stakeholder from "@/assets/images/projectdelivery/gearup-training/icons/stakeholder.png";
import impactplan from "@/assets/images/projectdelivery/gearup-training/icons/impact-plan.png";
import businessmodel from "@/assets/images/projectdelivery/gearup-training/icons/business-model.png";
import growthplan from "@/assets/images/projectdelivery/gearup-training/icons/growth-plan.png";

const APPLY_URL = "https://incubation.bridgeforbillions.org/signup?organization=224&program=586";

const gearUpPartnerLogos = [bridgeforbillions, cocacola, idrccrdis, poul, strathmore, melaninkapital, aspen];

export function GearUp() {
  return (
    <>
      <HeroSection />
      <AboutTheProgram />
      <CardCarousel />
      <WhoCanApply />
      <WhyJoinGearUp />
      <ModulesGrid />
      <ReadyToLaunch />
      <ApplyNowSection />
      <GearUpPartners />
    </>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#6E006A] py-16 text-white">
      <div className="mx-auto max-w-350 px-4">
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h3>
              Welcome to the GearUp <br />
              Incubation Program
            </h3>
            <p className="text-[1.2rem] text-white">
              <b>Your Launchpad to Building a Globally Relevant Business</b>
            </p>
            <p className="mb-8 text-[0.9rem] text-white">
              Powered by 8thGear Hub & Venture Studio, the GearUp Incubation Program is the first phase of a bold,
              multi-country initiative designed to spotlight and scale businesses with health-related outputs such
              as food, wellness, and hospital management, starting right here in Southwest Nigeria.
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <button className="rounded-md border border-white bg-white px-8 py-3 text-base font-bold text-[#6E006A]">
                Apply Now!
              </button>
            </a>
          </div>
          <div className="hidden w-full text-center lg:block lg:w-1/2">
            <Image src={rocket} alt="Rocket Launch" className="mx-auto w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutTheProgram() {
  return (
    <div>
      <div className="bg-[#F7E1F7] px-4 py-8 text-center">
        <p className="mx-auto max-w-175 px-3 py-3 text-center">
          Whether you are an ambitious founder ready to take your business idea to the next level or a seasoned
          professional passionate about mentoring the next generation of entrepreneurs, this is where your journey
          begins.
        </p>
      </div>

      <div className="mx-auto max-w-350 px-4 py-12">
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 font-bold uppercase">What is GearUp Incubation Program?</h4>
            <p>
              In just 4 months, the GearUp Incubation Program will equip early-stage entrepreneurs in healthcare and
              related sectors, such as health tech, nutrition, hospital management, and more with the tools,
              mentorship, and network to transform their ideas into investment-ready ventures. You&apos;ll join a
              vibrant Pan-African founder community and get hands-on support every step of the way.
            </p>
          </div>
          <div className="w-full text-center md:w-1/2">
            <Image src={imgOne} alt="Founders group" className="mx-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const carouselItems = [
  { title: "Structured Roadmap", description: "to validate and grow your business" },
  { title: "Access", description: "to exclusive investor networks" },
  { title: "1:1 Mentorship", description: "from seasoned business leaders" },
  { title: "Expert Support", description: "from our incubation team" },
  { title: "Peer Networking", description: "from other innovative founders" },
  { title: "Funding Opportunities", description: "from partner investors" },
  { title: "Global Partnerships", description: "opportunities to connect and collaborate worldwide" },
  { title: "Business Planning Tools", description: "to create an executive-ready plan and pitch" },
];

function CardCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollCarousel = (direction: "left" | "right") => {
    const el = carouselRef.current;
    const firstCard = el?.querySelector<HTMLElement>("[data-carousel-card]");
    if (!el || !firstCard) return;
    const cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(firstCard).marginRight || "0") + 32;
    el.scrollLeft += direction === "left" ? -cardWidth : cardWidth;
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleScroll = () => {
      const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]");
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth + 32;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const index =
        el.scrollLeft >= maxScrollLeft - 10
          ? carouselItems.length - 1
          : Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") scrollCarousel("left");
      else if (event.key === "ArrowRight") scrollCarousel("right");
    };

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-[#F1F8ED] py-12">
      <h4 className="mb-3 text-center font-bold uppercase">WHAT WILL SELECTED ENTREPRENEURS RECEIVE?</h4>

      <div className="relative flex items-center justify-center">
        <button
          onClick={() => scrollCarousel("left")}
          aria-label="Scroll left"
          className="absolute left-5 top-1/2 z-[1] hidden h-7.5 w-7.5 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccc] bg-white text-[#444] shadow-sm md:flex"
        >
          <BsArrowLeft size={16} />
        </button>
        <div
          ref={carouselRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto px-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {carouselItems.map((item) => (
            <div
              key={item.title}
              data-carousel-card
              className="mx-4 min-w-62.5 shrink-0 snap-center rounded-[10px] border border-[#D3D3D3] bg-white p-8 text-center"
            >
              <h4 className="mb-2 font-bold">{item.title}</h4>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollCarousel("right")}
          aria-label="Scroll right"
          className="absolute right-5 top-1/2 z-[1] hidden h-7.5 w-7.5 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccc] bg-white text-[#444] shadow-sm md:flex"
        >
          <BsArrowRight size={16} />
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        {carouselItems.map((item, index) => (
          <div
            key={item.title}
            className={`mx-1.25 h-2.5 w-2.5 rounded-full bg-[#6E006A] transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const entrepreneurRequirements = [
  "Reside in or operate primarily from Southwest Nigeria (Lagos, Ogun, Oyo, Osun, Ondo, Ekiti)",
  "You must be the founder or co-founder of an early-stage startup or a clearly defined business idea with health-related outputs (e.g., food, wellness, hospital management, or related solutions).",
  "Business must be problem-solving and scalable",
  "Have prior experience or background in the healthcare or health-related sector",
  "Must commit 6-7 hours per week for 4 months",
  "Must not be currently enrolled in another full-time incubation/acceleration program",
  "Must actively participate in virtual sessions and mentorship check-ins",
];

const mentorRequirements = [
  "5+ years of experience building or running a business (preferably in healthcare or a related sector)",
  "Passion for supporting innovation in healthcare and improving lives across Africa",
  "Available for 1-2 hours/week to support a founder",
  "Available for 1 hour/month to collaborate with other mentors",
  "Strong communication skills and ability to give feedback",
  "Willing to share insights, tips, and relevant networks",
  "Excited to be part of a pan-African innovation community",
  "Willing to engage the program content every week.",
];

function WhoCanApply() {
  return (
    <div className="bg-white py-12">
      <h4 className="mb-12 text-center font-bold uppercase">WHO CAN APPLY</h4>
      <div className="mx-auto max-w-350 px-4">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex h-full flex-col rounded-[10px] bg-[#F7E1F7] p-4">
            <h4 className="mb-4 text-center text-ink">Entrepreneurs</h4>
            <p className="mb-4 text-center text-secondary">
              We are looking for bold, innovative founders with ideas that solve real problems in healthcare and
              related sectors with the potential to scale and make lasting impact.
            </p>
            <ul className="list-none space-y-3 p-0">
              {entrepreneurRequirements.map((item) => (
                <li key={item} className="text-[0.9rem] leading-5">
                  <span className="mr-2 text-[#6E006A]">■</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 text-center">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <button className="rounded-md bg-[#6E006A] px-8 py-2 font-bold text-white">
                  Apply As An Entrepreneur
                </button>
              </a>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-[10px] bg-[#F7E1F7] p-4">
            <h4 className="mb-4 text-center text-ink">Mentors</h4>
            <p className="mb-4 text-center text-secondary">
              We are calling on experienced founders, business professionals, and operators to volunteer and help
              shape the next wave of African innovators.
            </p>
            <ul className="list-none space-y-3 p-0">
              {mentorRequirements.map((item) => (
                <li key={item} className="text-[0.9rem] leading-5">
                  <span className="mr-2 text-[#6E006A]">■</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 text-center">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <button className="rounded-md bg-[#6E006A] px-8 py-2 font-bold text-white">Apply As A Mentor</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const entrepreneursList = [
  "Build something real with expert help",
  "Get exposure to investors, mentors, and partners",
  "Join a powerful network across Africa",
  "Gain confidence and clarity in your journey",
];

const mentorsList = [
  "Share your experience with driven founders",
  "Help shape impactful businesses",
  "Grow your own network and visibility",
  "Be a part of a pan-African innovation movement",
];

function WhyJoinGearUp() {
  return (
    <div className="bg-[#F7E1F7] py-12">
      <h4 className="mb-12 text-center font-bold uppercase">WHY JOIN GEARUP?</h4>
      <div className="mx-auto max-w-350 px-4">
        <div className="mb-8 flex flex-wrap items-center overflow-hidden rounded-[10px] bg-[#F5F0F5]">
          <div className="w-full md:w-1/2">
            <div className="p-8">
              <h4 className="mb-4">For Entrepreneurs:</h4>
              <ul className="list-none space-y-4 p-0">
                {entrepreneursList.map((item) => (
                  <li key={item} className="text-[0.9rem]">
                    <span className="mr-2 text-[#882C5B]">■</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full self-stretch md:w-1/2">
            <Image src={imgTwo} alt="Entrepreneurs" className="h-full w-full rounded-b-[10px] object-cover md:rounded-r-[10px] md:rounded-bl-none" />
          </div>
        </div>

        <div className="flex flex-wrap items-center overflow-hidden rounded-[10px] bg-[#F5F0F5]">
          <div className="order-2 w-full md:order-1 md:w-1/2 md:self-stretch">
            <Image src={imgThree} alt="Mentors" className="h-full w-full rounded-t-[10px] object-cover md:rounded-l-[10px] md:rounded-tr-none" />
          </div>
          <div className="order-1 w-full md:order-2 md:w-1/2">
            <div className="p-8">
              <h4 className="mb-4">For Mentors</h4>
              <ul className="list-none space-y-4 p-0">
                {mentorsList.map((item) => (
                  <li key={item} className="text-[0.9rem]">
                    <span className="mr-2 text-[#882C5B]">■</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const modules = [
  {
    title: "Value Proposition",
    description:
      "Understand the problem you're solving, uncover market opportunities, and identify your customers' needs. Define the unique benefits your product or service offers.",
    icon: valueproposition,
  },
  {
    title: "Pricing & Business Viability",
    description:
      "Discover the true cost of acquiring customers and set a pricing strategy that ensures financial sustainability.",
    icon: pricing,
  },
  {
    title: "Competition Map",
    description:
      "Analyze your competitors, identify your unique edge, and clearly position your offering in the market to stand out with confidence.",
    icon: competitionmap,
  },
  {
    title: "Financial Projections",
    description:
      "Break down your costs, project your revenue, explore financial scenarios, and pinpoint your break-even point with confidence.",
    icon: financial,
  },
  {
    title: "Stakeholder Map",
    description:
      "Map out your key partners, allies, and distribution channels. Learn who you need to involve to launch and scale your business.",
    icon: stakeholder,
  },
  {
    title: "Impact Plan",
    description: "Clarify your mission and vision, define the positive impact you aim to create, and learn how to measure it effectively.",
    icon: impactplan,
  },
  {
    title: "Business Model & Marketing",
    description:
      "Define your core business activities and build a marketing strategy that not only attracts customers but keeps them coming back.",
    icon: businessmodel,
  },
  {
    title: "Growth Plan",
    description: "Develop a 3-year growth roadmap, anticipate key risks, and create mitigation strategies to stay resilient and future-ready.",
    icon: growthplan,
  },
];

function ModulesGrid() {
  return (
    <div className="mx-auto max-w-350 px-4 py-12">
      <h4 className="text-center font-bold uppercase">YOUR 8-MODULE JOURNEY</h4>
      <p className="mx-auto max-w-175 px-3 py-4 text-center">
        The Online Incubation Tools That Power Your Startup Success
      </p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-4 md:grid-cols-2">
        {modules.map((module) => (
          <div key={module.title} className="flex h-full flex-col items-start rounded-brand bg-white p-6 shadow-brand">
            <Image src={module.icon} alt={module.title} width={32} height={32} className="mb-2 h-8 w-8" />
            <h5 className="mt-2 font-bold">{module.title}</h5>
            <p className="mt-2 text-secondary">{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReadyToLaunch() {
  return (
    <div className="bg-[#F1F8ED] px-4 py-12 text-center">
      <h4 className="mb-2 text-center font-bold uppercase">READY TO LAUNCH YOUR FUTURE?</h4>
      <p className="mx-auto max-w-175 px-3 py-3 text-center">
        As an entrepreneur, by the end of the GearUp Incubation Program, you will have a refined business plan, a
        solid investor pitch, and the tools to grow your business beyond borders. As a mentor, beyond advising, you
        will be a thought partner; guiding entrepreneurs toward smarter decisions and real growth.
      </p>
    </div>
  );
}

function ApplyNowSection() {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-350 px-4">
        <h4 className="mb-4 text-center font-bold uppercase">APPLY NOW</h4>
        <div className="mx-auto max-w-150 rounded-[10px] bg-[#F7E1F7] p-8 shadow-brand">
          <div className="mb-4 flex items-center text-center">
            <div className="w-full">
              <p className="mb-0 text-[0.9rem] text-[#555555]">
                <Image src={applyNowTimer} alt="Hourglass Icon" width={40} height={40} className="inline-block h-10 w-10 object-contain" />
                Spots are limited! Don&apos;t miss your chance to launch, grow, and connect through this
                continent-wide movement.
              </p>
              <p className="text-[0.9rem] text-[#555555]">
                <b className="text-[#6E006A]">Deadline: October 21, 2025</b>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <button className="whitespace-nowrap rounded-md bg-[#6E006A] px-6 py-3 text-[0.9rem] font-bold text-white">
                Apply As An Entrepreneur
              </button>
            </a>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <button className="whitespace-nowrap rounded-md bg-[#6E006A] px-6 py-3 text-[0.9rem] font-bold text-white">
                Apply As A Mentor
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function GearUpPartners() {
  return <PartnersMarquee logos={gearUpPartnerLogos} />;
}
