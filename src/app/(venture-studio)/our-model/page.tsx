import type { Metadata } from "next";
import { OurModelPage } from "./_components/OurModelPage";

export const metadata: Metadata = {
  title: "Our Model | 8thGear Hub Venture Studio",
  description:
    "See how 8thGear's venture studio takes ideas from ideation through validation, creation, spinout, and scale-up to build default-alive, enduring ventures.",
};

export default function Page() {
  return <OurModelPage />;
}
