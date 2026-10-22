"use client";

import { useState } from "react";
import Image from "next/image";
import trainingsHero from "@/assets/images/projectdelivery/trainingsHero.jpg";
import espFlyer from "@/assets/images/projectdelivery/ESP/flyer.jpeg";
import { ApplyButton } from "@/app/(programs)/_components/ApplyButton";
import { ImageModal } from "@/components/ImageModal";

const APPLICATION_URL = "https://forms.gle/1Fa9czjgyEuqvq7q8";

const highlights = [
  {
    icon: "🎓",
    title: "Hands-On Training",
    text: "4 weeks of intensive, practical instruction across Content Creation, Growth Hacking, and Digital Marketing",
  },
  {
    icon: "💼",
    title: "On-Site Learning",
    text: "In-person training at 8thGear Hub, Magodo, Lagos, led by experienced facilitators",
  },
  {
    icon: "📜",
    title: "3-Month Internship",
    text: "Apply your skills in a real work setting from November 2026 to January 2027",
  },
  {
    icon: "🤝",
    title: "Career Pathway",
    text: "Structured route from training to internship to employability",
  },
];

const whoShouldJoin = [
  "Lagos residents aged 18–40",
  "Holders of a LASRRA ID",
  "Ready to attend training and internship physically",
  "Individuals eager to build a career in digital skills",
];

const whatYoullGain = [
  "Practical training in Content Creation, Growth Hacking, and Digital Marketing",
  "Hands-on experience through a structured 3-month internship",
  "Direct exposure to on-the-job expectations in a professional environment",
  "Networking with fellow trainees and industry facilitators",
  "A pathway toward sustainable employment in the digital economy",
];

function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0">
        <rect width="20" height="20" rx="3" fill={dark ? "#821E6B" : "white"} />
        <path
          d="M5 10l3 3 7-7"
          stroke={dark ? "white" : "#821E6B"}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className={`m-0 leading-normal ${dark ? "text-[#333]" : "text-white"}`}>{children}</p>
    </div>
  );
}

export function LSETF() {
  const [showFlyer, setShowFlyer] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-20 text-center text-white">
        <Image src={trainingsHero} alt="" fill sizes="100vw" className="-z-10 object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(130,30,107,0.85),rgba(0,164,149,0.85))]" />
        <div className="relative z-[2] mx-auto max-w-3xl px-4">
          <h2 className="pt-12 font-bold text-2xl md:text-4xl">CALLING ALL TECH TALENTS IN LAGOS!</h2>
          <p className="mt-3 text-[1.1rem] text-white">
            Join the LSETF/GIZ Employability Support Programme and build in-demand digital skills with real career
            pathways attached.
          </p>
          <ApplyButton href={APPLICATION_URL} className="mt-3">
            Apply Now
          </ApplyButton>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] py-12">
        <div className="mx-auto max-w-300 px-4">
          <div className="mx-auto max-w-250">
            <div className="mb-12 text-center">
              <h3 className="bg-[linear-gradient(135deg,#821E6B,#00A495)] bg-clip-text text-2xl font-bold text-transparent">
                LSETF/GIZ EMPLOYABILITY SUPPORT PROGRAM
              </h3>
              <p className="m-0 p-0 font-semibold">8thGear Hub × LSETF × GIZ</p>
              <p className="m-0 mt-1 p-0 font-bold text-purple">
                Building digital talent for Lagos&apos; growing tech economy
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-white p-8 shadow-brand">
              <h5 className="mb-4 text-[1.15rem] font-bold">About the Programme</h5>
              <p className="leading-relaxed text-[#333]">
                The LSETF/GIZ Employability Support Program is a 4-week, hands-on intensive covering Content
                Creation, Growth Hacking, and Digital Marketing, followed by a 3-month internship placement.
                Participants gain practical, job-ready skills and direct work experience with host organisations.
              </p>
              <p className="m-0 leading-relaxed text-[#333]">
                The programme is delivered by 8thGear Hub in partnership with the Lagos State Employment Trust Fund
                (LSETF) and GIZ, supporting Lagos residents in building sustainable careers in the digital economy.
              </p>
            </div>

            <h5 className="mb-4 text-center text-[1.15rem] font-bold">Programme Highlights</h5>
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border-t-4 border-teal bg-white p-6 shadow-brand">
                  <div className="mb-2 text-3xl">{item.icon}</div>
                  <h6 className="font-bold text-purple">{item.title}</h6>
                  <p className="m-0 text-[0.95rem] leading-snug text-[#333]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl bg-[linear-gradient(135deg,#821E6B,#5c1551)] p-8 text-white shadow-brand">
                <div>
                  <h5 className="mb-4 text-[1.2rem] font-bold">Who Should Join?</h5>
                  <div className="flex flex-col gap-4">
                    {whoShouldJoin.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <ApplyButton href={APPLICATION_URL} pulse className="px-10 py-2 text-black">
                    Apply Now
                  </ApplyButton>
                  <p className="mt-3 text-sm italic text-white">Training: 5 – 30 October 2026</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-brand">
                <div>
                  <h5 className="mb-1 text-[1.15rem] font-bold">What You&apos;ll Gain</h5>
                  <p className="mb-4 text-[0.95rem] text-[#666]">
                    Build real digital skills with real-world application
                  </p>
                  <div className="flex flex-col gap-4">
                    {whatYoullGain.map((item) => (
                      <CheckItem key={item} dark>
                        {item}
                      </CheckItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded border-l-4 border-teal bg-[#e6f6f4] px-5 py-4 text-[#00564e]">
              <p className="m-0">
                📍 <strong>Location:</strong> 8thGear Hub, 41 CMD Road, Magodo/Secretariat, Lagos
              </p>
              <p className="m-0">
                🗓️ <strong>Training:</strong> October 5th – October 30th, 2026
              </p>
              <p className="m-0">
                💼 <strong>Internship:</strong> November 2026 – January 2027
              </p>
            </div>

            <div className="my-10 text-center">
              <button
                type="button"
                onClick={() => setShowFlyer(true)}
                className="mx-auto block max-w-100 cursor-pointer overflow-hidden rounded-xl shadow-brand-md"
              >
                <Image src={espFlyer} alt="LSETF/GIZ Employability Support Program Flyer" className="h-auto w-full" />
              </button>
              <p className="mt-2 text-sm text-secondary">Click image to expand</p>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        open={showFlyer}
        onClose={() => setShowFlyer(false)}
        src={espFlyer}
        alt="LSETF/GIZ Employability Support Program Flyer"
      />

      <section className="py-16 text-center">
        <div className="mx-auto max-w-350 px-4">
          <h3 className="mb-3 font-bold text-2xl">Train. Intern. Get Hired.</h3>
          <p className="mb-4 text-lg text-secondary">
            Take the first step toward a sustainable career in Lagos&apos;s digital economy.
          </p>
          <ApplyButton href={APPLICATION_URL}>Apply Now</ApplyButton>
        </div>
      </section>
    </>
  );
}
