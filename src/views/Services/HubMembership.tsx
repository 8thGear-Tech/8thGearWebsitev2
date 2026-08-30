import Image from "next/image";
import sectionOneImg from "@/assets/images/BuildersCollective/sectionOneImage.jpg";
import memberShipImg from "@/assets/images/BuildersCollective/membersSection.jpg";
import memberShipImgSM from "@/assets/images/BuildersCollective/memberSectionSM.jpg";

const MEMBER_FORM_URL = "https://forms.gle/WJEYcDTdFkgZ6rwUA";

const portCos = [
  { label: "Innkeeper Talent Accelerator", href: "https://innkeeper.work/" },
  { label: "Haven Edu-Services", href: "https://www.haveneduservices.com/" },
  { label: "DigiPlus Connect Café" },
  { label: "TruLance", href: "https://www.trulance.io/" },
  { label: "Everything Meat" },
  { label: "LegalMo", href: "https://www.legalmo.biz/" },
  { label: "FinaMo", href: "https://finamo.biz/" },
  { label: "TalenMo" },
];

const benefits = [
  <>
    <span className="font-bold">Accountability services</span> - Monthly growth metrics tracking support.
  </>,
  <>
    <span className="font-bold">5% affiliate discounts across our co-working,</span>{" "}
    <span className="font-bold">talent placement</span> and <span className="font-bold">growth strategy</span>{" "}
    services.
  </>,
  <>
    <span className="font-bold">Priority booking access to training rooms</span>, meeting rooms, co-working and
    private office spaces.
  </>,
  "Access to ecosystem-evolving opportunities and enterprise development content.",
  "Opportunity to be a part of our supportive community and attend 8thGear events.",
  <>
    <span className="font-bold">Special in-house sessions and programs</span> designed to accelerate your
    company&apos;s growth.
  </>,
];

export function HubMembership() {
  return (
    <div>
      <HeroSection />
      <SectionOne />
      <Banner />
      <MembershipSection />
      <BecomeAPortCo />
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center bg-[url('/images/BuildersCollective/Herobg.jpg')] bg-cover bg-center px-4 opacity-90"
    >
      <div className="max-w-3xl text-center text-white">
        <h2 className="font-heading text-2xl [text-shadow:4px_4px_6px_rgba(0,0,0,0.5)] md:text-4xl">
          Unlock the Power of collaboration and Innovation with the 8thGear Hub Membership!
        </h2>
        <a
          href={MEMBER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-purple"
        >
          Become a Member
        </a>
      </div>
    </div>
  );
}

function SectionOne() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <h3 className="text-purple">Why Join the 8thGear Hub Membership?</h3>
          <p>
            It is an established fact that entrepreneurs do well when they are journeying with people who are also
            buiding. Only entrepreneurs know how to support and give comfort to other entrepreneurs and that is the
            reason why the Hub Membership exist.
          </p>
        </div>
        <Image src={sectionOneImg} alt="Hub Membership" className="w-full max-w-sm rounded-lg lg:w-1/3" />
      </div>
      <p className="mt-4">
        First and foremost, to provide that sounding board, that accountability that every entrepreneur needs to
        continue to push until they get to their final destination. See the services that our Hub Membership offers
        below and join this group of forward-thinking entrepreneurs today!
      </p>
    </div>
  );
}

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f9fff5] px-4 py-12 text-center">
      <h3 className="text-purple">Join the 8thGear Community &ndash; It&apos;s Free!</h3>
      <p className="max-w-xl">
        Become part of a vibrant, no-cost community where entrepreneurs come together to create, innovate, and
        elevate their ventures.
      </p>
      <a
        href="https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-[150px] rounded-full border border-purple bg-white px-4 py-2 text-purple"
      >
        Join Us Now!
      </a>
    </div>
  );
}

function MembershipSection() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12">
      <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
        <div className="lg:w-7/12">
          <h4 className="hidden text-center text-purple lg:block">Hub Membership</h4>
          <p>
            Join the 8thGear Hub Membership to unlock a premium tier designed to accelerate your business growth
            through exclusive access to enhanced benefits, resources, and curated opportunities. The membership
            begins with a <span className="font-bold">registration fee of &#8358;20,000</span>, followed by a
            subscription of <span className="font-bold">&#8358;150,000 quarterly</span>.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            {benefits.map((benefit, i) => (
              <li key={i} className="leading-4">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-5/12">
          <Image src={memberShipImg} alt="Membership Section" className="mx-1 hidden w-full rounded-lg lg:block" />
          <Image src={memberShipImgSM} alt="Membership Section" className="mx-1 block w-full rounded-lg lg:hidden" />
          <h4 className="mt-4 text-center text-purple lg:hidden">8thGear Hub Membership</h4>
        </div>
      </div>
      <div className="pt-8 text-center">
        <a
          href={MEMBER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-purple bg-white px-6 py-2 text-purple"
        >
          Become a Member
        </a>
      </div>
    </div>
  );
}

function BecomeAPortCo() {
  return (
    <div className="bg-[#f9fff5] px-4 py-12">
      <h3 className="mb-6 text-center text-purple">Become a Portfolio Company</h3>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/2">
          <p>
            For those with high-potential business ideas, 8thGear offers the opportunity to become a Portfolio
            Company (PortCo). As a PortCo, you&apos;ll receive unparalleled support to turn your idea into a
            thriving business.
          </p>
          <p className="mt-4">
            8thGear operates as a corporate co-founder journeying with you ans as such, will require 30-90% equity in
            the business, depending on the level of 8thGear&rsquo;s involvement and resources to be contributed. This
            ensures that we are fully invested in your success and committed to seeing your venture scale and
            succeed.
          </p>
          <p className="mt-4">
            We identify problems that are pain points, develop them into solutions, spin-off as ventures, and build
            them into great and sustainable businesses
          </p>
        </div>
        <div className="lg:w-1/2">
          <p>
            Currently, we have 6 Portfolio Companies, 4 of which have been spun off. Our goal is to achieve 5
            spinoffs before the end of 2024.
          </p>
          <p className="mt-2 font-bold">PortCo&apos;s Include:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {portCos.map((co) =>
              co.href ? (
                <li key={co.label}>
                  <a href={co.href} target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                    {co.label}
                  </a>
                </li>
              ) : (
                <li key={co.label}>{co.label}</li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="pt-6 text-center">
        <a
          href={MEMBER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-purple bg-white px-6 py-2 text-purple"
        >
          Become a Member
        </a>
      </div>
    </div>
  );
}
