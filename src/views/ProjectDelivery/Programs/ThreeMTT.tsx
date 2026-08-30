"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BsCheckCircleFill,
  BsLightningCharge,
  BsShieldCheck,
  BsGraphUpArrow,
  BsPeopleFill,
  BsAwardFill,
  BsCpuFill,
  BsBriefcase,
  BsArrowRepeat,
  BsCalendarCheck,
  BsCashCoin,
  BsLaptop,
  BsAward,
  BsClock,
  BsGeoAltFill,
} from "react-icons/bs";

import deepTechLogo from "@/assets/images/projectdelivery/3MTT/DeepTech_Ready-short-logo1.png";
import ThreeMTTLogo from "@/assets/images/projectdelivery/3MTT/3MTTLogo.png";
import location from "@/assets/images/projectdelivery/3MTT/location.jpeg";
import ThreeMTTHero from "@/assets/images/projectdelivery/3MTT/3MTTHero.jpg";

export function ThreeMTT() {
  return (
    <>
      <HeroSection />
      <ProgrammeOverview />
      <WhyPartnerWithUs />
      <TalentAccessCTA />
      <TalentApplicationSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[rgba(139,28,141,0.03)] to-[rgba(139,28,141,0.08)] pt-20 pb-15 md:pt-25 md:pb-20">
      <div className="mx-auto max-w-350 px-4">
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="mb-6.25 flex flex-wrap items-center gap-2.5">
              <Image src={deepTechLogo} alt="DeepTech Ready by Data Science Nigeria" className="h-11.25 w-auto md:h-15" />
              <Image src={ThreeMTTLogo} alt="3MTT" className="h-11.25 w-auto md:h-15" />
            </div>

            <h1 className="mb-4">
              Access <span className="relative text-[#8B1C8D]">Job-Ready AI Talent</span> for Your Business
            </h1>
            <p className="mb-4">
              Tap into Nigeria&apos;s largest tech talent pipeline. Get trained AI and Data Science professionals
              ready to drive your business growth.
            </p>
            <div className="mb-4 flex flex-col gap-3">
              <div className="flex items-center text-[0.95rem] text-[#4a4a4a]">
                <BsCheckCircleFill className="mr-3 shrink-0 text-[1.3rem] text-[#1F7A1F]" />
                <span>3 million skilled professionals being trained</span>
              </div>
              <div className="flex items-center text-[0.95rem] text-[#4a4a4a]">
                <BsCheckCircleFill className="mr-3 shrink-0 text-[1.3rem] text-[#1F7A1F]" />
                <span>Pre-vetted, job-ready talent pool</span>
              </div>
              <div className="flex items-center text-[0.95rem] text-[#4a4a4a]">
                <BsCheckCircleFill className="mr-3 shrink-0 text-[1.3rem] text-[#1F7A1F]" />
                <span>Government-certified training standards</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3.75 inline-block w-full rounded-lg bg-linear-to-br from-[#8B1C8D] to-[#A52FA7] px-9 py-3 text-center text-[1.1rem] font-bold text-white no-underline shadow-[0_6px_20px_rgba(139,28,141,0.35)] transition-all duration-300 hover:-translate-y-0.75 hover:from-[#A52FA7] hover:to-[#8B1C8D] hover:text-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.45)] md:mb-0 md:w-auto"
              >
                Get Talent Now
              </a>
              <a
                href="#talent-section"
                className="ml-0 inline-block w-full rounded-lg border-2 border-[#8B1C8D] bg-transparent px-9 py-2.25 text-center text-[1.1rem] font-bold text-[#8B1C8D] no-underline transition-all duration-300 hover:bg-[#8B1C8D] hover:text-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.35)] md:w-auto"
              >
                For Talent
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-full min-h-105 overflow-hidden rounded-[25px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image src={ThreeMTTHero} alt="AI Talent for MSMEs" className="block h-full w-full object-cover" />
              <div className="relative mt-5 flex flex-wrap gap-3.75 lg:absolute lg:inset-x-5 lg:bottom-5 lg:mt-0">
                <div className="min-w-full flex-1 rounded-[15px] bg-white/95 px-6.25 py-5 shadow-[0_8px_25px_rgba(0,0,0,0.1)] backdrop-blur-[10px] sm:min-w-35">
                  <div className="text-[2.5rem] leading-none font-extrabold text-[#8B1C8D]">3M</div>
                  <div className="mt-1.25 text-[0.85rem] text-[#4a4a4a]">Talents Being Trained</div>
                </div>
                <div className="min-w-full flex-1 rounded-[15px] bg-white/95 px-6.25 py-5 shadow-[0_8px_25px_rgba(0,0,0,0.1)] backdrop-blur-[10px] sm:min-w-35">
                  <div className="text-[2.5rem] leading-none font-extrabold text-[#8B1C8D]">49</div>
                  <div className="mt-1.25 text-[0.85rem] text-[#4a4a4a]">Training Centres Nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammeOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-350 px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-3.75 text-[1.75rem] font-extrabold text-[#1a1a1a] md:text-[1.9rem] lg:text-[2.2rem]">
            About the 3MTT Talent Programme
          </h3>
          <div className="mx-auto h-1 w-20 rounded-[2px] bg-linear-to-r from-[#8B1C8D] via-[#1F7A1F] to-[#C8D500]" />
          <p className="mt-3">
            Nigeria&apos;s largest government-backed initiative to train tech professionals for MSMEs
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full lg:w-1/2">
            <p className="mb-5 text-[1.2rem] leading-[1.8] text-[#4a4a4a]">
              The <strong>Three Million Technical Talent (3MTT)</strong> programme is a Federal Government initiative
              training three million Nigerians in digital and technical skills.
            </p>
            <p className="mb-4.5 text-[1.05rem] leading-[1.8] text-[#6b6b6b]">
              For MSMEs, this means unprecedented access to a pipeline of skilled professionals without the typical
              barriers of talent acquisition. The programme specifically focuses on skills that{" "}
              <strong>Micro, Small, and Medium Enterprises</strong> need to compete and grow.
            </p>
            <p className="mb-4.5 text-[1.05rem] leading-[1.8] text-[#6b6b6b]">
              Through 8thGear&apos;s role in this ecosystem, we ensure that trained talent is not just technically
              proficient, but business-ready, equipped to understand and solve the unique challenges MSMEs face in
              today&apos;s digital economy.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-5">
              <div className="rounded-[15px] border-l-4 border-[#1F7A1F] bg-[#f8f9fa] p-6.25 transition-all duration-300 hover:-translate-x-2.5 hover:bg-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.15)]">
                <div className="mb-3.75 flex h-12.5 w-12.5 items-center justify-center rounded-xl bg-linear-to-br from-[#1F7A1F] to-[#2A9D2A]">
                  <BsLightningCharge className="text-[1.5rem] text-white" />
                </div>
                <h5 className="mb-2.5 text-[1.2rem] font-bold text-[#1a1a1a]">Faster Time to Productivity</h5>
                <p className="m-0 text-[0.95rem] text-[#6b6b6b]">
                  Trained talent means shorter onboarding and faster ROI on your hiring decisions
                </p>
              </div>
              <div className="rounded-[15px] border-l-4 border-[#1F7A1F] bg-[#f8f9fa] p-6.25 transition-all duration-300 hover:-translate-x-2.5 hover:bg-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.15)]">
                <div className="mb-3.75 flex h-12.5 w-12.5 items-center justify-center rounded-xl bg-linear-to-br from-[#1F7A1F] to-[#2A9D2A]">
                  <BsShieldCheck className="text-[1.5rem] text-white" />
                </div>
                <h5 className="mb-2.5 text-[1.2rem] font-bold text-[#1a1a1a]">Quality Assurance</h5>
                <p className="m-0 text-[0.95rem] text-[#6b6b6b]">
                  Government-certified training with standardized curriculum ensures consistent quality
                </p>
              </div>
              <div className="rounded-[15px] border-l-4 border-[#1F7A1F] bg-[#f8f9fa] p-6.25 transition-all duration-300 hover:-translate-x-2.5 hover:bg-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.15)]">
                <div className="mb-3.75 flex h-12.5 w-12.5 items-center justify-center rounded-xl bg-linear-to-br from-[#1F7A1F] to-[#2A9D2A]">
                  <BsGraphUpArrow className="text-[1.5rem] text-white" />
                </div>
                <h5 className="mb-2.5 text-[1.2rem] font-bold text-[#1a1a1a]">Competitive Edge</h5>
                <p className="m-0 text-[0.95rem] text-[#6b6b6b]">
                  Access to AI and data science expertise that was previously out of reach for MSMEs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const partnerships = [
  {
    Icon: BsPeopleFill,
    title: "Massive Talent Pool",
    description: "Access to 3 million trained professionals, the largest tech talent pipeline in Nigeria",
  },
  {
    Icon: BsAwardFill,
    title: "Government Certified",
    description: "Federal Government-backed training ensures quality, standards, and legitimacy",
  },
  {
    Icon: BsCpuFill,
    title: "Future-Ready Skills",
    description: "AI, data science, and emerging technologies that position your business ahead",
  },
  {
    Icon: BsBriefcase,
    title: "MSME-First Design",
    description: "Training specifically calibrated for the real-world needs of small and medium businesses",
  },
  {
    Icon: BsArrowRepeat,
    title: "Continuous Pipeline",
    description: "Regular cohorts mean you always have fresh talent available as your business scales",
  },
];

function WhyPartnerWithUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-350 px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="mb-3.75 text-[1.75rem] font-extrabold text-[#1a1a1a] md:text-[1.9rem] lg:text-[2.2rem]">
            Why This Matters for Your Business
          </h3>
          <div className="mx-auto h-1 w-20 rounded-[2px] bg-linear-to-r from-[#8B1C8D] via-[#1F7A1F] to-[#C8D500]" />
          <p className="mt-3">Strategic advantages that help MSMEs compete in the digital economy</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnerships.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="h-full rounded-[18px] border-2 border-transparent bg-white px-7.5 py-8.75 shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B1C8D] hover:shadow-[0_12px_35px_rgba(139,28,141,0.2)]"
            >
              <div className="mb-5 flex h-16.25 w-16.25 items-center justify-center rounded-[15px] bg-linear-to-br from-[rgba(139,28,141,0.15)] to-[rgba(139,28,141,0.25)]">
                <Icon className="text-[2rem] text-[#8B1C8D]" />
              </div>
              <h5 className="mb-3 text-[1.15rem] font-bold text-[#1a1a1a]">{title}</h5>
              <p className="m-0 text-[0.98rem] leading-[1.6] text-[#6b6b6b]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TalentAccessCTA() {
  return (
    <section className="bg-linear-to-br from-[rgba(139,28,141,0.05)] to-[rgba(139,28,141,0.1)] py-20">
      <div className="mx-auto max-w-350 px-4">
        <div className="rounded-[25px] bg-white px-6.25 py-8.75 shadow-[0_20px_60px_rgba(0,0,0,0.1)] md:px-7.5 md:py-10 lg:p-15">
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full lg:w-7/12">
              <h3 className="mb-3">Ready to Access Job-Ready AI Talent?</h3>
              <p className="mb-4">
                Join forward-thinking MSMEs who are leveraging the 3MTT talent pipeline to scale their operations,
                drive innovation, and compete effectively in the digital economy.
              </p>
              <div className="flex flex-col gap-3.75">
                <div className="flex items-center gap-3.75 text-[1.05rem] text-[#4a4a4a]">
                  <BsCheckCircleFill className="shrink-0 text-[1.3rem] text-[#8B1C8D]" />
                  <span>No upfront training costs</span>
                </div>
                <div className="flex items-center gap-3.75 text-[1.05rem] text-[#4a4a4a]">
                  <BsCheckCircleFill className="shrink-0 text-[1.3rem] text-[#8B1C8D]" />
                  <span>Pre-vetted, government-certified talent</span>
                </div>
                <div className="flex items-center gap-3.75 text-[1.05rem] text-[#4a4a4a]">
                  <BsCheckCircleFill className="shrink-0 text-[1.3rem] text-[#8B1C8D]" />
                  <span>Business-ready professionals</span>
                </div>
              </div>
            </div>
            <div className="w-full text-center lg:w-5/12 lg:text-right">
              <a
                href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-lg bg-linear-to-br from-[#8B1C8D] to-[#A52FA7] px-9 py-3 text-center text-[1.1rem] font-bold text-white no-underline shadow-[0_6px_20px_rgba(139,28,141,0.35)] transition-all duration-300 hover:-translate-y-0.75 hover:from-[#A52FA7] hover:to-[#8B1C8D] hover:text-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.45)] lg:w-auto"
              >
                Get Talent Now
              </a>
              <p className="mb-0 mt-3 text-secondary">
                <small>Connect with skilled AI & Data Science professionals</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const overviewInfo = [
  { Icon: BsCalendarCheck, title: "Duration", body: "Intensive courses for rapid skill development" },
  { Icon: BsCashCoin, title: "100% FREE", body: "Federal Government funded, no cost to you" },
  { Icon: BsLaptop, title: "Focus Areas", body: "AI, Data Science, and Digital Technologies" },
  { Icon: BsAward, title: "Certification", body: "Government-certified upon completion" },
];

const benefits = [
  "Job-ready skills for MSME employment",
  "Expert trainers and mentors",
  "Real-world projects and portfolio",
  "Peer learning environment",
  "Networking Opportunities",
];

function TalentApplicationSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "benefits" | "location">("overview");
  const applicationLink = "https://forms.gle/kzxe9y7GswjtpQ57A";
  const applicationDeadline = "February 27, 2026";

  return (
    <section className="bg-white py-20" id="talent-section">
      <div className="mx-auto max-w-350 px-4">
        <div className="mx-auto max-w-4xl rounded-[25px] bg-white px-5 py-7.5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] md:px-7.5 md:py-10 lg:p-12.5">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-[25px] bg-linear-to-br from-[rgba(139,28,141,0.15)] to-[rgba(200,213,0,0.15)] px-5 py-2 text-[0.85rem] font-semibold tracking-[0.5px] text-[#8B1C8D] uppercase">
              Aspiring Tech Professionals
            </span>
            <h3 className="mt-3">Want to Join the Talent Pipeline?</h3>
            <div className="mx-auto h-1 w-20 rounded-[2px] bg-linear-to-r from-[#8B1C8D] via-[#1F7A1F] to-[#C8D500]" />
            <p className="mt-3 text-secondary">
              If you&apos;re looking to develop in-demand AI and Data Science skills, apply to join the 3MTT
              programme. Training is 100% FREE and government-certified.
            </p>
          </div>

          <div className="mb-4 flex flex-col flex-wrap justify-center gap-3.75 md:flex-row">
            <button
              className={`w-full cursor-pointer rounded-full border-2 px-7.5 py-3 text-base font-semibold transition-all duration-300 md:w-auto ${
                activeTab === "overview"
                  ? "border-[#8B1C8D] bg-linear-to-br from-[#8B1C8D] to-[#A52FA7] text-white shadow-[0_4px_15px_rgba(139,28,141,0.3)]"
                  : "border-[#e0e0e0] bg-transparent text-[#4a4a4a] hover:border-[#8B1C8D] hover:text-[#8B1C8D]"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Programme Info
            </button>
            <button
              className={`w-full cursor-pointer rounded-full border-2 px-7.5 py-3 text-base font-semibold transition-all duration-300 md:w-auto ${
                activeTab === "benefits"
                  ? "border-[#8B1C8D] bg-linear-to-br from-[#8B1C8D] to-[#A52FA7] text-white shadow-[0_4px_15px_rgba(139,28,141,0.3)]"
                  : "border-[#e0e0e0] bg-transparent text-[#4a4a4a] hover:border-[#8B1C8D] hover:text-[#8B1C8D]"
              }`}
              onClick={() => setActiveTab("benefits")}
            >
              What You Get
            </button>
            <button
              className={`w-full cursor-pointer rounded-full border-2 px-7.5 py-3 text-base font-semibold transition-all duration-300 md:w-auto ${
                activeTab === "location"
                  ? "border-[#8B1C8D] bg-linear-to-br from-[#8B1C8D] to-[#A52FA7] text-white shadow-[0_4px_15px_rgba(139,28,141,0.3)]"
                  : "border-[#e0e0e0] bg-transparent text-[#4a4a4a] hover:border-[#8B1C8D] hover:text-[#8B1C8D]"
              }`}
              onClick={() => setActiveTab("location")}
            >
              Location
            </button>
          </div>

          <div>
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {overviewInfo.map(({ Icon, title, body }) => (
                  <div key={title} className="rounded-[15px] bg-[#f8f9fa] p-6.25 text-center transition-all duration-300 hover:bg-white hover:shadow-[0_8px_25px_rgba(139,28,141,0.15)]">
                    <Icon className="mb-3.75 text-[2.5rem] text-[#8B1C8D]" />
                    <h6 className="mb-2.5 font-bold text-[#1a1a1a]">{title}</h6>
                    <p className="m-0 text-[0.95rem] text-[#6b6b6b]">{body}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "benefits" && (
              <div className="grid grid-cols-1 gap-5 sm:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl bg-[#f8f9fa] p-3.75 transition-all duration-300 hover:bg-white hover:shadow-[0_4px_15px_rgba(139,28,141,0.1)]"
                  >
                    <BsCheckCircleFill className="mt-0.5 shrink-0 text-[1.3rem] text-[#1F7A1F]" />
                    <span className="text-base leading-[1.5] text-[#4a4a4a]">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "location" && (
              <div className="flex flex-wrap items-center gap-8">
                <div className="w-full md:w-1/2">
                  <Image src={location} alt="AI Talent for MSMEs" className="block h-full w-full rounded-2xl object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="mb-4 rounded-[15px] bg-[#f8f9fa] p-6.25">
                    <h5 className="mb-3">Physical Classes in Lagos</h5>
                    <p className="text-secondary">
                      Hands-on training with expert instructors in a collaborative environment.
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-[rgba(139,28,141,0.2)] bg-white p-6.25">
                    <h6 className="mb-2 text-[#8B1C8D]">8thGear Partners Ltd</h6>
                    <div className="mb-2 flex items-center">
                      <BsGeoAltFill className="me-2 text-[#8B1C8D]" />
                      <span>41, CMD Road, Magodo, Lagos</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[rgba(139,28,141,0.2)] bg-linear-to-br from-[rgba(139,28,141,0.08)] to-[rgba(200,213,0,0.08)] p-8.75">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h5 className="mb-2">Ready to Build Your Tech Career?</h5>
                <p className="mb-0 text-secondary">
                  <BsClock className="me-2" />
                  Application closes: <strong className="text-red-600">{applicationDeadline}</strong>
                </p>
              </div>
              <div>
                <a
                  href={applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3.75 inline-block w-full rounded-lg bg-linear-to-br from-[#C8D500] to-[#A8B500] px-9 py-3 text-center text-[0.9rem] font-bold whitespace-nowrap text-[#1a1a1a] no-underline shadow-[0_6px_20px_rgba(200,213,0,0.35)] transition-all duration-300 hover:-translate-y-0.75 hover:from-[#A8B500] hover:to-[#C8D500] hover:text-[#1a1a1a] hover:shadow-[0_8px_25px_rgba(200,213,0,0.45)] md:mb-0 md:w-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
