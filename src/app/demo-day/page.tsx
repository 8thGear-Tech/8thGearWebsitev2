import type { Metadata } from "next";
import { DemoDayPage } from "@/views/Events/DemoDay";

export const metadata: Metadata = {
  title: "Demo Day | 8thGear Hub",
  description:
    "8thGear Hub Demo Day is a value-packed day where startups pitch their ideas to investors and the ecosystem, and a gateway into the 8thGear Venture Studio.",
};

export default function Page() {
  return <DemoDayPage />;
}
