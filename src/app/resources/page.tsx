import type { Metadata } from "next";
import { ResourcesNew } from "@/views/ResourcesNew/Resources";

export const metadata: Metadata = {
  title: "Resources | 8thGear Hub",
  description:
    "A knowledge center of short videos on the business model canvas, business accounting, and the Nigerian Startup Act to help you accelerate your business growth.",
};

export default function Page() {
  return <ResourcesNew />;
}
