"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import trainingsHero from "@/assets/images/projectdelivery/trainingsHero.jpg";
import ydosFlyer from "@/assets/images/projectdelivery/YDOS/YDOS.jpeg";
import { ApplyButton } from "../ApplyButton";

const APPLICATION_URL = "https://forms.gle/ndraz5Ckje8oP1fY9";

const whoIsThisFor = [
  "You! Aged 18–35 and living in Lagos",
  "Founders with a half-baked, early-stage, or fully-formed idea",
  "Women entrepreneurs and innovators",
  "Persons with disabilities (PWDs)",
];

const whatYoullWalkAwayWith = [
  "Understand the 17 SDGs",
  "Become a Design Thinking pro",
  "Level up your Digital & Entrepreneurial skills",
  "Own your Pitching & Presentation game",
  "Get Mentorship from top industry players",
  "Win business support worth up to ₦500,000 + other juicy prizes!",
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

export function YDOS() {
  const [flyerOpen, setFlyerOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 text-center text-white">
        <Image src={trainingsHero} alt="" fill sizes="100vw" className="-z-10 object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(130,30,107,0.85),rgba(0,164,149,0.85))]" />
        <div className="relative z-[2] mx-auto max-w-3xl px-4">
          <h2 className="pt-12 font-bold">YDOS 2026 IS OFFICIALLY HERE!</h2>
          <p className="mt-3 text-[1.1rem] text-white">
            Got an idea that could change the game? <br />
            We&apos;re talking real problems. Real solutions. Real impact.
          </p>

          <ApplyButton href={APPLICATION_URL} className="mt-3">
            Apply Now
          </ApplyButton>
        </div>
      </section>

      {/* MAIN PROGRAM CONTENT */}
      <section className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] py-12">
        <div className="mx-auto max-w-300 px-4">
          <div className="mx-auto max-w-250">
            <div className="mb-12 text-center">
              <h3 className="bg-[linear-gradient(135deg,#821E6B,#00A495)] bg-clip-text font-bold text-transparent">
                YDOS 2026 OPEN INNOVATION CHALLENGE
              </h3>
              <p className="m-0 font-semibold">8thGear Hub & Venture Studio x LEAP Africa</p>
              <p className="m-0 mt-1 font-bold text-purple">Calling Lagos&apos; Boldest Young Minds!</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl bg-[linear-gradient(135deg,#821E6B,#5c1551)] p-8 text-white shadow-brand">
                <div>
                  <h5 className="mb-4 text-[1.2rem] font-bold">Who is this for?</h5>
                  <div className="flex flex-col gap-4">
                    {whoIsThisFor.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <ApplyButton href={APPLICATION_URL} pulse className="px-10 py-2 text-black shadow-[0_8px_15px_rgba(0,0,0,0.4)]">
                    Apply Now
                  </ApplyButton>
                  <p className="mt-3 text-sm italic text-white">Applications Window: 18 – 31 August 2026</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-brand">
                <div>
                  <h5 className="mb-4 text-[1.15rem] font-bold">What You&apos;ll Walk Away With:</h5>
                  <div className="flex flex-col gap-4 border-b-2 border-[#f0f0f0] pb-4">
                    {whatYoullWalkAwayWith.map((item) => (
                      <CheckItem key={item} dark>
                        {item}
                      </CheckItem>
                    ))}
                  </div>
                </div>

                <div className="rounded border-l-4 border-[#ffc107] bg-[#fff8e6] p-4">
                  <h6 className="mb-2 font-bold text-[#856404]">⚠️ Mandatory Video Requirement</h6>
                  <p className="m-0 text-[0.875rem] text-[#856404]">
                    Your application must include a <strong>2-minute video pitch</strong> of your idea. No video = no
                    entry. Grab your phone, hit record, and show us what you&apos;ve got!
                  </p>
                </div>
              </div>
            </div>

            {/* FLYER SHOWCASE SECTION */}
            <div className="my-12 text-center">
              <button
                type="button"
                onClick={() => setFlyerOpen(true)}
                className="mx-auto block max-w-100 cursor-pointer overflow-hidden rounded-[10px] shadow-brand-md"
              >
                <Image src={ydosFlyer} alt="YDOS 2026 Flyer" className="w-full" />
              </button>
              <p className="mt-2 text-sm text-secondary">Click image to expand</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLYER MODAL */}
      <Dialog open={flyerOpen} onClose={() => setFlyerOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-lg overflow-hidden rounded-lg bg-white">
            <Image src={ydosFlyer} alt="Program Flyer" className="w-full" />
            <div className="flex justify-end p-3">
              <button
                type="button"
                onClick={() => setFlyerOpen(false)}
                className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-semibold text-white"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* FOOTER CTA SECTION */}
      <section className="pb-12 pt-12 text-center">
        <div className="mx-auto max-w-350 px-4">
          <h3 className="mb-3 font-bold">Don&apos;t Just Dream It. Build It. Pitch It. Win It.</h3>
          <p className="mb-4 text-lg text-secondary">
            Take the first step toward transforming your idea into a real-world solution.
          </p>
          <ApplyButton href={APPLICATION_URL}>Apply Now</ApplyButton>
        </div>
      </section>
    </>
  );
}
