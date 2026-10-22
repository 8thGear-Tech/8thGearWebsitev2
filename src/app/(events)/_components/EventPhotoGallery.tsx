import Image from "next/image";

export type GalleryImage = {
  id: number | string;
  src: string;
};

/**
 * Shared grid used by the FMU Q1/Q2/Q3 and Talent Fair photo-gallery pages (CRA source:
 * `src/pages/EventsNew/FMUQ1.jsx` / `FMUQ2.jsx` / `FMUQ3.jsx` / `TalentFair24.jsx` — all four
 * share the identical `container-fluid` + `row justify-content-center` + `SingleDemodayCards`
 * markup, differing only in which `src/data/*.json` gallery they read from).
 *
 * The source images live in the CRA app's `public/images/**` folder (referenced as plain string
 * paths, not webpack imports), so intrinsic dimensions aren't known ahead of time here either.
 * Rather than guessing per-image width/height, each photo is placed in a fixed-aspect `fill`
 * box (see PartnersMarquee.tsx for the same technique) — a uniform thumbnail-grid look, unlike
 * the CRA version's variable-height `img-fluid` stack.
 */
export function EventPhotoGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="mx-auto max-w-350 px-4 pb-16 pt-12 sm:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item) => (
          <div key={item.id} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-brand">
            <Image
              src={item.src}
              alt={`Event photo ${item.id}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
