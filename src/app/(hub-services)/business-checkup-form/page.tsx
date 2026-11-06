import type { Metadata } from "next";
import { BusinessCheckupForm } from "./_components/BusinessCheckupForm";

export const metadata: Metadata = {
  title: "Full Business Checkup Form | 8thGear Hub",
  description: "Fill out 8thGear's Full Business Checkup form to get started with a business health assessment.",
};

export default function BusinessCheckupFormPage() {
  return <BusinessCheckupForm />;
}
