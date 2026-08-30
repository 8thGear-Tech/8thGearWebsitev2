import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { PartnersMarquee } from "@/components/PartnersMarquee";

import b2bImage from "@/assets/images/tech-marketplace/b2bImage.png";
import partnerwithus from "@/assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "@/assets/images/tech-marketplace/tailoredsolution.png";
import trulance from "@/assets/images/tech-marketplace/trulance.png";
import legalmo from "@/assets/images/tech-marketplace/legalmo.png";
import finamo from "@/assets/images/tech-marketplace/finamo.png";
import talenmo from "@/assets/images/tech-marketplace/talenmo.png";
import mtn from "@/assets/images/tech-marketplace/mtn.png";
import zoho from "@/assets/images/tech-marketplace/zoho.png";
import digiplus from "@/assets/images/tech-marketplace/digiplus.png";
import legalmologo from "@/assets/images/tech-marketplace/legalmo-logo.png";
import trulancelogo from "@/assets/images/tech-marketplace/trulance-logo.png";
import mtnlogo from "@/assets/images/tech-marketplace/mtn-logo.png";
import zohologo from "@/assets/images/tech-marketplace/zoho-logo.png";
import talenmologo from "@/assets/images/tech-marketplace/talenmologo.png";
import digipluslogo from "@/assets/images/tech-marketplace/digipluslogo.png";
import finamologo from "@/assets/images/tech-marketplace/finamologo.jpeg";

// Shared section chrome classes (mirrors the "chip" / "divider" / "title" / "copy"
// treatment repeated across every section of this page).
const CHIP =
  "mb-[14px] inline-flex items-center rounded-full border border-teal/25 bg-teal/[0.07] px-[14px] py-[5px] font-body text-[11px] font-bold uppercase tracking-[0.1em] text-teal";
const DIVIDER = "mx-auto mb-[18px] h-[3px] w-11 rounded-full bg-teal";
const DIVIDER_LEFT = "mb-[18px] h-[3px] w-11 rounded-full bg-teal";
const SECTION_TITLE = "mb-4 font-heading text-2xl font-bold tracking-[-0.02em] text-ink";
const SECTION_COPY = "font-body text-[0.95rem] font-light text-secondary";

function ArrowR() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="inline-block">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Solution = {
  img: StaticImageData;
  title: string;
  desc: string;
  link: string;
  btnText: string;
  accent: "teal" | "purple";
  internal?: boolean;
};

const SOLUTIONS: Solution[] = [
  {
    img: legalmo,
    title: "LegalMo",
    desc: "Access reliable legal services designed for businesses, contract creation, compliance, IP protection, and more.",
    link: "https://www.legalmo.biz/",
    btnText: "Learn More",
    accent: "teal",
  },
  {
    img: trulance,
    title: "Trulance",
    desc: "Launch and scale your online footprint with expert support in web development, content creation, digital marketing, and data analysis.",
    link: "https://www.trulance.io/",
    btnText: "Learn More",
    accent: "purple",
  },
  {
    img: finamo,
    title: "Finamo",
    desc: "Access reliable financial services for bookkeeping, tax compliance, reporting, budgeting, and business structuring.",
    link: "https://www.finamo.biz/",
    btnText: "Learn More",
    accent: "teal",
  },
  {
    img: talenmo,
    title: "TalenMo",
    desc: "Access end-to-end talent sourcing, screening, training, and placement for internships, contract, and full-time roles.",
    link: "https://www.talenmo.biz/",
    btnText: "Learn More",
    accent: "purple",
  },
  {
    img: mtn,
    title: "MTN Business",
    desc: "Connectivity and telecom solutions for enterprise needs.",
    link: "https://shop.mtn.ng/category/shop?affiliate_code=8thGearHub",
    btnText: "Learn More",
    accent: "teal",
  },
  {
    img: zoho,
    title: "Zoho Suite",
    desc: "Comprehensive business software for CRM, HR, operations and more",
    link: "/msme-marketplace/zoho",
    btnText: "Learn More",
    accent: "purple",
    internal: true,
  },
  {
    img: digiplus,
    title: "DigiPlus Starter kit",
    desc: "Partner-powered digital solutions to help businesses scale.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScTuz38R6HSJM6VP0474TN5h5XF2uQyUlXVaqn0815K5osPvA/viewform",
    btnText: "Learn More",
    accent: "purple",
  },
];

type Feature = { title: string; desc: string; color: "teal" | "purple"; icon: ReactNode };

