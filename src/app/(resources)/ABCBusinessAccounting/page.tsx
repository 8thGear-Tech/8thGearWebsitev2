import type { Metadata } from "next";
import { ABCBusinessAccountingReadMore } from "@/app/(resources)/_components/ArticleReadMore";

export const metadata: Metadata = {
  title: "ABC of Business Accounting | 8thGear Resources",
  description:
    "Why every founder needs a notebook: the basics of recording transactions, keeping bank statements, invoices, and schedules that make your books audit-ready.",
};

export default function Page() {
  return <ABCBusinessAccountingReadMore />;
}
