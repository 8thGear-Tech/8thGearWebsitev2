import type { Metadata } from "next";
import { CoWorking } from "@/views/Services/CoWorking";

export const metadata: Metadata = {
  title: "Coworking | 8thGear Hub",
  description:
    "Discover 8thGear Hub's coworking spaces in Lagos — dedicated desks, virtual offices, meeting rooms, and event halls, plus the Lagos Innovates free workspace voucher programme.",
};

export default function Page() {
  return <CoWorking />;
}
