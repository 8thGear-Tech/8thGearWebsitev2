import type { Metadata } from "next";
import { KeepingAccountingRecordsReadMore } from "@/app/(resources)/_components/ArticleReadMore";

export const metadata: Metadata = {
  title: "Keeping Accounting Records | 8thGear Resources",
  description:
    "Why entrepreneurs need to keep proper accounting records from day one, and the basic spreadsheet habits that make it easy to measure your business's progress.",
};

export default function Page() {
  return <KeepingAccountingRecordsReadMore />;
}
