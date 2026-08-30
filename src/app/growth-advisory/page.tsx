import type { Metadata } from "next";
import { GrowthAsAService } from "@/views/Services/GaaS";

export const metadata: Metadata = {
  title: "Growth-as-a-Service | 8thGear Hub",
  description:
    "8thGear's Growth-as-a-Service (GaaS) offers tailored advisory, networking, growth strategy, and deal management support to help your business scale.",
};

export default function GrowthAdvisoryPage() {
  return <GrowthAsAService />;
}
