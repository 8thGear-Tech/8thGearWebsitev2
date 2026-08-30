import type { Metadata } from "next";
import { MigrantAdvisoryDesk } from "@/views/ProjectDelivery/Programs/MigrantAdvisoryDesk";

export const metadata: Metadata = {
  title: "Migrant Advisory Desk | 8thGear Hub",
  description:
    "The Migrant Advisory Desk (m.A.D), developed by GIZ and implemented by 8thGear, offers migration counselling, career guidance, skills training, and talent placement for youth and MSMEs in Lagos.",
};

export default function Page() {
  return <MigrantAdvisoryDesk />;
}
