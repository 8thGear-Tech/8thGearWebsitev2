import type { Metadata } from "next";
import { FreeDiagnosticsPage as FreeDiagnosticsPageContent } from "@/views/Services/FreeDiagnosticsPage";

export const metadata: Metadata = {
  title: "Free Founder Diagnostic | 8thGear Hub",
  description:
    "Take 8thGear's free 5-minute founder diagnostic to identify the real operational constraints holding your business back.",
};

export default function FreeDiagnosticsRoutePage() {
  return <FreeDiagnosticsPageContent />;
}
