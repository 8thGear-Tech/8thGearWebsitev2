import type { Metadata } from "next";
import { FoundersMeetupGalleryPage } from "@/views/Events/FoundersMeetupGallery";

export const metadata: Metadata = {
  title: "Founders Meetup Gallery | 8thGear Hub",
  description: "Photo gallery from 8thGear Hub's Founders Meetup Q4 2022 event.",
};

export default function Page() {
  return <FoundersMeetupGalleryPage />;
}
