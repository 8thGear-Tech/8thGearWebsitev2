import type { ReactNode } from "react";

/**
 * Shared shell for the mostly-static legal/policy pages (privacy policy, terms and
 * conditions, refund policy, gender policy). Mirrors the CRA app's
 * `.PrivacyAndPolicyHero` / `.PrivacyAndPolicyP` / `.privatePolicyBody` styling
 * (see src/sassfiles/components/hero/_bgColorandTextHero.scss in the source repo).
 */
export function LegalPageLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="bg-[#f7f7f7] px-4 py-10 lg:px-12">
        <div className="mx-auto max-w-350">
          <h3 className="text-center font-heading text-[rgba(0,0,0,0.9)] lg:text-left">{title}</h3>
        </div>
      </div>
      <div
        className="mx-auto mt-10 max-w-350 px-4 pb-16 text-justify text-[15px] leading-[30px] text-black
          max-[405px]:text-center
          [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:font-heading
          [&_h4]:mt-10 [&_h4]:mb-3 [&_h4]:font-heading
          [&_h5]:mt-8 [&_h5]:mb-3 [&_h5]:font-heading
          [&_p]:mb-4
          [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6
          [&_li]:my-1 [&_li]:text-left
          [&_a]:text-purple [&_a]:underline"
      >
        {children}
      </div>
    </div>
  );
}
