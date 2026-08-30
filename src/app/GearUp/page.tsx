import type { Metadata } from "next";
import { GearUp } from "@/views/ProjectDelivery/Programs/GearUp";

export const metadata: Metadata = {
  title: "GearUp Incubation Program | 8thGear Hub",
  description:
    "The GearUp Incubation Program is a 4-month launchpad for early-stage healthcare entrepreneurs in Southwest Nigeria, offering mentorship, investor networks, and hands-on business-building support.",
};

export default function Page() {
  return <GearUp />;
}
