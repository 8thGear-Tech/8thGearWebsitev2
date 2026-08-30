"use client";

import { useEffect, useState } from "react";

const dynamicText = ["informative", "innovative", "insightful", "valuable"];

export function EventsNewHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % dynamicText.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[70vh] items-center justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/images/FMU_24_Q2/FMU_Q2_7.PNG')] bg-cover bg-center px-4 text-center lg:h-screen">
      <h3 className="flex flex-wrap items-center justify-center gap-3 font-heading text-3xl text-white lg:text-6xl">
        Our events are
        <span
          className={`text-[#edccec] transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {dynamicText[index]}
        </span>
      </h3>
    </div>
  );
}
