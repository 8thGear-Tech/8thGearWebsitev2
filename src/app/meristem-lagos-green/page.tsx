import type { Metadata } from "next";
import { MeristemGreenLagos } from "@/views/ProjectDelivery/Programs/Meristem";

export const metadata: Metadata = {
  title: "MIRE Meristem | 8thGear Hub",
  description:
    "MIRE Meristem is an accelerator transforming 30 entrepreneurs into investment-ready founders through milestone-driven acceleration, in partnership with More by Meristem.",
};

export default function Page() {
  return <MeristemGreenLagos />;
}
