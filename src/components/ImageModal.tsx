"use client";

import Image, { type StaticImageData } from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";

type ImageModalProps = {
  open: boolean;
  onClose: () => void;
  src: StaticImageData;
  alt: string;
};

// Full-size view of an image such as a programme flyer: half the screen wide from md up, and when the image is
// taller than the viewport it scrolls inside the panel while the Close button stays visible.
// z-1000 sits above the sticky navbar (z-[999]) and below the survey modal (z-[2000]).
export function ImageModal({ open, onClose, src, alt }: ImageModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-1000">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-lg bg-white md:w-1/2">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <Image src={src} alt={alt} sizes="(min-width: 768px) 50vw, 100vw" className="block h-auto w-full" />
          </div>
          <div className="flex shrink-0 justify-end border-t border-grey-border p-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-[#6c757d] px-4 py-2 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
