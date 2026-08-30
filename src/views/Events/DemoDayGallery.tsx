import Image from "next/image";
import demoDayHeroImg from "@/assets/images/hero/demodayhero.jpg";
import { GalleryImageGrid, GalleryVideoGrid } from "./EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/gallerydemoday/demodayone.JPG" },
  { id: 2, src: "/images/gallerydemoday/demodaytwo.JPG" },
  { id: 3, src: "/images/gallerydemoday/demodaythree.JPG" },
  { id: 4, src: "/images/gallerydemoday/demodayfour.JPG" },
  { id: 5, src: "/images/gallerydemoday/demodayfive.JPG" },
  { id: 6, src: "/images/gallerydemoday/demodaysix.JPG" },
];

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/vsfp35Zt99Y" },
  { id: 2, src: "https://www.youtube.com/embed/GoVRCH8A7zI" },
];

export function DemoDayGalleryPage() {
  return (
    <>
      <div className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden px-4 text-center">
        <Image src={demoDayHeroImg} alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-[#2e3133]/70" />
        <h2 className="relative z-10 max-w-4xl font-heading text-2xl leading-snug text-white lg:text-4xl">
          You are setting yourself up for growth when you are a member of a vibrant community where people are
          continuously challenging and supporting one another.
        </h2>
      </div>

      <h3 className="pb-2 pt-10 text-center font-heading text-purple">DEMO DAY GALLERY</h3>
      <GalleryImageGrid images={pictures} />
      <GalleryVideoGrid videos={videos} />
    </>
  );
}
