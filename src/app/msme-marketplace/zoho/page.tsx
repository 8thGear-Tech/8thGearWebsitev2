import type { Metadata } from "next";
import { ZohoLandingPage } from "@/views/Services/MSMEMarketplace/ZohoLandingPage";

export const metadata: Metadata = {
  title: "Zoho for Nigerian Businesses | 8thGear Hub",
  description:
    "Run your business on Zoho with 8thGear, an authorized Zoho partner in Nigeria. Naira pricing, local support, and expert onboarding for Zoho One, CRM, Books, SalesIQ, Commerce, and Campaigns.",
};

export default function Page() {
  return <ZohoLandingPage />;
}
