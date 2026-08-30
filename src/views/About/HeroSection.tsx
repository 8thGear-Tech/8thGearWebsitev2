"use client";

import { JointheTeamBtn } from "@/components/Buttons/PillButtons";

function scrollToEIR() {
  const el = document.getElementById("eir-apply");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  return (
    <div className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-[#f9fafb]">
      {/* Orbs */}
      <div className="pointer-events-none absolute -right-20 -top-[180px] h-[300px] w-[300px] rounded-full bg-purple opacity-45 blur-[90px] md:h-[500px] md:w-[500px]" />
      <div className="pointer-events-none absolute bottom-[60px] right-[200px] h-[260px] w-[260px] rounded-full bg-amber-400 opacity-20 blur-[90px]" />
      <div className="pointer-events-none absolute left-[35%] top-20 h-[200px] w-[200px] rounded-full bg-purple-400 opacity-15 blur-[90px]" />
      {/* Diagonal accent strip */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-gradient-to-br from-purple/[0.04] to-teal-dark/[0.06] [clip-path:polygon(18%_0%,100%_0%,100%_100%,0%_100%)]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-12 px-6 py-20 text-center md:flex-row md:px-8 md:py-24 md:text-left">
        {/* Left: text */}
        <div className="max-w-[580px] flex-1">
          <h1 className="mb-6 text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f1f20] md:text-[2.7rem]">
            Your one-stop shop for your <span className="text-purple">Venture Building </span>
            <span className="inline text-transparent [-webkit-text-stroke:2px_#821e6b]">Dream.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-[460px] text-base leading-[1.75] text-[#0f2020]/60 md:mx-0">
            Empowering entrepreneurs across Africa with the tools, network, and expertise to build what matters.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <JointheTeamBtn />
            <button
              onClick={scrollToEIR}
              type="button"
              className="inline-flex h-10 items-center whitespace-nowrap rounded-[10px] border-2 border-purple bg-[#f2f1f1] px-5 font-heading text-base font-medium transition-all hover:bg-purple hover:text-white hover:shadow-[0_4px_18px_rgba(130,30,107,0.25)]"
            >
              Apply as an EIR
            </button>
          </div>

          {/* Mobile stats */}
          <div className="mt-10 flex w-full items-center justify-center rounded-2xl bg-white py-5 shadow-brand-md md:hidden">
            <div className="flex flex-1 flex-col items-center px-3">
              <span className="text-2xl font-extrabold leading-none text-[#0f1f20]">2000+</span>
              <span className="mt-1 text-center text-[0.65rem] font-medium tracking-[0.08em] text-[#0f2020]/50">
                MSMEs Supported
              </span>
            </div>
            <div className="h-10 w-px shrink-0 bg-black/[0.08]" />
            <div className="flex flex-1 flex-col items-center px-3">
              <span className="text-2xl font-extrabold leading-none text-[#0f1f20]">7+</span>
              <span className="mt-1 text-center text-[0.65rem] font-medium tracking-[0.08em] text-[#0f2020]/50">
                Years of Impact
              </span>
            </div>
          </div>
        </div>

        {/* Right: decorative stat cards */}
        <div className="relative hidden h-[340px] w-[300px] shrink-0 md:block">
          <div className="absolute left-[30px] top-[30px] h-[280px] w-[240px] rotate-6 rounded-[20px] bg-gradient-to-br from-purple/[0.08] to-teal-dark/[0.08] shadow-brand" />
          <div className="absolute left-[15px] top-[15px] h-[290px] w-[250px] rotate-3 rounded-[20px] border border-black/5 bg-white shadow-brand" />
          <div className="absolute flex h-[300px] w-[260px] flex-col items-center justify-center gap-3 rounded-[20px] border border-black/[0.06] bg-white p-8 shadow-brand">
            <div className="flex flex-col items-center py-3 text-center">
              <span className="text-[2rem] font-extrabold leading-none text-[#0f1f20]">2000+</span>
              <span className="mt-1 text-xs font-medium tracking-[0.1em] text-[#0f2020]/50">MSMEs Supported</span>
            </div>
            <div className="h-px w-10 bg-black/[0.08]" />
            <div className="flex flex-col items-center py-3 text-center">
              <span className="text-[2rem] font-extrabold leading-none text-[#0f1f20]">7+</span>
              <span className="mt-1 text-xs font-medium tracking-[0.1em] text-[#0f2020]/50">Years of Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom animated line */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#1a988f,#c0258f,#f4a01c,#7b2d8b,#1a988f)] bg-[length:200%_100%] [animation:gradient-slide_4s_linear_infinite]" />
    </div>
  );
}
