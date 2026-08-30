"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

export function CoWorking() {
  return (
    <div>
      <Hero />
      <OurNewSpaces />
      <GetToKnowUs />
      <Voucher />
      <OurPriceRange />
      <Testimonials />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────── */

const slides = [
  {
    bg: "/images/coworkingNew/slide_1.JPG",
    overlay1: "/images/coworkingNew/slide_1_short.png",
    overlay2: "/images/coworkingNew/slide_2_short.png",
    copy: (
      <>
        Unlock your full potential in a vibrant coworking space. <br />
        Surround yourself with motivated individuals and <br /> watch your ideas soar!
      </>
    ),
  },
  {
    bg: "/images/coworkingNew/slide_2.JPG",
    overlay1: "/images/coworkingNew/slide_2_short.png",
    overlay2: "/images/coworkingNew/slide_3_short.png",
    copy: (
      <>
        Looking for the perfect work environment? <br />
        Our coworking spaces offer the ideal blend of productivity &amp; community. <br /> Experience the power of
        collaboration!
      </>
    ),
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <div className="relative h-screen text-left text-white">
      <div className="relative flex h-screen w-full flex-col justify-center px-4 md:px-16">
        <Image src={slide.bg} alt="" fill sizes="100vw" className="-z-10 object-cover" priority />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/0 to-black/75" />
        <h3 className="mb-2 text-[2.5rem] font-normal leading-tight [text-shadow:4px_4px_6px_rgba(0,0,0,0.5)] md:text-[4.5rem]">
          Coworking
        </h3>
        <p className="mb-0 max-w-xl text-base leading-relaxed md:text-xl">{slide.copy}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 rounded bg-purple px-4 py-3 text-sm text-white">
              <Image src="/images/coworkingNew/space.svg" alt="" width={18} height={18} className="h-4.5 w-4.5" />
              Book a Space
            </button>
          </a>
          <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 rounded bg-purple px-4 py-3 text-sm text-white">
              <Image src="/images/coworkingNew/microscope.png" alt="" width={18} height={18} className="h-4.5 w-4.5" />
              Book a Session
            </button>
          </a>
        </div>

        <div className="absolute right-[12%] top-[60%] hidden h-92 max-w-[18rem] -translate-y-1/2 rounded-[10px] border-4 border-white 2xl:block">
          <Image src={slide.overlay1} alt="Overlay" fill sizes="18rem" className="rounded-[10px] object-cover" />
        </div>
        <div className="absolute right-[-5%] top-[70%] hidden h-60 max-w-12 -translate-y-1/2 rounded-[10px] 2xl:block">
          <Image src={slide.overlay2} alt="Overlay2" fill sizes="12rem" className="rounded-[10px] object-cover" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === active ? "bg-purple" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Our New Spaces ───────────────────────────── */

const spaceVideos = [
  { src: "https://www.youtube.com/embed/xw2gPCt1vfE?si=SKv79QNdgE57P6z0", text: "8thGear HQ" },
  { src: "https://www.youtube.com/embed/MODRgv5Wev0?si=uDkUscOSvy12YJu5", text: "Tech Showroom" },
];

function OurNewSpaces() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUp = () => setCurrentIndex((prev) => (prev === 0 ? spaceVideos.length - 1 : prev - 1));
  const handleDown = () => setCurrentIndex((prev) => (prev === spaceVideos.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-12 pb-2 text-center">
      <div className="pb-2">
        <h3>OUR CO-WORKING SPACES</h3>
        <p>Two locations, same excellent customer service.</p>
      </div>

      <div className="mx-auto mb-4 max-w-4xl px-4 text-center">
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src={spaceVideos[currentIndex].src}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded px-3 py-1 text-lg text-white backdrop-blur-[10px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
            {spaceVideos[currentIndex].text}
          </h3>
        </div>

        <div className="mt-3">
          <BsArrowLeftSquare onClick={handleUp} role="button" className="mx-1 inline h-6 w-6 cursor-pointer text-[#525151]" />
          <BsArrowRightSquare onClick={handleDown} role="button" className="mx-1 inline h-6 w-6 cursor-pointer text-[#525151]" />
        </div>

        <div className="mt-3">
          <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noreferrer">
            <button className="rounded bg-purple px-4 py-2 text-sm text-white">Book a Space</button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Get to Know Us ───────────────────────────── */

const cardData = [
  {
    title: "Monday - Friday (9am - 5pm), Saturday (10am - 3pm), Night Plan (6pm - 6am)",
    imgSrc: "/images/coworkingNew/alarm.svg",
  },
  { title: "Kitchenette", imgSrc: "/images/coworkingNew/Vector.svg" },
  { title: "Serene Environment", imgSrc: "/images/coworkingNew/sereneEnvironment.png" },
  { title: "Ecosystem Events", imgSrc: "/images/coworkingNew/ecosystemEvents.png" },
  { title: "Meeting Room / Training Room", imgSrc: "/images/coworkingNew/meetingRoom.png" },
  { title: "Internet Services", imgSrc: "/images/coworkingNew/intrnetServices.png" },
];

function GetToKnowUs() {
  return (
    <div className="flex flex-col justify-center gap-4 pb-12 pt-4">
      <div className="p-4 text-center">
        <h3 className="font-semibold">WHAT WE OFFER</h3>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2">
        {cardData.map((data) => (
          <div
            key={data.title}
            className="mx-auto flex w-60 flex-col items-center gap-2 bg-[#b42baf] px-6 py-4"
          >
            <Image src={data.imgSrc} alt="" width={56} height={56} className="h-14 w-auto py-2" />
            <p className="text-center text-base text-white">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Voucher ──────────────────────────────────── */

function Voucher() {
  return (
    <div className="text-center">
      <div className="m-4">
        <h3>LAGOS INNOVATES: FREE WORKSPACE VOUCHER</h3>
        <p>
          Redeem your workspace voucher{" "}
          <a href="https://www.8thgearpartners.com/" className="text-[#454545]">
            here
          </a>
          . To apply for your workspace grant, click{" "}
          <a href="https://www.8thgearpartners.com/" className="text-[#454545]">
            here
          </a>
          .
        </p>
      </div>
      <div className="mx-auto mt-5 max-w-3xl px-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.youtube.com/embed/roWmniP_NUc"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

const EMBED_URL = "https://www.youtube.com/embed/V0JahOeWs4g?si=OPURaA53hQl2P7UX&autoplay=1";

function Testimonials() {
  const [src, setSrc] = useState("");

  return (
    <div className="pb-12">
      <h3 className="mt-12 pt-12 text-center">TESTIMONIALS</h3>

      <div className="mt-4 flex justify-center">
        <div className="mx-auto w-full max-w-2xl px-4">
          <div
            className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center bg-[url('https://img.youtube.com/vi/V0JahOeWs4g/hqdefault.jpg')]"
            onClick={() => !src && setSrc(EMBED_URL)}
          >
            {!src && (
              <div className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 transition-colors hover:bg-black/80">
                <div className="ml-1 h-0 w-0 border-y-12 border-l-18 border-y-transparent border-l-white" />
              </div>
            )}
            {src && (
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src={src}
                title="8thGear Spotlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Price Range ──────────────────────────────── */

type Plan = { title: string; price: string; timeRange?: string; features: string[] };

const virtualPlans: Plan[] = [
  {
    title: "VIRTUAL OFFICE",
    price: "₦150,000 Per Quarter",
    features: [
      "Verified Official Business Address",
      "Logo displayed at the 8thGear Hub",
      "Address Verification Documents",
      "Mail & Parcel Handling",
      "Guest Reception",
      "10hrs Meeting Room per quarter",
      "Professional recognition and credibility for your busines",
    ],
  },
  {
    title: "DEDICATED DESK",
    price: "₦50,000 Per Month",
    features: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Meeting Room - 3hr Free/Month",
      "Kitchenette",
      "Lounge Area",
      "Community Events",
      "5% Discount on Hub Services",
    ],
  },
];

const flexiPlans: Plan[] = [
  {
    title: "REGULAR",
    price: "₦5,000 Per Day",
    features: ["Fast, Reliable Internet Access", "Uninterrupted Power Supply", "Kitchenette", "Community Events"],
  },
  {
    title: "CLASSIC",
    price: "₦18,000 (5 Days)",
    features: ["Fast, Reliable Internet Access", "Uninterrupted Power Supply", "Kitchenette", "Community Events"],
  },
  {
    title: "DELUXE",
    price: "₦35,000 (10 Days)",
    features: ["Fast, Reliable Internet Access", "Uninterrupted Power Supply", "Kitchenette", "Community Events"],
  },
  {
    title: "SATURDAYS",
    price: "₦8,000 Per Day",
    timeRange: "(10am-3pm)",
    features: ["Fast, Reliable Internet Access", "Uninterrupted Power Supply", "Kitchenette", "Community Events"],
  },
  {
    title: "NIGHT PLAN",
    price: "₦15,000",
    timeRange: "(6pm-6am)",
    features: ["Fast, Reliable Internet Access", "Uninterrupted Power Supply", "Kitchenette", "Community Events"],
  },
  {
    title: "MEETING ROOM",
    price: "₦10,000 Per Hour",
    features: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Kitchenette",
      "Community Events",
      "Sits up to 8 persons",
    ],
  },
];

const hallPlans: Plan[] = [
  {
    title: "CLASSIC - Per Hour",
    price: "₦20,000",
    features: ["Uninterrupted Power Supply", "Screen", "Good Sound System", "Sits up to 50 persons"],
  },
  {
    title: "CLASSIC - Half Day",
    price: "₦60,000",
    timeRange: "(9am-1pm)/(1pm-5pm)",
    features: ["Uninterrupted Power Supply", "Screen", "Good Sound System", "Sits up to 50 persons"],
  },
  {
    title: "CLASSIC - Per Day",
    price: "₦100,000",
    timeRange: "(9am-5pm)",
    features: ["Uninterrupted Power Supply", "Screen", "Good Sound System", "Sits up to 50 persons"],
  },
  {
    title: "PREMIUM - Per Hour",
    price: "₦35,000",
    features: [
      "Uninterrupted Power Supply",
      "Interactive Screen & White Board",
      "Good Sound System",
      "Sits up to 35 persons",
    ],
  },
  {
    title: "PREMIUM - Half Day",
    price: "₦95,000",
    timeRange: "(9am-1pm)/(1pm-5pm)",
    features: [
      "Uninterrupted Power Supply",
      "Interactive Screen & White Board",
      "Good Sound System",
      "Sits up to 35 persons",
    ],
  },
  {
    title: "PREMIUM - Per Day",
    price: "₦160,000",
    timeRange: "(9am-5pm)",
    features: [
      "Uninterrupted Power Supply",
      "Interactive Screen & White Board",
      "Good Sound System",
      "Sits up to 35 persons",
    ],
  },
];

const packageTabs: Record<string, Plan[]> = {
  "Quarterly/Monthly/Yearly Plan": virtualPlans,
  "Flexi Plan": flexiPlans,
  "Event/Training Hall": hallPlans,
};

function OurPriceRange() {
  const [currentPackage, setCurrentPackage] = useState<keyof typeof packageTabs>("Quarterly/Monthly/Yearly Plan");
  const currentCards = packageTabs[currentPackage];

  return (
    <div className="mx-auto mt-12 max-w-6xl px-4">
      <div className="mb-4 text-center uppercase">
        <h3>Our Price Range</h3>
        <p className="mt-1 text-sm font-semibold text-secondary">Location: 41 CMD Road</p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {Object.keys(packageTabs).map((packageType) => (
          <button
            key={packageType}
            onClick={() => setCurrentPackage(packageType)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              currentPackage === packageType ? "bg-purple text-white" : "bg-grey-bg text-secondary"
            }`}
          >
            {packageType}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center rounded-xl border-0 p-6 text-center shadow-brand"
          >
            <h5 className="font-bold">{card.title}</h5>
            {card.timeRange && <p className="text-sm text-secondary">{card.timeRange}</p>}
            <hr className="my-2 w-1/2" />
            <ul className="m-0 list-none p-0">
              {card.features.map((feature) => (
                <li key={feature} className="py-1 text-center text-sm leading-relaxed text-secondary">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-lg font-bold text-purple">{card.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
          <button className="rounded bg-purple px-4 py-2 text-sm text-white">Book a Space</button>
        </a>
      </div>
    </div>
  );
}
