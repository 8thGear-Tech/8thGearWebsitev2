import type { Metadata } from "next";
import { InitiativesSection } from "@/views/Initiatives/Initiative";

export const metadata: Metadata = {
  title: "Initiatives | 8thGear Hub",
  description:
    "Explore 8thGear Hub's enterprise support and talent development initiatives — DBN capacity building workshops, Digital Skills for Entrepreneurs, GIZ-DTC digital innovation programmes, and more, driving measurable impact across Southwest Nigeria.",
};

export default function Page() {
  return <InitiativesSection />;
}
