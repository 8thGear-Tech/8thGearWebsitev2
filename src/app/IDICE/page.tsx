import type { Metadata } from "next";
import { IDICE } from "@/views/ProjectDelivery/Programs/IDICE";

export const metadata: Metadata = {
  title: "iDICE Startup Bridge Founders Lab | 8thGear Hub",
  description:
    "A 12-week capacity-building programme under the iDICE Startup Bridge initiative, helping early-stage Nigerian founders build a digital or technical business through structured milestones and funding.",
};

export default function Page() {
  return <IDICE />;
}
