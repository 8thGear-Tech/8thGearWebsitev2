import type { Metadata } from "next";
import { EventsGalleryPage } from "@/views/Events/EventsGallery";

export const metadata: Metadata = {
  title: "Events Gallery | 8thGear Hub",
  description: "Watch video highlights from 8thGear Hub's ecosystem events, founder programs, and community sessions.",
};

export default function Page() {
  return <EventsGalleryPage />;
}
