import Image from "next/image";
import { BsBriefcase, BsPerson, BsArrowRight, BsArrowDown } from "react-icons/bs";
import { PartnersMarquee } from "@/components/PartnersMarquee";

import recruitment from "@/assets/images/talentplacement/recruitment.png";
import internshipplacement from "@/assets/images/talentplacement/internshipplacement.png";
import cvscreening from "@/assets/images/talentplacement/cvscreening.png";
import whyrecruitfromus from "@/assets/images/talentplacement/whyrecruitfromus.png";
import migrationadvisorydesk from "@/assets/images/talentplacement/migrationadvisorydesk.jpg";

import ecobarter from "@/assets/images/talentplacement/companylogo/ecobarter.png";
import propslogo from "@/assets/images/talentplacement/companylogo/propslogo.png";
import aiki from "@/assets/images/talentplacement/companylogo/aiki.png";
import chekkit from "@/assets/images/talentplacement/companylogo/chekkit.png";
import cloudflex from "@/assets/images/talentplacement/companylogo/cloudflex.png";
import firstbank from "@/assets/images/talentplacement/companylogo/firstbank.png";
import esentry from "@/assets/images/talentplacement/companylogo/esentry.png";
import npc from "@/assets/images/talentplacement/companylogo/npc.png";
import uba from "@/assets/images/talentplacement/companylogo/uba.png";
import elitecv from "@/assets/images/talentplacement/companylogo/elitecv.png";
import lagosstategovernment from "@/assets/images/talentplacement/companylogo/lagosstategovernment.png";
import unionbank from "@/assets/images/talentplacement/companylogo/unionbank.png";
import wouessi from "@/assets/images/talentplacement/companylogo/wouessi.png";
import dangote from "@/assets/images/talentplacement/companylogo/dangote.png";
import tingomobile from "@/assets/images/talentplacement/companylogo/tingomobile.png";
import fuelmetrics from "@/assets/images/talentplacement/companylogo/fuelmetrics.png";
import ictflier from "@/assets/images/talentplacement/companylogo/ictflier.png";

import developer from "@/assets/images/talentplacement/talents/developer.png";
import creativedesigners from "@/assets/images/talentplacement/talents/Creativedesigners.png";
import dataanalysts from "@/assets/images/talentplacement/talents/Dataanalysts.png";
import digitalmarketers from "@/assets/images/talentplacement/talents/digitalmarketers.png";
import productdesigners from "@/assets/images/talentplacement/talents/ProductDesigners.png";
import productmanagers from "@/assets/images/talentplacement/talents/ProductManagers.png";
import customerexperience from "@/assets/images/talentplacement/talents/customerexperience.png";
import codingandrobotics from "@/assets/images/talentplacement/talents/Codingandrobotics.png";

const TALENT_REQUEST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeyPXUNmhKOpIUyAYhQyBmWCHZh8IEpaBfrHivyaIO2XzmFVg/viewform";

const trustedCompanyLogos = [
  ecobarter,
  firstbank,
  aiki,
  chekkit,
  cloudflex,
  propslogo,
  esentry,
  uba,
  npc,
  unionbank,
  lagosstategovernment,
  wouessi,
  dangote,
  ictflier,
  elitecv,
  tingomobile,
  fuelmetrics,
];

const services = [
  { image: recruitment, title: "Full Cycle Recruitment", description: "Streamlined recruitment: Expertly navigate tech talent hiring from discovery to onboarding with our solution." },
  { image: internshipplacement, title: "Internship Placement", description: "Discover your potential through our esteemed intern placement service, connecting talent with ground breaking ventures." },
  { image: cvscreening, title: "CV Screening", description: "Streamlined CV screening to find top tech talent for your roles with our meticulous process." },
];

const talents = [
  { image: developer, label: "Web Developers" },
  { image: creativedesigners, label: "Creative Designers" },
  { image: dataanalysts, label: "Data Analysts" },
  { image: digitalmarketers, label: "Digital Marketers" },
  { image: productdesigners, label: "UI/UX Designers" },
  { image: productmanagers, label: "Product Managers" },
  { image: customerexperience, label: "Customer Experience" },
  { image: codingandrobotics, label: "Coding and Robotics" },
];

const migrantChecklist = [
  { title: "Expert Support", desc: "Backed by GIZ partnership" },
  { title: "Safe Migration", desc: "Trusted support throughout" },
  { title: "Employability Training", desc: "Practical skills development" },
  { title: "Global Job-Ready", desc: "Not just travel-ready" },
];

export function TalentPlacement() {
  return (
    <>
      <TalentHero />
      <Services />
      <OurHiringProcess />
      <WhyRecruitFromUs />
      <MigrantAdvisoryDesk />
      <Tractions />
      <OurAvailableTalents />
      <TrustedCompanies />
    </>
  );
}

function TalentHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#681955_0%,#821e6b_100%)] px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl">Hire Vetted Tech Talents</h1>
          <p className="mt-4 text-lg text-white/90">
            Scale your business with our top-tier tech talent.
            <br />
            Expert sourcing, development, and management for excellence.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href={TALENT_REQUEST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-white/10 p-5 backdrop-blur transition-colors hover:bg-white/20"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                  <BsBriefcase />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">For MSMEs</span>
              </div>
              <div className="flex items-center justify-between font-heading">
                <span>Build Your Dream Team</span>
                <BsArrowRight />
              </div>
            </a>

            <a
              href="#migrant-advisory-desk"
              className="block rounded-xl bg-white/10 p-5 backdrop-blur transition-colors hover:bg-white/20"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                  <BsPerson />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">For Individuals</span>
              </div>
              <div className="flex items-center justify-between font-heading">
                <span>Migrant Advisory Desk</span>
                <BsArrowDown />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12">
      <h4 className="mb-8 text-center">Our Services</h4>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col overflow-hidden rounded-b-[40px] bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
            <Image src={service.image} alt="talentplacement" className="w-full" />
            <div className="px-4 pb-4">
              <h4 className="mt-4 text-lg">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href={TALENT_REQUEST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border-[3px] border-purple px-6 font-heading font-medium text-purple transition-colors hover:bg-purple hover:text-white"
        >
          Request Talent
        </a>
      </div>
    </div>
  );
}

function OurHiringProcess() {
  return (
    <div className="bg-purple/10 px-4 py-12">
      <h4 className="mb-6 text-center">Our Hiring Process</h4>
      <div className="flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/YKyZ2z1h1-c?si=gFbvTw9J3lkTJewL"
          width="600"
          height="400"
          className="max-w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          title="hiring"
        />
      </div>
    </div>
  );
}

function WhyRecruitFromUs() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12">
      <h4 className="mb-6 text-center">Why Recruit From Us</h4>
      <div className="mx-auto max-w-4xl">
        <Image src={whyrecruitfromus} alt="talentplacement" className="w-full" />
      </div>
    </div>
  );
}

function MigrantAdvisoryDesk() {
  return (
    <div
      id="migrant-advisory-desk"
      className="bg-[linear-gradient(135deg,rgba(130,30,107,0.05)_0%,rgba(130,30,107,0.15)_100%)] px-4 py-12 md:py-16"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h4>Migrant Advisory Desk</h4>
          <h5 className="mb-4">Verified Guidance for Safe, Successful Migration</h5>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {migrantChecklist.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple text-sm text-white">
                  &#10003;
                </div>
                <div>
                  <h6 className="mb-1 text-purple-hover">{item.title}</h6>
                  <p className="m-0 text-sm text-[#666]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full border-[3px] border-purple px-6 font-heading font-medium text-purple transition-all hover:-translate-y-0.5 hover:bg-purple hover:text-white"
          >
            Learn More &rarr;
          </a>
        </div>

        <div className="relative">
          <div className="rounded-xl bg-white p-4 shadow-[0_10px_40px_rgba(130,30,107,0.15)]">
            <Image src={migrationadvisorydesk} alt="Migrant Advisory Desk" className="w-full rounded-lg" />
          </div>
          <div className="absolute -right-5 -top-5 -z-10 h-[100px] w-[100px] rounded-full bg-purple/10" />
        </div>
      </div>
    </div>
  );
}

function Tractions() {
  return (
    <div className="bg-[linear-gradient(135deg,#681955_0%,#821e6b_100%)] px-4 py-12">
      <h3 className="mb-2 text-center text-white">Tractions</h3>
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-16">
        <div className="mt-5 text-center text-white">
          <h2>500+</h2>
          <p>Tech Talents</p>
        </div>
        <div className="mt-5 text-center text-white">
          <h2>50+</h2>
          <p>Companies</p>
        </div>
      </div>
    </div>
  );
}

function OurAvailableTalents() {
  return (
    <div className="bg-[#681955] px-4 pb-8 pt-12">
      <h4 className="mb-8 text-center text-white">Our Available Talents</h4>
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {talents.map((talent) => (
          <div key={talent.label} className="text-center">
            <Image src={talent.image} alt="talentplacement" width={100} height={100} className="mx-auto h-[100px] w-[100px]" />
            <p className="mt-2 text-sm text-white">{talent.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustedCompanies() {
  return (
    <PartnersMarquee logos={trustedCompanyLogos} title="Companies Who Have Trusted Us" />
  );
}
