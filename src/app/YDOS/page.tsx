import type { Metadata } from "next";
import { YDOS } from "@/views/ProjectDelivery/Programs/YDOS/YDOS";

export const metadata: Metadata = {
  title: "YDOS Open Innovation Challenge | 8thGear Hub",
  description:
    "YDOS 2026, an open innovation challenge by 8thGear Hub & Venture Studio and LEAP Africa for young Lagos innovators aged 18-35, offering mentorship, design thinking training, and up to ₦500,000 in business support.",
};

export default function Page() {
  return <YDOS />;
}
