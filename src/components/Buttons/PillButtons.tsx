import Link from "next/link";
import type { ReactNode } from "react";

const pillClasses =
  "inline-flex h-10 items-center justify-center rounded-full border-[3px] border-purple px-6 font-heading text-base font-medium text-black transition-colors hover:bg-purple hover:text-white focus:bg-purple focus:text-white";

export function JointheStudioBtn() {
  return (
    <a
      href="https://docs.google.com/forms/d/16LIqDM_6FSIPNuT7HLL1liAOTy2wqQO8eYkkaljA8_A/edit"
      target="_blank"
      rel="noopener noreferrer"
      className={`${pillClasses} w-56`}
    >
      Join the Studio
    </a>
  );
}

export function JointheTeamBtn() {
  return (
    <a
      href="https://forms.gle/nVJCg8PsMhw1VGFu7"
      target="_blank"
      rel="noopener noreferrer"
      className={`${pillClasses} w-44`}
    >
      Join the Team
    </a>
  );
}

export function HomeBtn() {
  return (
    <Link href="/" className={`${pillClasses} w-24`}>
      Home
    </Link>
  );
}

export function PillLinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={pillClasses}>
      {children}
    </Link>
  );
}

export function PillExternalLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${pillClasses} ${className}`}>
      {children}
    </a>
  );
}
