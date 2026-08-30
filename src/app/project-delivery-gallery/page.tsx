import type { Metadata } from "next";
import { ProjectDeliveryGallery } from "@/views/ProjectDelivery/ProjectDeliveryGallery";

export const metadata: Metadata = {
  title: "Project Delivery Gallery | 8thGear Hub",
  description: "Photos and videos from 8thGear Hub's project delivery engagements across our partner programs.",
};

export default function Page() {
  return <ProjectDeliveryGallery />;
}