const FEATURES: Feature[] = [
  {
    title: "Save Time & Resources",
    desc: "Skip the endless vendor research and demos. Our pre-vetted solutions are ready to implement immediately.",
    color: "teal",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Expert-Vetted Quality",
    desc: "Every solution undergoes rigorous evaluation to ensure reliability, security, and proven business impact.",
    color: "purple",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise costs. Clear pricing structures with dedicated support for implementation.",
    color: "teal",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <line x1="16" y1="21" x2="16" y2="5" />
        <line x1="22" y1="7" x2="2" y2="7" />
      </svg>
    ),
  },
  {
    title: "Scale with Confidence",
    desc: "Solutions that grow with your business, from startup to enterprise, with ongoing support and updates.",
    color: "purple",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6L13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17,6 23,6 23,12" />
      </svg>
    ),
  },
];

const PARTNER_LOGOS: StaticImageData[] = [legalmologo, trulancelogo, mtnlogo, zohologo, talenmologo, digipluslogo, finamologo];

export function MSMEMarketplace() {
  return (
    <div>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-purple via-teal to-teal-dark pt-[70px] pb-[100px]">
        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-white/10 blur-[40px]" />
        <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-[250px] w-[250px] rounded-full bg-white/[0.08] blur-[30px]" />
        <div className="pointer-events-none absolute right-[15%] top-1/2 h-[150px] w-[150px] rounded-full bg-white/5 blur-[20px]" />

        <div className="relative z-[1] mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/15 px-5 py-2 font-body text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
                MSME Marketplace
              </div>
              <h1 className="mb-6 block bg-gradient-to-tr from-white to-white/80 bg-clip-text font-heading text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-transparent">
                Transform Your Business with Cutting-Edge Solutions
              </h1>
              <p className="mb-8 max-w-[500px] font-body font-light text-white/[0.78]">
                Discover vetted B2B tools and services that drive growth, streamline operations, and give you a
                competitive edge in today&apos;s digital marketplace.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-white/50 bg-white/15 px-[22px] py-[11px] font-body text-[13px] font-bold text-white no-underline transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:-translate-y-0.5 focus-visible:brightness-105"
                >
                  Get Started Today <ArrowR />
                </a>
              </div>
            </div>

            <div className="text-center">
              <Image
                src={b2bImage}
                alt="B2B Solutions"
                className="mb-10 w-full max-w-[500px] rotate-[-2deg] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-grey-bg pb-20 pt-[100px]">
        <div className="pointer-events-none absolute left-[10%] top-[20%] h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-teal/[0.07] to-purple/[0.07] opacity-30 blur-[60px]" />
        <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-[150px] w-[150px] rounded-full bg-gradient-to-tr from-purple/[0.07] to-teal/[0.07] opacity-20 blur-[40px]" />

        <div className="relative z-[1] mx-auto max-w-[1400px] px-4">
          <div className="mb-12 text-center">
            <div className={CHIP}>Why Choose Us</div>
            <div className={DIVIDER} />
            <h2 className={SECTION_TITLE}>
              Why Businesses Choose <span className="text-teal">Our Marketplace</span>
            </h2>
            <p className={`${SECTION_COPY} mx-auto max-w-[700px]`}>
              Join hundreds of growing businesses who trust our curated marketplace for reliable, scalable B2B
              solutions that drive real results.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-7 md:grid-cols-2">
            {FEATURES.map((f) => {
              const purple = f.color === "purple";
              return (
                <div
                  key={f.title}
                  className={`group relative flex min-h-[245px] cursor-pointer flex-col items-start overflow-hidden rounded-xl border-2 border-grey-border bg-white px-7 py-8 shadow-brand transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:shadow-brand-lg ${
                    purple ? "hover:border-purple" : "hover:border-teal"
                  }`}
                >
                  <div
                    className={`mb-6 flex h-[54px] w-[54px] items-center justify-center rounded-2xl transition-colors duration-300 ${
                      purple
                        ? "bg-purple/15 text-purple group-hover:bg-purple group-hover:text-white"
                        : "bg-teal/15 text-teal group-hover:bg-teal group-hover:text-white"
                    }`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="mb-3 font-heading text-[1.1rem] font-bold leading-[1.3] text-ink">{f.title}</h3>
                  <p className="m-0 flex-grow font-body text-[0.95rem] font-light text-secondary">{f.desc}</p>
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      purple ? "bg-gradient-to-r from-purple to-purple/50" : "bg-gradient-to-r from-teal to-teal/50"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-purple/20 py-[92px]">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="mb-12 text-center">
            <div className={CHIP}>Our Solutions</div>
            <div className={DIVIDER} />
            <h2 className={SECTION_TITLE}>
              Explore Trusted <span className="text-teal">Tech Providers</span>
            </h2>
            <p className={`${SECTION_COPY} mx-auto max-w-[600px]`}>
              Handpicked software and tools designed for scalability and reliability.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {SOLUTIONS.map((sol) => {
              const purple = sol.accent === "purple";
              const bodyClass = `flex flex-grow flex-col px-[18px] pt-[10px] pb-[18px] ${
                purple ? "bg-gradient-to-b from-purple/[0.13] to-purple/[0.05]" : "bg-gradient-to-b from-teal/[0.13] to-teal/[0.05]"
              }`;
              const btnClass = `inline-flex items-center justify-center gap-2 self-start rounded-xl px-[22px] py-[11px] font-body text-[13px] font-bold text-white no-underline transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:-translate-y-0.5 focus-visible:brightness-105 ${
                purple ? "bg-purple" : "bg-teal"
              }`;
              const dotClass = `mt-[3px] h-3 w-3 flex-shrink-0 rounded-full ${
                purple ? "bg-purple shadow-[0_0_0_4px_rgba(130,30,107,0.13)]" : "bg-teal shadow-[0_0_0_4px_rgba(0,164,149,0.13)]"
              }`;

              return (
                <div
                  key={sol.title}
                  className="flex h-full flex-col overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#171717] shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex w-full items-center justify-center overflow-hidden bg-[#111]">
                    <Image src={sol.img} alt={sol.title} className="block h-auto w-full object-contain object-top" />
                  </div>

                  <div className={bodyClass}>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h5 className="m-0 font-heading font-bold leading-tight text-white">{sol.title}</h5>
                      <span className={dotClass} />
                    </div>

                    <p className="mb-[18px] flex-grow font-body text-[0.95rem] font-light text-white/[0.78]">{sol.desc}</p>

                    {sol.internal ? (
                      <Link href={sol.link} className={btnClass}>
                        {sol.btnText} <ArrowR />
                      </Link>
                    ) : (
                      <a href={sol.link} target="_blank" rel="noopener noreferrer" className={btnClass}>
                        {sol.btnText} <ArrowR />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-[92px]">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <div className={CHIP}>Tailored Solutions</div>
              <div className={DIVIDER_LEFT} />
              <h2 className={SECTION_TITLE}>
                Tell Us What You Need,
                <br />
                <span className="text-teal">We&apos;ll Make It Happen</span>
              </h2>
              <p className={`${SECTION_COPY} mb-6`}>
                If our featured solutions don&apos;t match your needs, we&apos;re here to create custom solutions
                that do.
              </p>
              <a
                href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-teal bg-transparent px-5 py-[9px] font-body text-[13px] font-semibold text-teal no-underline transition-colors duration-200 hover:bg-teal hover:text-white focus-visible:bg-teal focus-visible:text-white"
              >
                Request Custom Solution <ArrowR />
              </a>
            </div>

            <div>
              <Image src={tailoredsolution} alt="Tailored Solutions" className="w-full rounded-xl shadow-brand-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-grey-bg py-[72px]">
        <div className="mx-auto max-w-[1400px] px-4 text-center">
          <div className={CHIP}>Our Partners</div>
          <div className={DIVIDER} />
          <h2 className={SECTION_TITLE}>
            Meet Our <span className="text-teal">Trusted Partners</span>
          </h2>
          <p className={`${SECTION_COPY} mx-auto mb-10 max-w-[500px]`}>
            We collaborate with industry-leading platforms to bring you the best in business technology.
          </p>
          <PartnersMarquee logos={PARTNER_LOGOS} title={null} />
        </div>
      </section>

      <PartnersSection />
    </div>
  );
}

function PartnersSection() {
  return (
    <div className="mx-auto mt-12 max-w-[1400px] px-4 pt-12">
      <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-2xl text-center text-white">
        <Image src={partnerwithus} alt="" fill className="-z-10 object-cover" />
        <div className="rounded p-4 text-center">
          <h2 className="mb-3 font-bold">
            Want to Offer Your Tech <br className="hidden md:block" />
            Solution to Growing Businesses?
          </h2>
          <p className="mb-4">
            Join our marketplace and connect with the right B2B audience.
            <br className="hidden md:block" />
            Showcase your product, gain visibility, and grow your reach.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_k2Vk4CgZKz4-sPtP7h7aflemd-AcpGSpWodxUoGT6UuKJg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-white px-6 py-2 font-semibold text-ink">Partner With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
