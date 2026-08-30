"use client";

import Image from "next/image";
import { BsCalendarX, BsChevronDown } from "react-icons/bs";
import demoHeroImg from "@/assets/images/events/demoimg.jpg";
import demoImgOne from "@/assets/images/events/demo1.png";
import demoImgTwo from "@/assets/images/events/demo2.png";

export function DemoDayPage() {
  const handleScrollToEvents = () => {
    document.getElementById("events-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex min-h-[55vh] w-full items-center justify-center overflow-hidden px-4 py-10 text-center">
        <Image src={demoHeroImg} alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-black/[.771]" />
        <div className="relative z-10 flex flex-col items-center text-white">
          <h2 className="mb-2 font-heading">Demo Day</h2>
          <h3 className="mb-3 font-heading text-xl font-bold text-white">Showcasing Innovation and Excellence</h3>
          <p className="mb-4 max-w-xl">
            From time to time 8thGear Hub hosts Demo days for all its portfolio and select companies
          </p>
          <button
            type="button"
            onClick={handleScrollToEvents}
            aria-label="Scroll to upcoming demo days"
            className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-6 py-2 font-medium backdrop-blur transition-colors hover:border-[#d946ef] hover:bg-[#d946ef]/35"
          >
            <span>View Upcoming Demo Days</span>
            <BsChevronDown className="ml-2 animate-bounce" />
          </button>
        </div>
      </div>

      <EventsSection />
      <DemoSection imageOne={demoImgOne} imageTwo={demoImgTwo} />
    </>
  );
}

function EventsSection() {
  // No active demo days right now — add new ones here when scheduled (mirrors the CRA source, which also
  // ships this section with an empty events array and a "no upcoming demo days" placeholder).
  const events: { id: number; name: string }[] = [];

  return (
    <section id="events-section" className="bg-gradient-to-b from-white to-[#f8fafc] py-12">
      <div className="mx-auto max-w-350 px-4">
        {events.length === 0 && (
          <div className="mx-auto max-w-md py-4 text-center text-[#666]">
            <BsCalendarX className="mx-auto mb-4 text-5xl text-purple" />
            <h4 className="mb-3 text-xl font-semibold text-[#333]">No Upcoming Demo Days</h4>
            <p className="text-[15px] leading-relaxed">
              There are no demo days scheduled at the moment. Check back or follow us on social media to be the
              first to know when the next one is announced.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function DemoSection({
  imageOne,
  imageTwo,
}: {
  imageOne: import("next/image").StaticImageData;
  imageTwo: import("next/image").StaticImageData;
}) {
  return (
    <div className="mx-auto max-w-350 px-4 py-12">
      <div className="mb-10 text-center">
        <h3 className="font-heading">8thGear Hub Demo Day</h3>
        <p className="mx-auto max-w-2xl text-[#64748b]">
          It is a value-packed day where every member of our ecosystem comes together to witness the brilliance of
          creative minds and hear pitch ideas that have the potential to scale.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 font-heading">What is Demo Day?</h3>
          <div className="space-y-3 text-[#64748b]">
            <p>On Demo Day, 8thGear Hub offers startups an opportunity to pitch their ideas and meet with possible investors.</p>
            <p>Demo Day is open to all startups who are looking for investors and are willing to take their business to the next level!!</p>
            <p>We have a couple of investors who are willing and looking for startups to invest in.</p>
          </div>
        </div>
        <Image src={imageOne} alt="Demo Day" className="w-full rounded-2xl shadow-brand-lg" />
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Image src={imageTwo} alt="Join Demo Day" className="w-full rounded-2xl shadow-brand-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="mb-3 font-heading">Want to be a part of demo day?</h3>
          <div className="space-y-3 text-[#64748b]">
            <p>1. Must have completed any 8thGear Program (MIRE, DSE, DBN)</p>
            <p>2. Confident speaking in English</p>
            <p>3. Must have a business plan</p>
            <p>4. Should have a good portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
