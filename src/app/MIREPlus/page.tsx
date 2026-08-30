import type { Metadata } from "next";
import { MIREPlus } from "@/views/ProjectDelivery/Programs/MIREPlus";

export const metadata: Metadata = {
  title: "MIRE Plus Funding Programme | 8thGear Hub",
  description:
    "MIRE Plus gives high-potential entrepreneurs in Lagos, Ibadan and southwest Nigeria up to ₦5,000,000 in funding support, hands-on workshops, debt & equity access, and a Demo Day pitch to investors.",
};

export default function Page() {
  return <MIREPlus />;
}
