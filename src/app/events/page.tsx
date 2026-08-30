import type { Metadata } from "next";
import { EventsNew } from "@/views/Events/EventsNew";

export const metadata: Metadata = {
  title: "Events | 8thGear Hub",
  description:
    "See what's on at 8thGear Hub: our events calendar, major ecosystem events like Founders Meetup and Demo Day, and photo galleries from past events across Nigeria.",
};

export default function EventsPage() {
  return <EventsNew />;
}
