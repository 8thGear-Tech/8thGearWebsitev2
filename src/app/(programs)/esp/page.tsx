import type { Metadata } from "next";
import { LSETF } from "./_components/LSETF";

export const metadata: Metadata = {
  title: "LSETF/GIZ Employability Support Programme | 8thGear Hub",
  description:
    "The LSETF/GIZ Employability Support Programme is a 4-week hands-on training in Content Creation, Growth Hacking, and Digital Marketing, followed by a 3-month internship, for Lagos residents aged 18-40.",
};

export default function Page() {
  return <LSETF />;
}
