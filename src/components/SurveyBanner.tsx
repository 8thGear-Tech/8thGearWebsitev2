"use client";

import { useEffect, useRef, useState } from "react";

const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe7FjSTjyCKAZQooBHyxkOGWTXx3z_uc-bDn3K8zfhsvcCpsA/viewform?usp=sharing&ouid=115803220851822061793";

export function SurveyBanner() {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("surveyModalShown");
    if (!modalShown) {
      const timer = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setShowBanner(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current && showBanner) {
        document.documentElement.style.setProperty("--banner-height", `${bannerRef.current.offsetHeight}px`);
      } else {
        document.documentElement.style.setProperty("--banner-height", "0px");
      }
    };

    updateHeight();
    const t = setTimeout(updateHeight, 50);
    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateHeight);
    };
  }, [showBanner]);

  const handleModalClose = () => {
    sessionStorage.setItem("surveyModalShown", "true");
    setShowModal(false);
    setTimeout(() => setShowBanner(true), 2000);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
    document.documentElement.style.setProperty("--banner-height", "0px");
  };

  return (
    <>
      {showModal && (
        <div
          onClick={handleModalClose}
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/55 p-5 [animation:fade-in_0.3s_ease]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-130 rounded-xl border-2 border-purple bg-[#2c2c2c] px-9 pb-8 pt-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] [animation:slide-up_0.35s_ease]"
          >
            <button
              type="button"
              onClick={handleModalClose}
              aria-label="Close"
              className="absolute -right-3.5 -top-3.5 z-10 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-white bg-purple text-white transition-colors hover:bg-white/20"
            >
              <CloseIcon />
            </button>
            <div className="mb-4 rounded-full bg-purple px-2.5 py-1 text-center text-[10px] font-bold uppercase tracking-wider text-white">
              MSME Survey 2026
            </div>
            <p className="mb-7 text-left text-sm font-medium leading-[1.7] text-[#d0e8e8]">
              We&apos;re collecting honest feedback to understand the real impact of sponsored talent and MSME
              development programmes in Nigeria.
              <br />
              <br />
              <span className="text-xs opacity-85">
                ⏱ Takes <strong>5–7 minutes</strong> &nbsp;·&nbsp; 🔒 Fully Anonymous
                <br />
                📊 Findings published <strong>December 2026</strong>
              </span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleModalClose}
                className="inline-flex items-center rounded bg-purple px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_6px_rgba(130,30,107,0.2)] transition-all hover:shadow-[0_4px_10px_rgba(130,30,107,0.3)]"
              >
                Take the Survey →
              </a>
            </div>
          </div>
        </div>
      )}

      {showBanner && (
        <div
          ref={bannerRef}
          className="sticky top-0 left-0 right-0 z-[1100] w-full border-b border-[#1a1a1a] bg-[#2c2c2c] shadow-[0_2px_8px_rgba(0,0,0,0.15)] [animation:banner-ease-in_0.6s_ease_forwards]"
        >
          <div className="relative mx-auto flex max-w-350 flex-col items-stretch gap-3 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5 sm:pr-5">
            <div className="min-w-0 flex-1 sm:flex sm:flex-col sm:gap-1">
              <h3 className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:text-[11px]">
                MSME Survey 2026
              </h3>
              <p className="m-0 text-[11px] leading-[1.4] text-[#e0e0e0] sm:truncate sm:whitespace-nowrap sm:text-xs">
                Does sponsored talent &amp; MSME development programmes{" "}
                <span className="mx-0.75 font-semibold text-[#c3ca18]">actually move the needle</span> for your
                business? Tell us in 5–7 mins · Fully Anonymous · Findings will be published in December 2026.
              </p>
            </div>
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded bg-purple px-4 py-2.5 text-center text-[11px] font-semibold text-white shadow-[0_2px_6px_rgba(130,30,107,0.2)] transition-all hover:-translate-y-px hover:shadow-[0_4px_10px_rgba(130,30,107,0.3)] active:translate-y-0 sm:w-auto sm:px-4.5 sm:py-1.75 sm:text-xs"
            >
              Take Survey
            </a>
            <button
              type="button"
              onClick={handleBannerClose}
              aria-label="Dismiss"
              className="absolute right-2 top-2 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline focus:outline-1 focus:outline-purple sm:static sm:h-6 sm:w-6 sm:border-0 sm:bg-transparent sm:hover:bg-white/10 sm:hover:text-[#c3ca18]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
