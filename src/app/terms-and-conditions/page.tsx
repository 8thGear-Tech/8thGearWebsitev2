import type { Metadata } from "next";
import { TermsAndConditions } from "@/views/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms and Conditions | 8thGear Partners",
  description: "Read the terms and conditions that govern your use of 8thGear Partners Limited's services.",
};

export default function Page() {
  return <TermsAndConditions />;
}
