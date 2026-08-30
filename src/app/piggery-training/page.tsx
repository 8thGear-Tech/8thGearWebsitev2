import type { Metadata } from "next";
import { PiggeryTrainingGallery } from "@/views/ProjectDelivery/PiggeryTrainingGallery";

export const metadata: Metadata = {
  title: "Piggery Training Gallery | 8thGear Hub",
  description: "Photos from the 8thGear Hub GIZ Piggery Training program.",
};

export default function Page() {
  return <PiggeryTrainingGallery />;
}
