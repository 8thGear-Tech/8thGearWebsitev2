import type { Metadata } from "next";
import VideoReadMore from "@/views/Resources/VideoReadMore";

export const metadata: Metadata = {
  title: "Managed Services | 8thGear Resources",
  description: "A closer look at 8thGear's Managed Services offer and how it supports growing businesses on tech.",
};

export default function Page() {
  return <VideoReadMore />;
}
