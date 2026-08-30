import type { Metadata } from "next";
import { TalentDevelopment } from "@/views/ProjectDelivery/TalentDevelopment";

export const metadata: Metadata = {
  title: "Talent Development | 8thGear Hub",
  description:
    "8thGear Hub's Talent Development and Employment services: skills assessments, training programs, mentorship, and coaching for individuals and organizations.",
};

export default function Page() {
  return <TalentDevelopment />;
}
