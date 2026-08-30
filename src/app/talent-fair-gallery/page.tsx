import type { Metadata } from "next";
import { TalentFair24 } from "@/views/EventsNew/TalentFair24";

export const metadata: Metadata = {
  title: "Talent Fair 2024 Gallery | 8thGear Hub",
  description: "Photo gallery from the 8thGear Hub Talent Fair, 2024 edition.",
};

export default function Page() {
  return <TalentFair24 />;
}
