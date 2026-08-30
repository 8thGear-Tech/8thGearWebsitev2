import type { Metadata } from "next";
import { DemoDayGalleryPage } from "@/views/Events/DemoDayGallery";

export const metadata: Metadata = {
  title: "Demo Day Gallery | 8thGear Hub",
  description: "Photos and videos from past 8thGear Hub Demo Day events, where portfolio startups pitched to investors and the ecosystem.",
};

export default function Page() {
  return <DemoDayGalleryPage />;
}
