import type { Metadata } from "next";
import { RefundPolicy } from "@/views/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | 8thGear Partners",
  description: "Learn about 8thGear Partners Limited's refund eligibility, request process, and approval terms.",
};

export default function Page() {
  return <RefundPolicy />;
}
