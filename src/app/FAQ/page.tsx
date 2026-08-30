import type { Metadata } from "next";
import FAQ from "@/views/FAQ";

export const metadata: Metadata = {
  title: "FAQs | 8thGear Partners",
  description:
    "Frequently asked questions about 8thGear's Hub Services, Impact Projects, Venture Studio, and Builders Collective.",
};

export default function Page() {
  return <FAQ />;
}
