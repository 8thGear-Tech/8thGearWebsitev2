import type { Metadata } from "next";
import { BDandVentureStudioOfficer } from "@/views/Careers/BDandVentureStudioOfficer";

export const metadata: Metadata = {
  title: "Business Development/Venture Studio Officer | Careers at 8thGear",
  description:
    "Join 8thGear as a Business Development/Venture Studio Officer. View the full job description, responsibilities, and required competencies.",
};

export default function Page() {
  return <BDandVentureStudioOfficer />;
}
