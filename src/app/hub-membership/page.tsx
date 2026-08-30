import type { Metadata } from "next";
import { HubMembership } from "@/views/Services/HubMembership";

export const metadata: Metadata = {
  title: "Hub Membership | 8thGear Hub",
  description:
    "Join 8thGear Hub's membership program for access to coworking, growth advisory, and a thriving community of entrepreneurs.",
};

export default function Page() {
  return <HubMembership />;
}
