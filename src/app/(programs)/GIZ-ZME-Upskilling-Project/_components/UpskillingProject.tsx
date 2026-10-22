import Image from "next/image";
import eightgearlogo from "@/assets/images/projectdelivery/ESP/logo.png";
import intellex from "@/assets/images/projectdelivery/ESP/intellex.png";
import germancooperation from "@/assets/images/projectdelivery/ESP/german-cooperation.png";
import giz from "@/assets/images/projectdelivery/ESP/giz.png";
import ngc from "@/assets/images/projectdelivery/ESP/ngc.png";
import mrc from "@/assets/images/projectdelivery/ESP/mrc.png";

const businessGains = [
  "Access to trained and pre-vetted tech talent",
  "Opportunity to host interns and assess potential hires",
  "Reduced cost and time spent on recruitment and training",
  "Talent equipped with hands-on, practical experience",
  "Exposure to candidates aligned with global workforce standards",
];

const talentPool = [
  "Data Analytics",
  "Software Development",
  "Cybersecurity",
  "Product Management",
  "Digital Marketing",
  "Graphics Design",
  "Vibe Coding",
];

export function UpskillingProject() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-[#f8f2f8] py-12 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h4 className="mb-3 font-bold text-ink">Build Your Workforce with Skilled Tech Talent</h4>
          <p className="mb-4 text-base text-secondary">
            Through the GIZ/ZME Upskilling Programme, implemented by 8thGear, we are equipping young people in Lagos
            with in-demand digital skills and preparing them for real-world work environments. This programme
            creates a pipeline of job-ready tech talents that businesses can engage, train further, and integrate
            into their teams.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://talenmo.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#8B005D] px-8 py-3 font-bold text-white shadow-[0_4px_12px_rgba(139,0,93,0.15)] transition-all hover:bg-[#7a004d] hover:shadow-[0_6px_16px_rgba(139,0,93,0.25)]"
            >
              Request Talent
            </a>
          </div>

          {/* Split CTA Cards */}
          <div className="mx-auto mt-4 flex w-full max-w-160 flex-wrap gap-4">
            <div className="flex min-w-65 flex-1 flex-col justify-between gap-3 rounded-2xl border border-[#e0cce0] bg-white p-5 text-left">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">💼</span>
                  <p className="m-0 text-xs font-medium text-[#888]">For Business Owners</p>
                </div>
                <p className="m-0 text-sm leading-relaxed text-[#222]">
                  Enrol your employees in fully funded tech training at no cost to your business.
                </p>
              </div>
              <a
                href="#applicant-section"
                className="w-fit rounded-[10px] border-[1.5px] border-[#8B005D] px-4 py-2.5 text-[13px] font-bold text-[#8B005D] transition-colors hover:bg-[#8B005D] hover:text-white hover:shadow-[0_4px_14px_rgba(139,0,93,0.35)]"
              >
                Upskill your staff →
              </a>
            </div>

            <div className="flex min-w-65 flex-1 flex-col justify-between gap-3 rounded-2xl border border-[#e0cce0] bg-white p-5 text-left">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <p className="m-0 text-xs font-medium text-[#888]">For Individuals</p>
                </div>
                <p className="m-0 text-sm leading-relaxed text-[#222]">
                  Get job-ready digital skills through a fully funded programme.
                </p>
              </div>
              <a
                href="#applicant-section"
                className="w-fit rounded-[10px] border-[1.5px] border-[#8B005D] px-4 py-2.5 text-[13px] font-bold text-[#8B005D] transition-colors hover:bg-[#8B005D] hover:text-white hover:shadow-[0_4px_14px_rgba(139,0,93,0.35)]"
              >
                Apply for free training →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Entrepreneurs Should Care */}
      <section className="bg-[#fafafa] py-12">
        <div className="mx-auto max-w-300 px-4">
          <h3 className="mb-3 flex items-center justify-center text-center text-[1.3rem] font-bold text-ink">
            Why This Programme Matters
          </h3>
          <p className="text-center">
            The GIZ/ZME Upskilling Programme goes beyond training, it is a structured talent development pipeline
            designed to help businesses access pre-trained, work-ready individuals equipped with practical digital
            skills.
          </p>

          <div className="mt-8 grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
            <div className="h-full rounded border-l-4 border-[#8B005D] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(139,0,93,0.1)]">
              <h5 className="mb-3 flex items-center font-bold text-[#8B005D]">What Your Business Gains</h5>
              <ul className="m-0 list-none space-y-3 p-0">
                {businessGains.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="me-2 mt-1 text-[#28a745]">✓</span>
                    <span className="text-[0.95rem] leading-relaxed text-[#555]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-full rounded border-l-4 border-[#6f42c1] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(111,66,193,0.1)]">
              <h5 className="mb-3 flex items-center font-bold text-[#8B005D]">Talent Pool You Can Access</h5>
              <p className="mb-3 text-sm text-secondary">Our program is developing young professionals skilled in:</p>
              <div className="grid grid-cols-2 gap-2">
                {talentPool.map((skill) => (
                  <div key={skill} className="flex items-start">
                    <span className="me-2 mt-1 text-[#888]">✓</span>
                    <span className="text-[0.95rem] text-[#555]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-12 text-center">
        <div className="mx-auto max-w-300 px-4">
          <p className="mb-3 text-base leading-relaxed text-[#555]">
            Looking to hire or collaborate with tech talent for your business? Tap into our pipeline of skilled
            professionals and let&apos;s help you find the right fit.
            <br />
            You can also enrol your existing staff in the programme to upskill them, scroll down to see how.
          </p>
          <a
            href="https://talenmo.biz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#8B005D] px-8 py-3.5 text-[1.1rem] font-bold text-white shadow-[0_6px_20px_rgba(139,0,93,0.2)] transition-all hover:scale-105 hover:bg-[#7a004d] hover:shadow-[0_8px_24px_rgba(139,0,93,0.3)]"
          >
            Get Talent Now
          </a>
        </div>
      </section>

      {/* For Young People Section */}
      <section id="applicant-section" className="bg-[#fafafa] py-12 text-center">
        <div className="mx-auto max-w-300 px-4">
          <div className="mx-auto max-w-150">
            <h3 className="mb-3 flex items-center justify-center text-[1.3rem] font-bold">
              For Individuals: Start Your Tech Journey here
            </h3>

            <p className="mb-3 text-base leading-relaxed text-[#555]">
              Are you between 18-40, and ready to build a career in tech? Apply for the fully funded training
              program today and start your journey into tech.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/HDLz4wKecgt19Cl3oSAW1O"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#8B005D] px-4 py-2 text-sm font-bold text-[#8B005D] shadow-[0_2px_6px_rgba(139,0,93,0.1)] transition-colors hover:bg-[#8B005D]/5 hover:border-[#7a004d] hover:text-[#7a004d]"
              >
                Join Whatsapp Group →
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf87ZyRtzb3IGflTxcT7oiy2ToOY3HeMldEprq6wj5Y6icDcA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#6c757d] px-4 py-2 text-sm font-bold text-[#6c757d] shadow-[0_2px_6px_rgba(108,117,125,0.1)] transition-colors hover:border-[#5a6268] hover:bg-[#6c757d]/5 hover:text-[#5a6268]"
              >
                Apply as Trainee →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white pb-4 pt-12">
        <div className="mx-auto max-w-300 px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <span className="text-sm text-secondary">Executed by:</span>
              <div className="flex items-center gap-2">
                <Image src={eightgearlogo} alt="8thGear Hub" className="h-17.5 w-auto object-contain" />
                <Image src={intellex} alt="Intellex" className="h-17.5 w-auto object-contain" />
              </div>
            </div>

            <span className="hidden text-secondary md:inline">|</span>

            <div className="flex flex-col items-center gap-2 md:flex-row">
              <span className="whitespace-nowrap text-sm text-secondary">Supported by:</span>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Image src={germancooperation} alt="German Cooperation" className="h-13.75 w-auto object-contain" />
                <Image src={giz} alt="GIZ" className="h-13.75 w-auto object-contain" />
                <Image src={ngc} alt="NGC" className="h-13.75 w-auto object-contain" />
                <Image src={mrc} alt="MRC" className="h-13.75 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
