import type { Metadata } from "next";
import { ThreeMTT } from "@/views/ProjectDelivery/Programs/ThreeMTT";

export const metadata: Metadata = {
  title: "3MTT Talent Pipeline for MSMEs | 8thGear Hub",
  description:
    "Access job-ready AI and Data Science talent from Nigeria's 3 million Technical Talent (3MTT) programme through 8thGear, or apply as an aspiring tech professional for free, government-certified training.",
};

export default function Page() {
  return <ThreeMTT />;
}
