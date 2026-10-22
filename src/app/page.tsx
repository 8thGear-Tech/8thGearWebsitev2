import type { Metadata } from "next";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { AboutSection } from "./_components/AboutSection";
import { BigHeroSection } from "./_components/BigHeroSection";
import { Service } from "./_components/Service";
import { SmallHeroSection } from "./_components/SmallHeroSection";
import { SpotlightSection } from "./_components/SpotlightSection";

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
