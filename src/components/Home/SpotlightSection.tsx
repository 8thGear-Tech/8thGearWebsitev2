"use client";

import { useState } from "react";

const EMBED_URL = "https://www.youtube.com/embed/zrjQ6HTlyEE?si=AdKCjgr9FQgT93Ta&autoplay=1";

export function SpotlightSection() {
  const [src, setSrc] = useState("");

  return (
    <div className="pb-3">
      <h3 className="mt-2 pt-5 text-center font-heading text-purple">
        8thGear in the Spotlight: Supporting MSMEs Across Nigeria
      </h3>

      <div className="mt-4 flex justify-center">
        <div className="mx-auto w-full max-w-2xl px-4 md:w-10/12 lg:w-1/2 lg:px-0">
          <div
            onClick={() => !src && setSrc(EMBED_URL)}
            className="cursor-pointer rounded-2xl bg-linear-to-br from-[#7f00ff] to-[#e100ff] p-1 transition-transform hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-[url('https://img.youtube.com/vi/zrjQ6HTlyEE/maxresdefault.jpg')] bg-cover bg-center pt-[56.25%]">
              {!src && (
                <div className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 transition-colors hover:bg-black/80">
                  <div className="ml-1 h-0 w-0 border-y-12 border-l-18 border-y-transparent border-l-white" />
                </div>
              )}
              {src && (
                <iframe
                  className="absolute inset-0 h-full w-full rounded-xl border-0"
                  src={src}
                  title="8thGear Spotlight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
