import Image, { type StaticImageData } from "next/image";
import { BsBagCheck } from "react-icons/bs";
import ourModelHero from "@/assets/images/hero/ourmodelhero.jpg";
import ideationIcon from "@/assets/icons/ourmodel/ideation.png";
import validationIcon from "@/assets/icons/ourmodel/validation.png";
import creationIcon from "@/assets/icons/ourmodel/creation.png";
import spinoutIcon from "@/assets/icons/ourmodel/spinout.png";
import scaleupIcon from "@/assets/icons/ourmodel/scaleup.png";

export function OurModelPage() {
  return (
    <>
      <OurModelHero />
      <WhatWeDo />
      <HowWeDoIt />
      <OurModelTractions />
    </>
  );
}

function OurModelHero() {
  return (
    <div className="relative flex h-[50vh] w-full items-center px-4 min-[441px]:h-[60vh] sm:h-[80vh]">
      <Image src={ourModelHero} alt="" fill priority className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/[0.68]" />
      <div className="max-w-3xl lg:pl-8">
        <h1 className="font-heading text-2xl text-white lg:text-[2.2rem] lg:leading-tight">
          As a rule, we build only default-alive ventures by doing things that scale so that we can have enduring
          ventures.
        </h1>
      </div>
    </div>
  );
}

const whatWeDoItems = [
  "Concept Validation",
  "Market Research",
  "Product Management",
  "Go-To-Market",
  "Visual & UX Design",
  "Engineering",
  "Business Analytics",
  "Company Formation",
  "Finance",
  "Operations",
  "Legal & HR",
  "Recruiting",
];

function WhatWeDo() {
  return (
    <div className="bg-teal/[0.07] px-4 py-12">
      <div className="mx-auto max-w-[1400px]">
        <h3 className="font-heading">What We Do</h3>
        <p className="max-w-3xl">
          We firmly believe in creating enterprises with a sustainable business strategy at our venture studio. At
          the beginning of the business and throughout its existence, we place a high priority on speaking with
          potential clients. Years of failing fast and failing forward to create thriving businesses have helped us
          identify the conditions required to increase the chances of an idea thriving. Our in-house team of experts
          is on standby ready to turn ideas into viable businesses.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDoItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <BsBagCheck className="shrink-0 text-xl" />
              <p className="mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const howWeDoItStages: { number: string; icon: StaticImageData; title: string; body: string }[] = [
  {
    number: "01- Ideation",
    icon: ideationIcon,
    title: "The idea could be ours or it could be yours.",
    body: "When we come across a problem that we think is intriguing and significant, we dive right in, looking for long-term solutions. The idea could have come from us or from somebody else. However, when we sense a huge potential, we immediately get to work.",
  },
  {
    number: "02- Validation",
    icon: validationIcon,
    title: "Speaking with potential customers from the beginning to confirm assumptions.",
    body: "To confirm that the problem is actually a problem for the identified customer segment and to learn how they want it solved, assumptions are tested and validated by regularly engaging with potential customers.",
  },
  {
    number: "03- Creation",
    icon: creationIcon,
    title: "Fail fast Fail forward",
    body: "We don't spend decades perfecting an MVP; we deploy as soon as possible. Taking real-time market lessons and making adjustments on the go. We will keep working on the idea, refining and adjusting it constantly while keeping the customers at the heart of our decisions.",
  },
  {
    number: "04- Spinout",
    icon: spinoutIcon,
    title: "We spin out once proof of concept is achieved.",
    body: "Once we have a small group of raving fans who are willing to pay and spread the word through referrals. It is past time to turn these concepts into stand-alone enterprises. Our in-house legal, branding, and human resources experts get to work right away, spinning them off as distinct firms with a strong commercial framework.",
  },
  {
    number: "05- Scaleup",
    icon: scaleupIcon,
    title: "Scale the Fundamentals",
    body: "We allow founders focus on the core of their value offerings. Ensuring that as these businesses grow and scale the team does not lose sight of the fundamentals while we make sure everyother part of the business is working as it should",
  },
];

function HowWeDoIt() {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-[1000px]">
        <h3 className="font-heading">How We Do It</h3>
        <p>
          A business&apos;s development is not a simple stroll in the park; it requires a great deal of grit, guts,
          and resources. It is a voyage that should not be attempted alone. That is why our team of professionals,
          who have traveled this path before, has devised a mechanism that works effectively to help ideas scale.
        </p>

        <div className="mt-8 flex flex-col gap-12">
          {howWeDoItStages.map((stage) => (
            <div key={stage.number} className="flex flex-col items-center gap-6 md:flex-row md:items-center">
              <div className="flex w-full shrink-0 justify-center md:w-48">
                <Image src={stage.icon} alt="" className="h-32 w-32 object-contain" />
              </div>
              <div>
                <h4 className="font-heading text-purple">{stage.number}</h4>
                <h3 className="font-heading">{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tractions = [
  { value: "75%", label: "HAVE FEMALE CO-FOUNDERS" },
  { value: "240", label: "MENTORSHIP HOURS" },
  { value: "12", label: "PORTFOLIO BUSINESSES" },
  { value: "20", label: "JOBS CREATED" },
];

function OurModelTractions() {
  return (
    <div className="bg-teal/[0.07] px-4 py-12 text-center">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 lg:grid-cols-4">
        {tractions.map((t) => (
          <div key={t.label}>
            <h1 className="font-heading">{t.value}</h1>
            <p className="text-sm">{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
