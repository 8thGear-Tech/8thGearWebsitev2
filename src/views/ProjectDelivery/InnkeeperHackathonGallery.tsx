import hackathonHeroImg from "@/assets/images/hero/hackathon.jpg";
import { ProjectDeliveryGalleryHero } from "./ProjectDeliveryGalleryHero";
import { GalleryImageGrid } from "@/views/Events/EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/galleryinnkeeperhackathon/hackathon1.JPG" },
  { id: 2, src: "/images/galleryinnkeeperhackathon/hackathon2.JPG" },
  { id: 3, src: "/images/galleryinnkeeperhackathon/hackathon3.JPG" },
  { id: 4, src: "/images/galleryinnkeeperhackathon/hackathon4.jpg" },
  { id: 5, src: "/images/galleryinnkeeperhackathon/hackathon5.JPG" },
  { id: 6, src: "/images/galleryinnkeeperhackathon/hackathon6.JPG" },
  { id: 7, src: "/images/galleryinnkeeperhackathon/hackathon7.JPG" },
];

export function InnkeeperHackathonGallery() {
  return (
    <>
      <ProjectDeliveryGalleryHero image={hackathonHeroImg} alt="Innkeeper Hackathon" />
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">INNKEEPER HACKATHON GALLERY</h3>
      <GalleryImageGrid images={pictures} />
    </>
  );
}
