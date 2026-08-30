"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import logo from "@/assets/images/logos.png";
import { JointheStudioBtn } from "@/components/Buttons/PillButtons";

const hubServicesLinks = [
  { href: "/free-diagnostics", label: "Free Diagnostics" },
  { href: "/msme-marketplace", label: "MSME Marketplace" },
  { href: "/growth-advisory", label: "Growth Advisory" },
  { href: "/coworking", label: "Coworking" },
  {
    href: "https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK",
    label: "Community",
    external: true,
  },
];

const programsLinks = [
  { href: "/MIREPlus", label: "MIRE+ (Investment Readiness)" },
  { href: "/entrepreneurs-growth-lab", label: "EGL (Entrepreneurs Growth Lab)" },
  { href: "/hub-membership", label: "Hub Membership" },
  { href: "/GearUp", label: "GearUp Incubation" },
  { href: "/meristem-lagos-green", label: "Meristem Lagos Green" },
  { href: "/IDICE", label: "BOI/iDICE Startup Bridge" },
  { href: "/DBN", label: "DBN/ETP (Workshops & Grants)" },
  { href: "/migrant-advisory-desk", label: "8thGear Job Center (Advisory Desk)" },
  { href: "/DeepTech_DSN_Google", label: "DeepTech Upskilling (DSN/Google)" },
  { href: "/YDOS", label: "Youth Day of Service (YDOS)" },
];

const primaryLinks = [
  { href: "/initiatives", label: "Initiatives" },
  { href: "/venture-studio", label: "Venture Studio" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-[var(--banner-height,0px)] z-[999] w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-350 items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="" width={60} height={70} className="inline-block h-17.5 w-15" />
          <span className="font-heading text-base ">8thGear Hub</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavDropdown label="Hub Services" links={hubServicesLinks} />
          <Link href="/initiatives" className="text-sm text-primary hover:text-purple">
            Initiatives
          </Link>
          <NavDropdown label="Programs" links={programsLinks} />
          <Link href="/venture-studio" className="text-sm text-primary hover:text-purple">
            Venture Studio
          </Link>
          <Link href="/about" className="text-sm text-primary hover:text-purple">
            About Us
          </Link>
          <Link href="/events" className="text-sm text-primary hover:text-purple">
            Events
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
        >
          <HiOutlineMenu className="h-8 w-8 text-primary" />
        </button>
      </div>

      <Dialog open={mobileOpen} onClose={setMobileOpen} className="relative z-[1200] md:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-brand-lg">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm text-primary">
              ← Home
            </Link>
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <HiOutlineX className="h-6 w-6 text-primary" />
            </button>
          </div>

          <MobileGroup label="Hub Services" links={hubServicesLinks} onNavigate={() => setMobileOpen(false)} />
          <Link
            href="/initiatives"
            onClick={() => setMobileOpen(false)}
            className="mb-4 block text-lg font-light text-primary"
          >
            Initiatives
          </Link>
          <MobileGroup label="Programs" links={programsLinks} onNavigate={() => setMobileOpen(false)} />

          {primaryLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="mb-4 block text-lg font-light text-primary"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2">
            <JointheStudioBtn />
          </div>

          <div className="mt-10 flex justify-center gap-6 text-2xl text-primary">
            <a href="https://www.facebook.com/8thgearhub" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/8thgearhub/" rel="noopener noreferrer" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/8thgearhub/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:info@8thgearpartners.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}

function NavDropdown({ label, links }: { label: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-1 text-sm text-primary hover:text-purple focus:outline-none">
        {label}
        <HiChevronDown className="h-3.5 w-3.5" />
      </PopoverButton>
      <PopoverPanel
        className="absolute left-0 top-full z-[1000] mt-2 min-w-65 rounded-lg border border-grey-border bg-white py-2 shadow-brand-md"
      >
        {({ close }) => (
          <>
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => close()}
                  className="block px-4 py-2 text-[13px] text-primary hover:bg-grey-bg hover:text-purple"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => close()}
                  className="block px-4 py-2 text-[13px] text-primary hover:bg-grey-bg hover:text-purple"
                >
                  {link.label}
                </Link>
              ),
            )}
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}

function MobileGroup({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: { href: string; label: string; external?: boolean }[];
  onNavigate: () => void;
}) {
  return (
    <Disclosure as="div" className="mb-4">
      <DisclosureButton className="flex w-3/4 items-center justify-between text-lg font-light text-primary">
        {label}
        <HiChevronDown className="h-4 w-4" />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2 rounded-lg bg-grey-bg p-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="block border-b border-grey-border pb-2 text-[13px] text-primary last:border-b-0"
          >
            {link.label}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

