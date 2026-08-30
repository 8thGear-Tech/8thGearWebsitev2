import type { Metadata } from "next";
import { LSETFGallery } from "@/views/ProjectDelivery/LSETFGallery";

export const metadata: Metadata = {
  title: "LSETF Gallery | 8thGear Hub",
  description: "Photos and videos from the 8thGear Hub USADF/LSETF Training program.",
};

export default function Page() {
  return <LSETFGallery />;
}
