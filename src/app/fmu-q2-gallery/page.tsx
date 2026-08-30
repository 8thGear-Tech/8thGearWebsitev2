import type { Metadata } from "next";
import { FMUQ2 } from "@/views/EventsNew/FMUQ2";

export const metadata: Metadata = {
  title: "Founders Meetup Q2 2024 Gallery | 8thGear Hub",
  description: "Photo gallery from the 8thGear Hub Founders Meetup, Q2 2024 edition.",
};

export default function Page() {
  return <FMUQ2 />;
}
