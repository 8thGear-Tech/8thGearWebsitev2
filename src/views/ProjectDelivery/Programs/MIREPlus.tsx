import Image from "next/image";
import { BsCashCoin, BsPeopleFill, BsCpuFill, BsGraphUpArrow } from "react-icons/bs";
import trainingsHero from "@/assets/images/projectdelivery/trainingsHero.jpg";
import digiplusalliance from "@/assets/images/projectdelivery/MIREPlus/digiplusalliance.png";
import avonafrica from "@/assets/images/projectdelivery/MIREPlus/avonafrica.png";
import meristem from "@/assets/images/projectdelivery/meristem/meristem.svg";
import { ApplyButton } from "./ApplyButton";

const APPLY_URL = "https://forms.gle/WJEYcDTdFkgZ6rwUA";

const whoIsThisFor = [
  "Owners looking to raise funding, equity, loan or grant, professional governance or both",
  "Based in Lagos, Ibadan, or southwest Nigeria and available to attend physical sessions in Lagos",
  "Entrepreneurs seeking funding and digital business growth",
  "Founders ready to invest ₦200,000 in scaling their business",
];

const whatYoullGain = [
  "Hands on workshop on positioning and marketing essentials, supply chain cooperate governance funding and pitch readiness",
  "Access to Debt & Equity Funding (T&C applies)",
  "Post-program mentorship (1 Month)",
  "Demo Day - Opportunity to Pitch to Investors",
];

const pillars = [
  { title: "Funding", Icon: BsCashCoin },
  { title: "Talent", Icon: BsPeopleFill },
  { title: "Tech", Icon: BsCpuFill },
  { title: "Market", Icon: BsGraphUpArrow },
];

function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <svg width="20" height="20" viewBox="0 0 20 20" className="mt-0.5 shrink-0">
        <rect width="20" height="20" rx="3" fill={dark ? "#821E6B" : "white"} />
        <path
          d="M5 10l3 3 7-7"
          stroke={dark ? "white" : "#821E6B"}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className={`m-0 leading-normal ${dark ? "text-[#333]" : "text-white"}`}>{children}</p>
    </div>
  );
}

