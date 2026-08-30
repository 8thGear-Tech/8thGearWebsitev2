import type { Metadata } from "next";
import { GearUpExpose } from "@/views/Events/GearUp/GearUpExpose";

export const metadata: Metadata = {
  title: "GearUp Expose | 8thGear Venture Studio",
  description:
    "GearUp Expose is a monthly virtual program equipping entrepreneurs with the skills and wisdom needed for business expansion. Registration is free.",
};

export default function Page() {
  return <GearUpExpose />;
}
