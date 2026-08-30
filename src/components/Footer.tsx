"use client";

import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
import logo from "@/assets/images/logo.png";

const hubServicesLinks = [
  { href: "/msme-marketplace", label: "MSME Marketplace" },
  { href: "/growth-advisory", label: "Growth Advisory" },
  { href: "/coworking", label: "Co-working" },
];

const exploreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/venture-studio", label: "Venture Studio" },
  { href: "/resources", label: "Resources & Materials" },
  { href: "/insights", label: "Insights & Publications" },
  { href: "/events", label: "Events" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/genderpolicy", label: "Gender Policy" },
];

const mobileGroups = [
  { label: "Hub Services", links: hubServicesLinks },
  { label: "Explore", links: exploreLinks },
  { label: "Legal", links: legalLinks },
];

const socials = [
  { href: "https://www.facebook.com/8thgearhub", icon: FaFacebookF, label: "Facebook" },
  { href: "https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg", icon: FaXTwitter, label: "X" },
  { href: "https://www.linkedin.com/company/8thgearhub/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.instagram.com/8thgearhub/", icon: FaInstagram, label: "Instagram" },
];

function SocialLinks() {
  return (
    <div className="flex gap-1.5">
      {socials.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-7.5 w-7.5 items-center justify-center rounded-full border border-teal/30 text-sm text-teal-dark transition-colors hover:bg-teal-dark hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

function NavLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="mb-[0.45rem] block text-[0.83rem] text-[#444] transition-colors hover:pl-1 hover:text-teal-dark"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

function AddressCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="mb-[0.4rem] rounded-[7px] border border-teal-dark/15 bg-teal-dark/5 px-[0.7rem] py-[0.45rem]">
      <div className="flex items-start gap-2">
        <FiMapPin size={11} className="mt-0.5 shrink-0 text-teal-dark" />
        <div>
          <p className="mb-[0.1rem] text-[0.71rem] font-bold leading-[1.4] text-teal-dark">{name}</p>
          <p className="m-0 text-[0.77rem] leading-[1.45] text-[#555]">{text}</p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-teal-dark/20 bg-[#F2E9EE] font-sans text-[#333]">
      <div className="mx-auto max-w-350 px-4">
        {/* Desktop */}
        <div className="hidden grid-cols-[1.2fr_1.2fr_1fr_1fr] items-start gap-0 border-b border-teal-dark/15 py-10 pb-8 lg:grid">
          <div className="pr-8">
            <Image src={logo} alt="8thGear" className="h-auto w-31.25" />
            <p className="my-[0.5rem] mb-[0.9rem] text-[0.82rem] leading-[1.65] text-[#666]">
              Your trusted partner in venture building, guiding startups and businesses towards sustainable growth
              and success, developing a thriving ecosystem for enterpreneurs
            </p>
            <SocialLinks />
          </div>

          <div className="px-8">
            <p className="mb-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">
              Our Offices
            </p>
            <AddressCard name="8thGear HQ" text="41 CMD Road, Secretariat/Magodo, Lagos State, Nigeria" />
            <AddressCard
              name="8thGear Ondo Liaison Office"
              text="Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure, Ondo State, Nigeria"
            />
            <hr className="my-[0.9rem] border-t border-teal-dark/15" />
            <p className="mb-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">
              Get in Touch
            </p>
            <div className="mb-[0.4rem] flex items-center gap-2 text-[0.82rem] text-[#444]">
              <FiPhone size={12} className="shrink-0 text-teal-dark" />
              <a href="tel:2349132462410" className="hover:text-teal-dark">
                +234 913 246 2410
              </a>
            </div>
            <div className="mb-[0.4rem] flex items-center gap-2 text-[0.82rem] text-[#444]">
              <FiMail size={12} className="shrink-0 text-teal-dark" />
              <a href="mailto:info@8thgearpartners.com" className="hover:text-teal-dark">
                info@8thgearpartners.com
              </a>
            </div>
          </div>

          <div className="px-8">
            <p className="mb-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">
              Hub Services
            </p>
            <NavLinks links={hubServicesLinks} />
            <hr className="my-[0.9rem] border-t border-teal-dark/15" />
            <p className="mb-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">
              Explore
            </p>
            <NavLinks links={exploreLinks} />
          </div>

          <div className="pl-8">
            <p className="mb-[0.7rem] text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">Legal</p>
            <NavLinks links={legalLinks} />
          </div>
        </div>

        {/* Mobile */}
        <div className="pt-6 lg:hidden">
          <Image src={logo} alt="8thGear" className="mb-3 h-auto w-30" />
          <p className="mb-4 text-[0.82rem] leading-[1.65] text-[#666]">
            Your trusted partner in venture building, guiding startups and businesses towards sustainable growth and
            success, developing a thriving ecosystem for enterpreneurs
          </p>
          <AddressCard name="8thGear HQ" text="41 CMD Road, Secretariat/Magodo, Lagos" />
          <AddressCard
            name="8thGear Ondo Liaison Office"
            text="Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure."
          />
          <div className="mt-2 flex items-center gap-2 text-[0.82rem] text-[#444]">
            <FiPhone size={12} className="text-teal-dark" />
            <a href="tel:+2349132462410">+234 913 246 2410</a>
          </div>
          <div className="mb-4 flex items-center gap-2 text-[0.82rem] text-[#444]">
            <FiMail size={12} className="text-teal-dark" />
            <a href="mailto:info@8thgearpartners.com">info@8thgearpartners.com</a>
          </div>
          <div className="mb-6">
            <SocialLinks />
          </div>

          <div className="divide-y divide-teal-dark/10 border-t border-teal-dark/10">
            {mobileGroups.map(({ label, links }) => (
              <Disclosure key={label} as="div">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between py-[0.9rem] text-[0.84rem] font-semibold text-[#333] data-[open]:text-teal-dark">
                      {label}
                      <HiChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </DisclosureButton>
                    <DisclosurePanel className="pb-4 pt-[0.4rem]">
                      <NavLinks links={links} />
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 py-[0.9rem]">
          <p className="m-0 text-[0.76rem] text-[#aaa]">© 2026 8thGear Partners Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