export function MIREPlus() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center text-white">
        <Image src={trainingsHero} alt="" fill sizes="100vw" className="-z-10 object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(130,30,107,0.8),rgba(0,164,149,0.8))]" />
        <div className="relative z-[2] mx-auto max-w-3xl px-4">
          <h2 className="pt-12">Secure your spot in our next MIRE cohort and transform your business.</h2>
          <p className="text-base text-white">Grant-Ready | Loan-Ready | Investor-Ready</p>
          <ApplyButton href={APPLY_URL} className="mt-2">
            Apply Now
          </ApplyButton>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-12 text-center">
              <h3 className="bg-[linear-gradient(135deg,#821E6B,#00A495)] bg-clip-text font-bold text-transparent">
                GET UP TO ₦5,000,000
              </h3>
              <p className="m-0">Funding Support for High-Potential Entrepreneurs</p>
              <p className="m-0 font-bold text-purple">+More from MIRE Plus!</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[linear-gradient(135deg,#821E6B,#5c1551)] p-8 text-white shadow-brand">
                <h5 className="mb-4 text-[1.2rem] font-bold">Who is this for?</h5>
                <div className="flex flex-col gap-4">
                  {whoIsThisFor.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>

                <div className="mt-12">
                  <ApplyButton href={APPLY_URL} pulse className="px-10 py-2 text-black shadow-[0_8px_15px_rgba(0,0,0,0.4)]">
                    Apply Now
                  </ApplyButton>
                  <p className="mt-3 text-sm italic text-white">Limited slots for high-potential entrepreneurs.</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-brand">
                <div>
                  <h5 className="mb-4 text-[1.15rem] font-bold">What You&apos;ll Gain:</h5>
                  <div className="flex flex-col gap-4 border-b-2 border-[#f0f0f0] pb-4">
                    {whatYoullGain.map((item) => (
                      <CheckItem key={item} dark>
                        {item}
                      </CheckItem>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-4 flex gap-20 border-b-2 border-[#f0f0f0] pb-4">
                    <div>
                      <h5>Application Fee</h5>
                      <p className="m-0">₦5,000</p>
                      <p className="m-0 text-sm text-[#666]">(Non-refundable)</p>
                    </div>
                    <div>
                      <h5>Training Fee</h5>
                      <p className="m-0">₦200,000</p>
                    </div>
                  </div>
                  <p className="mt-1 text-xs leading-none">Pay ₦200,000 upfront and get 10% discount.</p>
                  <p className="mt-1 text-xs leading-none">
                    Note that the application fee is non-refundable and is included in the ₦200,000 training fee.
                  </p>
                </div>

                <div>
                  <h5 className="text-base font-bold">Program Duration</h5>
                  <p className="m-0">4 Weeks</p>
                  <p className="m-0 text-sm text-[#666]">Start Date to be Announced</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h5 className="mb-4 text-base font-bold italic text-[#333]">SUPPORTED BY</h5>
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative h-[50px] w-[160px]">
                <Image src={digiplusalliance} alt="DigiPlus Alliance" fill className="object-contain object-left" />
              </div>
              <div className="relative h-[42px] w-[140px]">
                <Image src={avonafrica} alt="Avon Africa" fill className="object-contain object-left" />
              </div>
              <div className="relative h-[42px] w-[140px]">
                <Image src={meristem} alt="Meristem" fill className="object-contain object-left" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-12 text-center">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative h-[568px] w-[320px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/i_IYFaBItGE"
                title="MIRE Testimonial 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="relative h-[568px] w-[320px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0eRPbnmkksc"
                title="MIRE Testimonial 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#821E6B_0%,#00A495_100%)] py-12 text-white">
        <div className="mx-auto max-w-[1400px] px-4">
          <div className="flex flex-wrap items-start gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="mb-3 font-bold">If clarity is worth anything to you and your business, read on.</h3>
              <p className="opacity-90">
                The Coaches and Team at <strong>8thGear® Hub & Venture Studio</strong> will help switch on the lights
                so you can clearly see if you need <strong>Funding</strong> (and what type),
                <strong> Talent</strong> (and what type), <strong> Tech</strong> (and what type), &
                <strong> Market access</strong> (are you in the right market or should you pivot?).
              </p>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {pillars.map(({ title, Icon }) => (
                  <div key={title} className="mb-3">
                    <Icon className="text-3xl text-white" />
                    <p className="mb-0 text-sm font-bold">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="rounded-lg bg-white p-8 text-ink shadow-brand-lg">
                <h5 className="mb-3 font-bold">For access to Funders, we will facilitate access to:</h5>
                <ul className="mb-3 list-none space-y-2 p-0">
                  <li>✔ Development Bank of Nigeria (DBN) - Single Digit Debt Finance and Grants of up to ₦5m</li>
                  <li>✔ Lagos State Employment Trust Fund (LSETF) - Single Digit Debt Finance</li>
                  <li>✔ Access to Equity investment from Avon Africa VC</li>
                </ul>

                <p className="mb-0 text-sm">
                  After the program you can optionally access follow on accountability/ad-hoc advisory board
                  services through our Subscribed Hub Membership to actually prepare you for the Market and/or
                  investors.
                </p>

                <div className="mt-4 text-center">
                  <ApplyButton href="https://api.whatsapp.com/send/?phone=2348094818883">Talk to Us</ApplyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-3 pt-12 text-center">
        <div className="mx-auto max-w-[1400px] px-4">
          <h3 className="mb-3 font-bold">Ready to Accelerate Your Growth?</h3>
          <p className="mb-4 text-lg text-secondary">
            Secure your spot in our next MIRE cohort and transform your business.
          </p>
          <ApplyButton href={APPLY_URL}>Apply Now</ApplyButton>
        </div>
      </section>
    </>
  );
}
