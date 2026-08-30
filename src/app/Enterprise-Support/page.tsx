import type { Metadata } from "next";
import { EnterpriseSupport } from "@/views/ProjectDelivery/EnterpriseSupport";

export const metadata: Metadata = {
  title: "Enterprise Support | 8thGear Hub",
  description:
    "8thGear Hub's Business Enterprise Support program: funding access, mentorship, and networking opportunities to help MSMEs grow and thrive.",
};

export default function Page() {
  return <EnterpriseSupport />;
}
