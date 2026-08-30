import type { Metadata } from "next";
import { TalentPlacement } from "@/views/Services/TalentPlacement";

export const metadata: Metadata = {
  title: "Talent Placement | 8thGear Hub",
  description:
    "Hire vetted tech talent through 8thGear's full-cycle recruitment, internship placement, and CV screening services.",
};

export default function TalentPlacementPage() {
  return <TalentPlacement />;
}
