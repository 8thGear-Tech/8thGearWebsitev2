import type { Metadata } from "next";
import { GearUpShowcase } from "@/views/Events/GearUp/GearUpShowcase";

export const metadata: Metadata = {
  title: "GearUp Showcase | 8thGear Venture Studio",
  description:
    "GearUp Showcase is a monthly virtual event where an 8thGear Venture Studio business presents to community leaders and members for exposure. Registration is free.",
};

export default function Page() {
  return <GearUpShowcase />;
}
