import type { Metadata } from "next";
import { EGL } from "@/views/ProjectDelivery/Programs/EGL";

export const metadata: Metadata = {
  title: "Entrepreneurs Growth Lab | 8thGear Hub",
  description:
    "The Entrepreneurs Growth Lab is a quarterly masterclass series covering digital sales & marketing, finance and bookkeeping, and business protection & team growth for MSMEs, held at 8thGear's Lagos and Ondo locations.",
};

export default function Page() {
  return <EGL />;
}
