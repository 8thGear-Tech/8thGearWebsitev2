import type { Metadata } from "next";
import { PrivacyAndPolicy } from "@/views/PrivacyAndPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | 8thGear Partners",
  description:
    "Read 8thGear Partners Limited's Privacy Policy to learn how we collect, use, disclose, and safeguard your information.",
};

export default function Page() {
  return <PrivacyAndPolicy />;
}
