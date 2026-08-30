import type { Metadata } from "next";
import { FMUQ1 } from "@/views/EventsNew/FMUQ1";

export const metadata: Metadata = {
  title: "Founders Meetup Q1 2024 Gallery | 8thGear Hub",
  description: "Photo gallery from the 8thGear Hub Founders Meetup, Q1 2024 edition.",
};

export default function Page() {
  return <FMUQ1 />;
}
