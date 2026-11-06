import { BUSINESS_CHECKUP_FORM_URL } from "@/lib/businessCheckup";

export function BusinessCheckupForm() {
  return (
    <div className="h-screen w-full">
      <iframe
        src={BUSINESS_CHECKUP_FORM_URL}
        className="h-full w-full border-0"
        title="Full Business Checkup"
      >
        Loading&hellip;
      </iframe>
    </div>
  );
}
