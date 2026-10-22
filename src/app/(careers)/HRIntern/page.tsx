import type { Metadata } from "next";
import { HRIntern } from "./_components/HRIntern";

export const metadata: Metadata = {
  title: "HR Intern | Careers at 8thGear",
  description:
    "Join 8thGear as an HR Intern. View the full job description, responsibilities, and required competencies.",
};

export default function Page() {
  return <HRIntern />;
}
