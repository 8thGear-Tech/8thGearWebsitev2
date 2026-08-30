import type { Metadata } from "next";
import { InnkeeperHackathonGallery } from "@/views/ProjectDelivery/InnkeeperHackathonGallery";

export const metadata: Metadata = {
  title: "Innkeeper Hackathon Gallery | 8thGear Hub",
  description: "Photos from the 8thGear Hub Innkeeper Hackathon 2022.",
};

export default function Page() {
  return <InnkeeperHackathonGallery />;
}
