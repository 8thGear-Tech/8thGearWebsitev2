import Image, { type StaticImageData } from "next/image";

// Shared full-bleed hero used by the piggery-training, LSETF-gallery, innkeeper-hackathon-gallery
// and ITF-training-gallery pages. In the CRA source these four hero components (PiggeryTrainingGalleryHero,
// LSETFGalleryHero, HackathonGalleryHero, ITFGalleryHero in src/components/Hero/ImageandTextHero.js) are
// byte-for-byte identical apart from the background-image class — same "Great people building enduring
// ventures" copy and same dark gradient overlay — so they're consolidated into one component here.
export function ProjectDeliveryGalleryHero({ image, alt }: { image: StaticImageData; alt: string }) {
  return (
    <div className="relative flex h-[70vh] w-full items-center overflow-hidden px-4">
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <h1 className="max-w-2xl font-heading text-3xl font-light text-white lg:ml-5 lg:text-5xl">
          Great people building enduring ventures
        </h1>
      </div>
    </div>
  );
}
