import itfHeroImg from "@/assets/images/hero/ITF.jpg";
import { ProjectDeliveryGalleryHero } from "./ProjectDeliveryGalleryHero";
import { GalleryImageGrid } from "@/views/Events/EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/itfgallery/itfone.JPG" },
  { id: 2, src: "/images/itfgallery/itftwo.JPG" },
  { id: 3, src: "/images/itfgallery/itfthree.JPG" },
  { id: 4, src: "/images/itfgallery/itffour.JPG" },
  { id: 5, src: "/images/itfgallery/itffive.JPG" },
  { id: 6, src: "/images/itfgallery/itfsix.JPG" },
  { id: 7, src: "/images/itfgallery/itfseven.JPG" },
  { id: 8, src: "/images/itfgallery/itfeight.JPG" },
  { id: 9, src: "/images/itfgallery/itfnine.JPG" },
  { id: 10, src: "/images/itfgallery/itften.JPG" },
  { id: 11, src: "/images/itfgallery/itfeleven.JPG" },
  { id: 12, src: "/images/itfgallery/itftwelve.JPG" },
];

export function ITFTrainingGallery() {
  return (
    <>
      <ProjectDeliveryGalleryHero image={itfHeroImg} alt="ITF training" />
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">ITF TRAINING GALLERY</h3>
      <GalleryImageGrid images={pictures} />
    </>
  );
}
