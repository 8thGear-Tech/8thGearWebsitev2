import type { Metadata } from "next";
import VideoDetail from "@/views/Resources/VideoCategory";

export const metadata: Metadata = {
  title: "Business Model Canvas Videos | 8thGear Resources",
  description:
    "Nine short videos walking through every block of the Business Model Canvas, from value proposition to revenue streams.",
};

export default function Page() {
  return <VideoDetail />;
}
