import type { Metadata } from "next";
import { AboutUs } from "@/views/WhoWeAre/AboutUs";

export const metadata: Metadata = {
  title: "About Us | 8thGear Hub & Venture Studio",
  description:
    "Learn about 8thGear Partners' mission, vision, and core values, meet our core team and Entrepreneurs in Residence, and explore how to join the 8thGear team.",
};

export default function Page() {
  return <AboutUs />;
}
