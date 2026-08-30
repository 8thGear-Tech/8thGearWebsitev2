import lsetfHeroImg from "@/assets/images/hero/lsetfhero.jpg";
import { ProjectDeliveryGalleryHero } from "./ProjectDeliveryGalleryHero";
import { GalleryImageGrid, GalleryVideoGrid } from "@/views/Events/EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/gallerylsetf/lsetf1.jpg" },
  { id: 2, src: "/images/gallerylsetf/lsetf2.jpg" },
  { id: 3, src: "/images/gallerylsetf/lsetf3.jpg" },
];

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/eTQOxk3Wzqw" },
  { id: 2, src: "https://www.youtube.com/embed/d_X-SxgeK_A" },
  { id: 3, src: "https://www.youtube.com/embed/MmizDJaXKFo" },
];

export function LSETFGallery() {
  return (
    <>
      <ProjectDeliveryGalleryHero image={lsetfHeroImg} alt="LSETF training" />
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">LSETF GALLERY</h3>
      <GalleryImageGrid images={pictures} />
      <GalleryVideoGrid videos={videos} />
    </>
  );
}
