import { BsArrowUpRight } from "react-icons/bs";

export function EIRApplySection() {
  return (
    <section id="eir-apply" className="relative overflow-hidden bg-[linear-gradient(150deg,#fdf4ff_0%,#f0fdfc_60%,#fff8f5_100%)] py-20">
      <div className="pointer-events-none absolute -left-[100px] -top-[120px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(130,30,107,0.09)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(26,152,143,0.08)_0%,transparent_70%)]" />

      <div className="relative z-[1] mx-auto flex max-w-[1000px] flex-wrap items-start gap-16 px-6 md:px-8">
        <div className="min-w-0 flex-1 basis-[340px]">
          <h3 className="mb-5 font-heading text-2xl font-medium leading-tight tracking-[-0.02em] text-[#0f1f20]">
            Become an <span className="text-purple">EIR</span> at 8thGear
          </h3>

          <p className="mb-4 text-[0.95rem] leading-[1.75] text-[#0f2020]/65">
            Are you an experienced professional or founder with{" "}
            <strong>at least five years of business experience</strong>? Step into a role where your expertise
            drives real impact by shaping the next generation of entrepreneurs.
          </p>
          <p className="mb-4 text-[0.95rem] leading-[1.75] text-[#0f2020]/65">
            8thGear&apos;s EIRs are seasoned professionals passionate about supporting high-potential businesses.
            Through a structured <strong>6-month mentorship and accountability journey</strong>, you will work
            closely with entrepreneurs from all 8thGear Entrepreneurship Programmes, providing strategic guidance,
            industry insight, and hands-on support to help them grow.
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-[#0f2020]/65">
            You will play a key role in strengthening businesses, fostering innovation, and contributing to the
            development of scalable and sustainable ventures.
          </p>

          <a
            href="https://forms.gle/Q8oZVjKdq5xygHUg6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-[10px] bg-purple px-4 font-heading text-xs font-medium text-white shadow-[0_4px_20px_rgba(130,30,107,0.25)] transition-all hover:-translate-y-0.5 hover:bg-purple-hover hover:shadow-[0_8px_28px_rgba(130,30,107,0.35)]"
          >
            Apply to Become an EIR
            <BsArrowUpRight className="text-[0.85rem]" />
          </a>
        </div>
      </div>
    </section>
  );
}
