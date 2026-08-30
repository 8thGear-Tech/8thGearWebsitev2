import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import hubservices from "@/assets/images/Homepageassets/HubServices.jpg";
import projects from "@/assets/images/Homepageassets/Projects.jpg";
import venture from "@/assets/images/Homepageassets/VentureStudio.jpg";
import accountsteamimg from "@/assets/images/Homepageassets/accountsteam.png";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { PillLinkButton } from "@/components/Buttons/PillButtons";
import { SpotlightSection } from "@/components/Home/SpotlightSection";

export const metadata: Metadata = {
  title: "8thGear Hub | Venture Studio & Growth Advisory in Nigeria",
  description:
    "8thGear Partners is a trusted venture builder developing a thriving ecosystem for entrepreneurs through Hub Services, Initiatives, and Venture Studio.",
};

export default function Home() {
  return (
    <>
      <BigHeroSection />
      <SmallHeroSection />
      <Service />
      <PartnersMarquee />
      <AboutSection />
      <SpotlightSection />
    </>
  );
}

function BigHeroSection() {
  return (
    <div className="hidden h-[80vh] w-full items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/Homepageassets/HomepageHero.jpeg')] bg-cover bg-no-repeat px-4 pb-4 pt-3 lg:flex">
      <div className="w-full max-w-3xl pl-4 lg:pl-12">
        <h1 className="font-heading text-[2.8rem] text-white">Great people building enduring ventures</h1>
        <p className="text-xl text-white">Developing a Thriving Ecosystem for Entrepreneurs</p>
      </div>
    </div>
  );
}

function SmallHeroSection() {
  return (
    <div className="h-[80vh] w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/Homepageassets/HomepageHeroSmall.jpeg')] bg-cover bg-no-repeat px-4 pb-4 pt-3 lg:hidden">
      <div className="mt-3 max-w-2xl pb-5 pl-4">
        <h2 className="font-heading text-3xl text-white">Great people building enduring ventures</h2>
        <p className="text-xl text-white">Developing a Thriving Ecosystem for Entrepreneurs</p>
      </div>
    </div>
  );
}

const offerings = [
  {
    image: hubservices,
    title: "Hub Services",
    body: (
      <>
        Supporting your venture with{" "}
        <Link href="/growth-advisory" className="text-black no-underline">
          Growth-Advisory,{" "}
        </Link>
        <Link href="/coworking" className="text-black no-underline">
          Co-working
        </Link>{" "}
        services &amp; B2B solutions in our{" "}
        <Link href="/msme-marketplace" className="text-black no-underline">
          MSME Marketplace
        </Link>
        .
      </>
    ),
  },
  {
    image: projects,
    title: <Link href="/initiatives" className="text-black no-underline">Initiatives</Link>,
    body: "Innovate. Execute. Succeed - The Project Experience.",
  },
  {
    image: venture,
    title: <Link href="/venture-studio" className="text-black no-underline">Venture Studio</Link>,
    body: "Crafting Success: Your Idea, Our Expertise, Thriving Ventures.",
  },
];

function Service() {
  return (
    <div className="bg-[#f1f8ed] pb-12">
      <h3 className="pt-12 text-center font-heading text-purple">OFFERINGS</h3>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 pt-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {offerings.map((offer, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-[20px] bg-white text-center shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
            <Image src={offer.image} alt="" className="w-full rounded-t-[20px]" />
            <div className="px-4 pb-3">
              <h4 className="mt-4 font-heading">{offer.title}</h4>
              <p>{offer.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-[#f1f8ed] py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-4 lg:flex-row lg:justify-center">
        <div className="w-full lg:w-5/12">
          <h3 className="font-heading text-purple">ABOUT US</h3>
          <p>
            Your trusted partner in venture building, guiding startups and businesses towards sustainable growth and
            success.
          </p>
          <PillLinkButton href="/about">Who We Are</PillLinkButton>
        </div>
        <div className="w-full lg:w-5/12">
          <Image
            src={accountsteamimg}
            alt=""
            className="mx-auto block w-full rounded-[20px] shadow-[0_12px_12px_rgba(0,0,0,0.1)] lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
