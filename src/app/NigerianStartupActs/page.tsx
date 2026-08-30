import type { Metadata } from "next";
import { NigerianStartupActsReadMore } from "@/views/Resources/ArticleReadMore";

export const metadata: Metadata = {
  title: "The Nigerian Startup Act | 8thGear Resources",
  description:
    "What the Nigerian Startup Act means for founders: how it came about, who qualifies as a startup, and the support it enables for the tech ecosystem.",
};

export default function Page() {
  return <NigerianStartupActsReadMore />;
}
