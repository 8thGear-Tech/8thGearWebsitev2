import type { Metadata } from "next";
import { FoundersMeetupGallery2023Page } from "@/views/Events/FoundersMeetupGallery2023";

export const metadata: Metadata = {
  title: "Founders Meetup Gallery 2023 | 8thGear Hub",
  description: "Photo gallery from 8thGear Hub's Founders Meetup Q1 2023 event.",
};

export default function Page() {
  return <FoundersMeetupGallery2023Page />;
}
