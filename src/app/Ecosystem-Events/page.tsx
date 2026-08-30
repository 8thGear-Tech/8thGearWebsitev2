import type { Metadata } from "next";
import { EcosystemEvents } from "@/views/ProjectDelivery/EcosystemEvents";

export const metadata: Metadata = {
  title: "Ecosystem Events | 8thGear Hub",
  description: "8thGear Hub's ecosystem events connecting founders, mentors, and partners across our project delivery network.",
};

export default function Page() {
  return <EcosystemEvents />;
}
