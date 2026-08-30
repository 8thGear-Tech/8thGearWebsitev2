import type { Metadata } from "next";
import { FreeDiagnosticsForm } from "@/views/Services/FreeDiagnosticsForm";

export const metadata: Metadata = {
  title: "Free Diagnostics Form | 8thGear Hub",
  description: "Fill out 8thGear's Free Diagnostics form to get started with a business health assessment.",
};

export default function FreeDiagnosticsFormPage() {
  return <FreeDiagnosticsForm />;
}
