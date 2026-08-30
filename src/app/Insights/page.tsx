import type { Metadata } from "next";
import { Insights } from "@/views/Insights/Insights";

export const metadata: Metadata = {
  title: "Insights and News | 8thGear Hub",
  description:
    "Informed articles, news, and blogs from 8thGear Hub on startup growth, business efficiency, and the Nigerian entrepreneurship ecosystem.",
};

export default function Page() {
  return <Insights />;
}
