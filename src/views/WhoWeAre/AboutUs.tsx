import { BsArrowUpRight, BsJournalText, BsPeopleFill } from "react-icons/bs";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { JointheTeamBtn } from "@/components/Buttons/PillButtons";
import { EIR, Gerians } from "@/components/AllCards/TeamCard";
import { CoreValue } from "@/views/About/CoreValue";
import { HeroSection } from "@/views/About/HeroSection";
import { EIRApplySection } from "@/views/About/Eirsection";
import { SliderComponent } from "@/views/About/SliderComponent";

export function AboutUs() {
  return (
    <>
      <HeroSection />
      <CoreValue />
      <PartnersMarquee />
      <Gerians />
      <EIR />
      <EIRApplySection />
      <div className="bg-[#f6fffa]">
        <SliderComponent />
      </div>
      <JointheTeam />
    </>
  );
}

function JointheTeam() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf4ff_0%,#f0fdfc_100%)] py-20">
      <div className="pointer-events-none absolute -right-25 -top-25 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(130,30,107,0.07)_0%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-300 flex-col gap-10 px-6 md:flex-row md:items-center md:px-8">
        {/* Left: text + button */}
        <div className="min-w-0 flex-1">
          <h2 className="mb-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#0f1f20]">
            Join the <span className="text-purple">8thGear</span> Team
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-secondary">
              Dream teams are not right for everyone. Some people prefer job security, and choose to work at
              companies that are more focused on stability and seniority, and less rigorous about performance
              management. Our model works best for people who value excellence and the opportunities it provides.
            </p>
            <p className="text-secondary">
              Does our positioning and mission resonate with you? If yes, we have been waiting to have you!
            </p>
          </div>
          <div className="mt-5">
            <JointheTeamBtn />
          </div>
        </div>

        {/* Right: resource links */}
        <div className="flex flex-1 flex-col gap-5">
          <a
            href="https://docsend.com/view/f96g3immhc2sddfd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-purple/15 bg-white px-5 py-4 shadow-brand transition-all hover:translate-x-1 hover:border-purple hover:shadow-[0_6px_24px_rgba(130,30,107,0.15)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-br from-fuchsia-500 to-purple text-xl text-white">
              <BsPeopleFill />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-[0.95rem] font-bold text-[#0f1f20]">View Our Culture Deck</span>
              <span className="mt-0.5 text-sm text-[#0f1f20]/50">Learn how we work and what we value</span>
            </div>
            <BsArrowUpRight className="shrink-0 text-purple/60" />
          </a>

          <a
            href="https://docsend.com/view/j5w5ew8eqd8ah6at"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-purple/15 bg-white px-5 py-4 shadow-brand transition-all hover:translate-x-1 hover:border-purple hover:shadow-[0_6px_24px_rgba(130,30,107,0.15)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-br from-cyan-500 to-cyan-700 text-xl text-white">
              <BsJournalText />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-[0.95rem] font-bold text-[#0f1f20]">View our Employee Handbook</span>
              <span className="mt-0.5 text-sm text-[#0f1f20]/50">
                Get familiar with our policies, perks and general expectations
              </span>
            </div>
            <BsArrowUpRight className="shrink-0 text-purple/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
