import type { Metadata } from "next";
import { GIZEmployabilityGallery } from "@/views/ProjectDelivery/GIZEmployabilityGallery";

export const metadata: Metadata = {
  title: "GIZ Employability Gallery | 8thGear Hub",
  description: "Photos from the 8thGear Hub GIZ Employability Training program.",
};

export default function Page() {
  return <GIZEmployabilityGallery />;
}
