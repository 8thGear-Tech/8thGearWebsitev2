import type { Metadata } from "next";
import { FMUQ3 } from "@/views/EventsNew/FMUQ3";

export const metadata: Metadata = {
  title: "Founders Meetup Q3 2024 Gallery | 8thGear Hub",
  description: "Photo gallery from the 8thGear Hub Founders Meetup, Q3 2024 edition.",
};

export default function Page() {
  return <FMUQ3 />;
}
