import type { Metadata } from "next";
import { FourthYearAnniversaryPage } from "@/views/Events/FourthYearAnniversary";

export const metadata: Metadata = {
  title: "4th Year Anniversary | 8thGear Hub",
  description: "Photos and videos celebrating 8thGear Hub's 4th year anniversary with the community it has built.",
};

export default function Page() {
  return <FourthYearAnniversaryPage />;
}
