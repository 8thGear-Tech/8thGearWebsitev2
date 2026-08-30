import type { Metadata } from "next";
import { MSMEMarketplace } from "@/views/Services/MSMEMarketplace/MSMEMarketplace";

export const metadata: Metadata = {
  title: "MSME Marketplace | 8thGear Hub",
  description:
    "Browse the 8thGear MSME Marketplace for vetted B2B tools and services — legal, financial, talent, connectivity, and software solutions from trusted partners like LegalMo, Trulance, Finamo, TalenMo, MTN Business, and Zoho.",
};

export default function Page() {
  return <MSMEMarketplace />;
}
