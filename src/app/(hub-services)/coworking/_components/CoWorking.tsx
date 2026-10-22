"use client";

import { useEffect, useState } from "react";
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

const SLIDE_INTERVAL_MS = 5000;
// Matches the old react-bootstrap carousel's slide (`transform .6s ease-in-out`).
const SLIDE_TRANSITION_MS = 600;

function Hero() {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goTo = (next: number) => {
    if (next === active || leaving !== null) return;
    setLeaving(active);
    setActive(next);
  };

  // Advance every 5s like the old react-bootstrap carousel; depending on `active` restarts the timer after a manual pick.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setLeaving(active);
      setActive((active + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  // Once the outgoing slide has slid off to the left, park it (unanimated) back on the right, ready to enter next time.
  useEffect(() => {
    if (leaving === null) return;
    const id = setTimeout(() => setLeaving(null), SLIDE_TRANSITION_MS);
    return () => clearTimeout(id);
  }, [leaving]);

  return (
    <div
      className="relative h-screen overflow-hidden text-left text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isActive = i === active;
        const isLeaving = i === leaving;
        const position = isActive ? "translate-x-0" : isLeaving ? "-translate-x-full" : "invisible translate-x-full";
        const motion = isActive || isLeaving ? "transition-transform duration-600 ease-in-out motion-reduce:transition-none" : "";

        return (
          <div
            key={slide.bg}
            inert={!isActive}
            className={`absolute inset-0 isolate flex flex-col justify-center px-4 md:px-16 ${position} ${motion}`}
          >
            <Image src={slide.bg} alt="" fill sizes="100vw" className="-z-10 object-cover" priority={i === 0} />
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

            <div className="absolute right-[12%] top-[60%] hidden h-92 w-72 -translate-y-1/2 overflow-hidden rounded-[10px] border-4 border-white min-[1300px]:block">
              <Image src={slide.overlay1} alt="Overlay" fill sizes="18rem" className="object-cover" />
            </div>
            <div className="absolute right-[-5%] top-[70%] hidden h-60 w-48 -translate-y-1/2 overflow-hidden rounded-[10px] min-[1300px]:block">
              <Image src={slide.overlay2} alt="Overlay2" fill sizes="12rem" className="object-cover" />
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-1/2 z-2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
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
        <h3 className="text-2xl font-bold">OUR CO-WORKING SPACES</h3>
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
    <div className="flex flex-col justify-center bg-gray-100 gap-4 pb-12 pt-4">
      <div className="p-4 text-center">
        <h3 className="font-semibold text-2xl">WHAT WE OFFER</h3>
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
        <h3 className="font-bold text-2xl">LAGOS INNOVATES: FREE WORKSPACE VOUCHER</h3>
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
      <h3 className="mt-12 pt-12 text-center font-bold text-2xl">TESTIMONIALS</h3>

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
/* Mirrors the "8thGear Co-Working Rate Card" flyer: six standalone cards, no tabs. */

type PriceLine = { amount: string; label: string; note?: string };
type RateCard = { title: string; badge?: string; ratesLabel?: string; prices: PriceLine[]; perks: string[]; pink?: boolean };

const officePerks = [
  "Fast, Reliable Internet Access",
  "Uninterrupted Power Supply",
  "Meeting Room 3hrs Free Per Month",
  "Kitchenette",
  "Tea / Coffee",
  "Community Events",
  "5% Discount on Hub Services",
  "2 pages free printing service daily",
  "Table water daily",
  "Lounge Area",
];

const rateCards: RateCard[] = [
  {
    title: "Meeting Room",
    prices: [{ amount: "₦15,000", label: "Per Hour" }],
    perks: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Kitchenette",
      "Community events",
      "Sits up to 8 persons",
      "Coffee and Tea",
      "Table water for 8",
    ],
  },
  {
    title: "Event/Training Hall",
    pink: true,
    ratesLabel: "Rates",
    prices: [
      { amount: "₦180,000", label: "Per Day" },
      { amount: "₦100,000", label: "Half Day", note: "(9am-1pm / 1pm-5pm)" },
      { amount: "₦240,000", label: "Per day with Rollup Banner" },
    ],
    perks: [
      "Uninterrupted Power Supply",
      "Good Sound System",
      "Sits up to 50 persons",
      "Interactive Screens",
      "White Board & Marker",
      "3 Stick note of different colours",
      "Banner printing (Event planning services available on request)",
    ],
  },
  {
    title: "Private Office",
    prices: [{ amount: "₦350,000", label: "Per Month" }],
    perks: officePerks,
  },
  {
    title: "Virtual Office",
    pink: true,
    prices: [{ amount: "₦150,000", label: "Per Quarter" }],
    perks: ["Corporate Address", "Mail Handling", "Community Events", "In-Room Signage (Logo in Hub)"],
  },
  {
    title: "Flexi Plan",
    badge: "Weekdays 9am-5pm",
    prices: [
      { amount: "₦12,000", label: "1 Day" },
      { amount: "₦55,000", label: "5 Days" },
      { amount: "₦105,000", label: "10 Days" },
      { amount: "₦15,000", label: "Saturdays", note: "(10:00am-3:00pm)" },
      { amount: "₦25,000", label: "Night Plan", note: "(6:00pm-6:00am)" },
    ],
    perks: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Kitchenette",
      "Water (bottle water) per day",
      "Lunch (Rice + Chicken)",
      "Coffee & Tea per day",
    ],
  },
  {
    title: "Dedicated Desk",
    pink: true,
    prices: [{ amount: "₦100,000", label: "Per Month" }],
    perks: officePerks,
  },
];

function RateCardView({ card }: { card: RateCard }) {
  return (
    <div className={`flex flex-col rounded-xl p-6 shadow-brand ${card.pink ? "bg-purple/8" : "bg-white border-2 border-purple/20"}`}>
      <h5 className="font-bold text-primary">{card.title}</h5>

      {card.badge && (
        <span className="mt-2 inline-block w-fit rounded-full bg-purple px-3 py-1 text-xs font-bold text-white">
          {card.badge}
        </span>
      )}
      {card.ratesLabel && <p className="mb-1 mt-3 text-sm font-bold text-secondary">{card.ratesLabel}</p>}

      <div className={`flex flex-col gap-0.5 ${card.badge || card.ratesLabel ? "mt-2" : "mt-2"}`}>
        {card.prices.length === 1 ? (
          <span className="w-fit rounded-full bg-purple px-3 py-1 text-sm font-bold text-white">
            {card.prices[0].amount} {card.prices[0].label}
          </span>
        ) : (
          card.prices.map((p) => (
            <p key={p.label} className="m-0 text-sm font-bold text-purple">
              {p.amount}
              <span className="font-normal text-secondary"> - {p.label}</span>
              {p.note && <span className="ml-1 text-xs font-normal text-muted">{p.note}</span>}
            </p>
          ))
        )}
      </div>

      <p className="mb-1 mt-4 text-xs font-bold uppercase tracking-wide text-secondary">Perks</p>
      <ul className="m-0 list-none space-y-1 p-0">
        {card.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-sm leading-snug text-secondary">
            <span aria-hidden className="text-teal">
              ✓
            </span>
            {perk}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OurPriceRange() {
  return (
    <div className="mx-auto mt-12 max-w-6xl px-4">
      <div className="mb-8 text-center">
        <h3 className="font-bold text-2xl uppercase">8thGear Co-Working Rate Card</h3>
        <p className="mt-1 text-sm font-semibold text-secondary">
          8thGear Hub HQ: 41 CMD Road, Secretariat/Magodo, Lagos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rateCards.map((card) => (
          <RateCardView key={card.title} card={card} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="mb-3 text-sm text-secondary">
          For more inquiries: 0913 246 2410 | 0809 481 8883 |{" "}
          <a href="mailto:info@8thgearpartners.com" className="text-purple hover:underline">
            info@8thgearpartners.com
          </a>
        </p>
        <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
          <button className="rounded bg-purple px-4 py-2 text-sm text-white">Book a Space</button>
        </a>
      </div>
    </div>
  );
}
