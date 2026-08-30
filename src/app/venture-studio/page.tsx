import type { Metadata } from "next";
import { VentureStudio } from "@/views/VentureStudio/VentureStudio";

export const metadata: Metadata = {
  title: "Venture Studio | 8thGear Hub",
  description:
    "8thGear's Venture Studio partners with founders to design, build, and scale enduring ventures from idea to spinout.",
};

export default function Page() {
  return <VentureStudio />;
}
