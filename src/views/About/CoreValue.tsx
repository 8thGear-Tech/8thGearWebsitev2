"use client";

import { useState } from "react";
import Image from "next/image";
import visionlogo from "@/assets/images/about/Vision-logo.png";
import missionlogo from "@/assets/images/about/Mission-logo.png";

const DATA = {
  vision: "An Africa where everyone with the drive to succeed has access to the resources they need to do so.",
  mission:
    "8thGear creates a safe space for entrepreneurs to test their innovations, builds an ecosystem of value-adding and innovative solutions, and facilitates sustainable and impact-driven initiatives across Africa.",
  values: [
    {
      title: "Ownership Mindset",
      tagline: "This is My Company Too",
      description:
        "Think and act like owners, taking responsibility for outcomes, following through, and raising issues early with solutions, not complaints.",
    },
    {
      title: "Purpose-Driven",
      tagline: "Why Before What",
      description:
        "We work to build Africa, not just earn a salary. We understand why we exist, connect daily tasks to bigger outcomes, and take pride in impact, not just output.",
    },
    {
      title: "Professionalism & Excellence",
      tagline: "Do It Well or Don't Do It",
      description:
        "Excellence is care + consistency + competence. We show up on time, meet deadlines, and deliver quality work without being micromanaged.",
    },
    {
      title: "Courage & Breakthrough Thinking",
      tagline: "We Try, We Learn, We Evolve",
      description:
        "We're pioneers who try new approaches, challenge respectfully, learn fast, and create clarity rather than freezing when things are unclear.",
    },
    {
      title: "Empathy",
      tagline: "People First, Always Human",
      description:
        "We listen before reacting, assume positive intent, support teammates without resentment, and communicate with warmth, not coldness.",
    },
    {
      title: "Team Spirit",
      tagline: "We Don't Work Alone Here",
      description:
        "8thGear greatness is collaborative. We share knowledge, ask for help early, help others win, and celebrate team success, not just personal wins.",
    },
    {
      title: "Reliability & Trustworthiness",
      tagline: "Your Word is Law",
      description:
        "Trust is currency here. We do what we say, when we say it, keeping confidential things confidential, staying dependable under pressure, and delivering without emotional drama. When you speak at 8thGear, people should relax, not panic.",
    },
    {
      title: "Discipline & Execution",
      tagline: "Ideas Are Cheap, Execution Wins",
      description:
        "8thGear celebrates doers. We execute consistently, use systems and tools, document work, track progress, and always close loops.",
    },
  ],
};

export function CoreValue() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-5 max-w-225 px-4 pb-12">
      <h3 className="mb-2 text-center font-heading text-purple">WHO WE ARE</h3>
      <p className="mb-10 text-center text-sm text-secondary">
        8thGear® is a brand owned by 8thGear Partners Limited and operates as 8thGear Hub &amp; Venture Studio
      </p>

      {/* Vision & Mission banners */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex h-full flex-col items-center rounded-2xl border border-[#dddaf5] bg-[#f8f7ff] p-6 text-center">
          <Image src={visionlogo} alt="Vision" className="mb-3.5 h-14 w-14 object-contain" />
          <h5 className="mb-2 text-base font-bold text-[#2d2d2d]">Vision</h5>
          <p className="text-sm leading-relaxed text-secondary">{DATA.vision}</p>
        </div>
        <div className="flex h-full flex-col items-center rounded-2xl border border-[#dddaf5] bg-[#f8f7ff] p-6 text-center">
          <Image src={missionlogo} alt="Mission" className="mb-3.5 h-14 w-14 object-contain" />
          <h5 className="mb-2 text-base font-bold text-[#2d2d2d]">Mission</h5>
          <p className="text-sm leading-relaxed text-secondary">{DATA.mission}</p>
        </div>
      </div>

      {/* Values — single dark card in brand purple */}
      <div className="overflow-hidden rounded-[20px] bg-purple">
        <div className="p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium tracking-wide text-white">
              8 CORE VALUES
            </span>
          </div>

          <p className="mb-5 text-[13px] italic leading-[1.7] text-white/75">
            We think like owners; deliver like professionals; care like humans; innovate like pioneers, and do it
            with joy, maturity, courage, and excellence. Select any value below to learn more.
          </p>

          <div className="flex flex-wrap gap-2">
            {DATA.values.map((item, index) => {
              const active = activeIndex === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(active ? null : index)}
                  className={`rounded-full border px-4.5 py-1.75 text-[13px] transition-all ${
                    active ? "border-white bg-white font-semibold text-purple" : "border-white/35 bg-white/10 text-white"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {activeIndex !== null && (
            <div className="mt-3 rounded-xl border-l-4 border-white/60 bg-white/10 p-3">
              <h6 className="mb-1 font-bold text-white">{DATA.values[activeIndex].title}</h6>
              <p className="mb-2 block text-sm italic text-white/70">&ldquo;{DATA.values[activeIndex].tagline}&rdquo;</p>
              <p className="text-sm leading-relaxed text-white/85">{DATA.values[activeIndex].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
