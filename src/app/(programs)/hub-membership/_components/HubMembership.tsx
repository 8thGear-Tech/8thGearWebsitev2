import Image from "next/image";
import sectionOneImg from "@/assets/images/BuildersCollective/sectionOneImage.jpg";
import memberShipImg from "@/assets/images/BuildersCollective/membersSection.jpg";
import memberShipImgSM from "@/assets/images/BuildersCollective/memberSectionSM.jpg";

const MEMBER_FORM_URL = "https://forms.gle/WJEYcDTdFkgZ6rwUA";

const PORTCO_TILE =
  "flex h-full items-center justify-between gap-2 rounded-lg border border-grey-border bg-white px-4 py-3 font-medium";

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
    "Accountability services - Monthly growth metrics tracking support.",
    "5% affiliate discounts across our co-working, talent placement and growth strategy services.",
    "Priority booking access to training rooms, meeting rooms, co-working and private office spaces.",
  "Access to ecosystem-evolving opportunities and enterprise development content.",
  "Opportunity to be a part of our supportive community and attend 8thGear events.",
    "Special in-house sessions and programs designed to accelerate your company's growth."
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
        <h2 className="font-heading text-2xl [text-shadow:4px_4px_6px_rgba(0,0,0,0.5)] md:text-4xl font-bold">
          Unlock the Power of collaboration and Innovation with the 8thGear Hub Membership!
        </h2>
        <a
          href={MEMBER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-purple hover:font-medium"
        >
          Become a Member
        </a>
      </div>
    </div>
  );
}

function SectionOne() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-left text-lg font-light leading-[1.85] md:text-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex-1">
          <h3 className="mb-2 text-2xl font-medium uppercase leading-tight text-purple md:text-3xl">
            Why Join the 8thGear Hub Membership?
          </h3>
          <p>
            It is an established fact that entrepreneurs do well when they are journeying with people who are also
            buiding. Only entrepreneurs know how to support and give comfort to other entrepreneurs and that is the
            reason why the Hub Membership exist.
          </p>
        </div>
        <Image
          src={sectionOneImg}
          alt="Hub Membership"
          className="w-full max-w-sm rounded-xl object-cover lg:w-2/5"
        />
      </div>
      <p className="mt-6">
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
      <h3 className="text-purple font-medium text-xl pb-4">Join the 8thGear Community &ndash; It&apos;s Free!</h3>
      <p className="max-w-xl">
        Become part of a vibrant, no-cost community where entrepreneurs come together to create, innovate, and
        elevate their ventures.
      </p>
      <a
        href="https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-37.5 rounded-full border border-purple bg-white px-4 py-2 text-purple hover:bg-purple hover:text-white transition-colors"
      >
        Join Us Now!
      </a>
    </div>
  );
}

function MembershipSection() {
  return (
    <div className="mx-auto max-w-300 px-4 py-12">
      <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
        <div className="lg:w-7/12">
          <h4 className="hidden text-center font-medium text-2xl pb-4 text-purple lg:block">Hub Membership</h4>
          <p className="mb-4 font-light leading-relaxed">
            Join the 8thGear Hub Membership to unlock a premium tier designed to accelerate your business growth
            through exclusive access to enhanced benefits, resources, and curated opportunities. The membership
            begins with a <span className="font-medium">registration fee of &#8358;20,000</span>, followed by a
            subscription of <span className="font-medium">&#8358;150,000 quarterly</span>.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            {benefits.map((benefit, i) => (
              <li key={i} className="font-light leading-4 pb-2">
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
      <h3 className="mb-6 text-center text-purple font-medium text-2xl uppercase">Become a Portfolio Company</h3>
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:flex-row">
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
            Currently, we have 6 Portfolio Companies that are actively growing and making an impact in their respective industries. These companies benefit from our extensive network, mentorship, and resources, which are instrumental in their growth and success.
          </p>
          <p className="mt-2 font-bold">PortCo&apos;s Include:</p>
          <ul className="mt-3 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
            {portCos.map((co) => (
              <li key={co.label}>
                {co.href ? (
                  <a
                    href={co.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${PORTCO_TILE} text-purple no-underline transition-colors hover:border-purple`}
                  >
                    {co.label}
                    <span aria-hidden="true" className="text-sm">
                      ↗
                    </span>
                  </a>
                ) : (
                  <div className={PORTCO_TILE}>{co.label}</div>
                )}
              </li>
            ))}
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
