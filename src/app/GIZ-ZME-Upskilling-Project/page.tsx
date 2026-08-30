import type { Metadata } from "next";
import { UpskillingProject } from "@/views/ProjectDelivery/Programs/UpskillingProject";

export const metadata: Metadata = {
  title: "GIZ/ZME Upskilling Programme | 8thGear Hub",
  description:
    "The GIZ/ZME Upskilling Programme, implemented by 8thGear, trains young people in Lagos in in-demand digital skills, giving businesses a pipeline of job-ready tech talent to hire and upskill.",
};

export default function Page() {
  return <UpskillingProject />;
}
