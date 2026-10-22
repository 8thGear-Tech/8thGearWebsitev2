import type { Metadata } from "next";
import { FounderMeetupPage } from "./_components/FoundersMeetup";

export const metadata: Metadata = {
  title: "Founders Meetup | 8thGear Hub",
  description:
    "Founders Meetup is 8thGear Hub's quarterly event bringing entrepreneurs together to connect with co-founders, meet potential clients, and grow their network.",
};

export default function Page() {
  return <FounderMeetupPage />;
}
