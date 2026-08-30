import Image from "next/image";
import gizHeroImg from "@/assets/images/hero/GIZhero.jpg";
import { GalleryImageGrid } from "@/views/Events/EventGalleryCards";

// The CRA source's GIZEmployabilityGalleryHero (src/components/Hero/ImageandTextHero.js) renders the
// .GIZHeroBg background image with all of its heading/paragraph text commented out, so it's ported here as
// a plain image band with no caption to match what's actually live.
function GIZHero() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <Image src={gizHeroImg} alt="" fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-[#2e3133]/30" />
    </div>
  );
}

const pictures = [
  { id: 1, src: "/images/galleryimagecardsEmployabilityGIZ/employability1.jpg" },
  { id: 2, src: "/images/galleryimagecardsEmployabilityGIZ/employability2.jpg" },
  { id: 3, src: "/images/galleryimagecardsEmployabilityGIZ/employability3.jpg" },
  { id: 4, src: "/images/galleryimagecardsEmployabilityGIZ/employability4.jpg" },
  { id: 5, src: "/images/galleryimagecardsEmployabilityGIZ/employability5.jpg" },
];

export function GIZEmployabilityGallery() {
  return (
    <>
      <GIZHero />
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">GIZ EMPLOYABILITY GALLERY</h3>
      <GalleryImageGrid images={pictures} />
    </>
  );
}
