import type { ReactNode } from "react";

/**
 * The white pill "Apply Now" CTA (CRA app's `.aboutbtn` class from
 * src/sassfiles/pages/_home.scss: white bg, purple bg on hover) shared by the
 * MIREPlus and YDOS program pages. `pulse` adds the attention-grabbing
 * pulsing animation used on their "who is this for" cards.
 */
export function ApplyButton({
  href,
  children,
  pulse = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-lg bg-white px-6 py-2.5 text-center font-semibold text-purple shadow-[0_8px_15px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-purple hover:text-white hover:shadow-lg ${
        pulse ? "[animation:pulse-pop_2s_ease-in-out_infinite_alternate]" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
