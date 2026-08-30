import type { Metadata } from "next";
import { GenderPolicy } from "@/views/GenderPolicy";

export const metadata: Metadata = {
  title: "Gender Policy | 8thGear Hub & Venture Studio",
  description:
    "8thGear Hub & Venture Studio's Gender Policy Statement outlines our commitment to gender equality and an inclusive, harassment-free workplace.",
};

export default function Page() {
  return <GenderPolicy />;
}
