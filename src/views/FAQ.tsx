"use client";

import { useState, type ReactNode } from "react";

type FaqItem = { sectionTitle: string } | { question: string; answer: ReactNode };

type CategoryName = "Hub Services" | "Impact Projects" | "Venture Studio" | "Builders Collective";

const categories: CategoryName[] = ["Hub Services", "Impact Projects", "Venture Studio", "Builders Collective"];

const questionsByCategory: Record<CategoryName, FaqItem[]> = {
  "Hub Services": [
    {
      question: "What services does the Hub Services Division offer?",
      answer:
        "The Hub Services division offers a range of business support services, including Co-working space, Growth as a Service for businesses and start-ups, and Talent Placement.",
    },
    {
      question: "What networking opportunities are available through the Hub Services Division?",
      answer:
        "We host quarterly founders meetup events for entrepreneurs in our community, we also have seminars where entrepreneurs can connect with other business professionals.",
    },
    {
      question: "Is there a minimum commitment period for using the Hub Services?",
      answer:
        "The commitment period varies depending on the services you require. For co-working space, we offer both short-term and long-term agreements.",
    },
    { sectionTitle: "Co-working" },
    {
      question: "How do I apply for office space at 8thGear Hub?",
      answer: (
        <>
          You can apply for office space by filling out this{" "}
          <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
            form
          </a>
          .
        </>
      ),
    },
    {
      question: "Can I access the Hub Services if I’m not renting office space?",
      answer:
        "Yes, we offer a variety of flexible membership options, including access to networking events, and virtual office solutions.",
    },
    { sectionTitle: "Talent Placement" },
    {
      question: "What is the Talent Placement service?",
      answer:
        "Talent Placement is a specialized service by 8thGear that helps companies find and recruit top talent, matching them with skilled professionals who fit their specific business needs.",
    },
    {
      question: "What types of roles does 8thGear Talent Placement cover?",
      answer:
        "We cover a wide range of roles, from entry-level positions to executive leadership, across various industries including tech, marketing, and more.",
    },
    {
      question: "How does the Talent Placement process work?",
      answer:
        "The process begins with an in-depth consultation to understand your company’s needs, followed by sourcing, screening, and interviewing candidates to ensure a perfect fit.",
    },
    {
      question: "Can I use Talent Placement for temporary or contract positions?",
      answer:
        "Yes, we offer flexible talent solutions, including temporary, contract, and full-time placements, depending on your business requirements.",
    },
    {
      question: "How long does it take to fill a position through Talent Placement?",
      answer:
        "The timeline varies based on the role and market conditions, but we strive to present qualified candidates within a short turnaround.",
    },
    {
      question: "What support does 8thGear provide after a candidate is placed?",
      answer:
        "After placement, we offer ongoing support to both the employer and the candidate, including onboarding assistance, performance check-ins, and development plans to ensure long-term success and satisfaction.",
    },
    {
      question: "How do you ensure that candidates are a good fit for our company culture?",
      answer:
        "We take the time to understand your company’s culture and values, and we incorporate this understanding into our screening process to ensure that candidates align well with your organizational environment.",
    },
    {
      question: "Can you help with onboarding and integration of new hires?",
      answer:
        "Yes, we offer onboarding support services to help new hires transition smoothly into their roles and integrate successfully into your company. This includes training, orientation, and ongoing support.",
    },
    { sectionTitle: "GaaS (Growth as a Service)" },
    {
      question: "What is GaaS?",
      answer:
        "Growth as a Service (GaaS) is a tailored business growth solution offered by 8thGear, designed to help companies scale by providing strategic support, market access, and operational efficiency services.",
    },
    {
      question: "Who is GaaS designed for?",
      answer:
        "GaaS is ideal for businesses that have a product or service and are looking to scale sustainably. We also offer services for established brands.",
    },
    {
      question: "What services are included in GaaS?",
      answer:
        "GaaS includes services such as brand visibility, market research, digital marketing support services, and customer & sales journey support.",
    },
    {
      question: "Can GaaS help my business enter new markets?",
      answer:
        "Yes, GaaS includes market research, localization strategies, and partnerships that can help your business successfully enter and thrive in new markets.",
    },
    {
      question: "How do I know if GaaS is right for my business?",
      answer:
        "If you are ready to scale but need expert guidance and resources to do so effectively, GaaS could be a great fit. Contact us for a consultation to discuss your specific needs.",
    },
    {
      question: "How do I get started with GaaS?",
      answer: (
        <>
          To get started, simply reach out to us through this{" "}
          <a href="https://calendar.app.google/t7TiMRDyXA1Ssvxs8" target="_blank" rel="noopener noreferrer">
            link
          </a>{" "}
          to schedule a free 15 minutes initial consultation.
        </>
      ),
    },
  ],
  "Impact Projects": [
    {
      question: "What is the Impact Projects Division?",
      answer:
        "The Impact Projects Division focuses on driving social and environmental change through entrepreneurial initiatives that address critical issues, such as sustainability, education, and economic empowerment.",
    },
    {
      question: "How does the Impact Projects Division support social enterprises?",
      answer:
        "We provide mentorship, and strategic partnerships to social enterprises, helping them scale their impact and reach wider audiences.",
    },
    {
      question: "What types of projects are eligible for support?",
      answer:
        "Eligible projects typically address issues such as poverty alleviation, environmental sustainability, education, and community development.",
    },
    {
      question: "How does the division measure the impact of supported projects?",
      answer:
        "We use a range of metrics and tools to measure the social, economic, and environmental impact of our projects, ensuring that they deliver tangible benefits to the communities they serve.",
    },
    {
      question: "Do you collaborate with other organizations in the Impact Projects Division?",
      answer:
        "Yes, we frequently collaborate with NGOs, government agencies, corporations, and other stakeholders to amplify the impact of our projects.",
    },
    {
      question: "How can I get involved with the Impact Projects Division?",
      answer: (
        <>
          You can get involved by submitting a project proposal to{" "}
          <a href="mailto:projects@8thgearpartners.com">projects@8thgearpartners.com</a>, becoming a partner,
          volunteering your time, or donating resources to support our initiatives.
        </>
      ),
    },
  ],
  "Venture Studio": [
    {
      question: "What is the Venture Studio Division?",
      answer:
        "The Venture Studio Division is a unique program that partners with entrepreneurs to co-create, launch, and scale new ventures by providing strategic guidance, operational support, and access to capital.",
    },
    {
      question: "How does 8thGear’s Venture Studio support startups?",
      answer:
        "We support startups by offering hands-on involvement in business development, product design, market strategy, and providing funding or access to investors.",
    },
    {
      question: "Who can apply to join the Venture Studio?",
      answer:
        "The Venture Studio is open to entrepreneurs, innovators, and early-stage startups that have a validated business idea and are seeking support to scale.",
    },
    {
      question: "What is the process to join the Venture Studio?",
      answer: (
        <>
          Interested entrepreneurs can apply via this{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2tUCaXKrBRYS0hVjU7BGRtdV9lN6j9ThGx-LZGwqwlebE_Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          . Selected candidates will undergo a rigorous vetting process.
        </>
      ),
    },
    {
      question: "Does the Venture Studio take equity in my startup?",
      answer:
        "Yes, in exchange for our services and support, the Venture Studio typically takes a small equity stake in the startups we partner with.",
    },
    {
      question: "How long does a startup stay in the Venture Studio program?",
      answer:
        "The duration varies depending on the needs of the startup, but most ventures stay in the program for 6-12 months, during which we help them reach key growth milestones.",
    },
    {
      question: "What kind of resources are available to startups in the Venture Studio?",
      answer:
        "Startups have access to a wide range of resources, including expert mentors, industry connections, business tools, and co-working spaces, all aimed at accelerating their growth.",
    },
  ],
  "Builders Collective": [
    {
      question: "What is the Builders Collective?",
      answer:
        "8thGear Builders Collective is a subscription-based specially curated closed group for members of our community who are actively building and seeking more support.",
    },
    {
      question: "How can I join the Builders Collective?",
      answer: (
        <>
          You can join the Builders Collective by clicking this{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYKIGrYhSeAHBQ8jLP07eH18UcTMCVxoUIaFtPj8-soyr_Xw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          . Membership is open to all entrepreneurs, business owners, and innovators.
        </>
      ),
    },
    {
      question: "What are the benefits of joining the Builders Collective?",
      answer:
        "As part of this subscription service, you'll benefit from our accountability service, where we help track your month-on-month growth across locally relevant metrics and corporate goals. Members enjoy access to exclusive networking events, workshops, peer-to-peer mentoring, and firsthand insights into 8thGear’s services and offerings.",
    },
    {
      question: "What kind of events does the Builders Collective host?",
      answer:
        "We host a variety of events, including founder's meetups, and venture-building workshops (vBIP Program) designed to help members grow their businesses.",
    },
    {
      question: "Is there a membership fee for the Builders Collective?",
      answer: (
        <>
          Yes, there is a <b>#10,000 monthly membership fee</b>, which covers <b>accountability services</b>,{" "}
          <b>B2B venture listing on our tech marketplace</b>, <b>special in-house sessions and programs</b>, and
          other member benefits.
        </>
      ),
    },
    {
      question: "Can I showcase my business at Builders Collective events?",
      answer:
        "Absolutely! Members are encouraged to showcase their businesses at our quarterly founders meet up and our annual Demo-day.",
    },
    {
      question: "How does the Builders Collective support entrepreneurial growth?",
      answer:
        "The Collective fosters a supportive environment where members can learn from each other, gain valuable feedback, and leverage 8thGear Growth services to overcome challenges and scale their ventures.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("Hub Services");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: CategoryName) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 text-center">
      <h2 className="font-heading text-xl font-medium text-purple">Frequently Asked Questions (FAQs)</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`inline-flex h-11 items-center justify-center rounded-full border-[3px] border-purple px-5 font-heading text-sm font-bold transition-colors sm:text-base ${
              activeCategory === category ? "bg-purple text-white" : "bg-white text-purple hover:bg-purple hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full md:w-3/4">
          {questionsByCategory[activeCategory].map((item, index) => {
            if ("sectionTitle" in item) {
              return (
                <div key={`section-${index}`} className="my-4 text-left">
                  <h3 className="font-heading text-lg font-bold text-primary">{item.sectionTitle}</h3>
                </div>
              );
            }

            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-0">
                <h2>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between border-t border-grey-border bg-transparent py-4 mt-3 text-left text-primary"
                  >
                    <span>{item.question}</span>
                    <span className="ml-4 shrink-0 text-2xl leading-none text-primary">{isOpen ? "−" : "+"}</span>
                  </button>
                </h2>
                {isOpen ? <div className="pb-4 text-left">{item.answer}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
