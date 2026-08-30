import type { Metadata } from "next";
import { AccountingIntern } from "@/views/Careers/AccountingIntern";

export const metadata: Metadata = {
  title: "Accounting Intern | Careers at 8thGear",
  description:
    "Join 8thGear as an Accounting Intern. View the full job description, responsibilities, and required competencies.",
};

export default function Page() {
  return <AccountingIntern />;
}
