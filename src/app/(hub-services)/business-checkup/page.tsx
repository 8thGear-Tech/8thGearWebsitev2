import type { Metadata } from "next";
import { BusinessCheckupPage as BusinessCheckupPageContent } from "./_components/BusinessCheckupPage";

export const metadata: Metadata = {
  title: "Full Business Checkup | 8thGear Hub",
  description:
    "Take 8thGear's free 5-minute Full Business Checkup to identify the real operational constraints holding your business back.",
};

export default function BusinessCheckupRoutePage() {
  return <BusinessCheckupPageContent />;
}
