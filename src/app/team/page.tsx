import type { Metadata } from "next";
import { TeamPage } from "@/views/WhoWeAre/TeamPage";

export const metadata: Metadata = {
  title: "Our Team | 8thGear Hub & Venture Studio",
  description:
    "Meet the 8thGear core team and advisory board driving our mission to build a thriving ecosystem for entrepreneurs across Africa.",
};

export default function Page() {
  return <TeamPage />;
}
