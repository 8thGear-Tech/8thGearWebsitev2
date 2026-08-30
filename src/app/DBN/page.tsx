import type { Metadata } from "next";
import { DBN } from "@/views/ProjectDelivery/Programs/DBN";

export const metadata: Metadata = {
  title: "DBN Entrepreneurship Training Programme | 8thGear Hub",
  description:
    "The DBN Entrepreneurship Training Programme 2026, in partnership with the Development Bank of Nigeria, equips MSMEs in Ondo and Lagos States with financial readiness, funding access, and a ₦100,000,000 pitch competition.",
};

export default function Page() {
  return <DBN />;
}
