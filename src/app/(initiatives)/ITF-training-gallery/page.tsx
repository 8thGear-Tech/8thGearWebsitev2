import type { Metadata } from "next";
import { ITFTrainingGallery } from "./_components/ITFTrainingGallery";

export const metadata: Metadata = {
  title: "ITF Training Gallery | 8thGear Hub",
  description: "Photos from the 8thGear Hub ITF Training 2022 program.",
};

export default function Page() {
  return <ITFTrainingGallery />;
}
