import piggeryHeroImg from "@/assets/images/hero/piggerytraininghero.jpg";
import { ProjectDeliveryGalleryHero } from "./ProjectDeliveryGalleryHero";
import { GalleryImageGrid } from "@/views/Events/EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/galleryImageCardsPiggery/piggerytraining1.jpg" },
  { id: 2, src: "/images/galleryImageCardsPiggery/piggerytraining2.jpg" },
  { id: 3, src: "/images/galleryImageCardsPiggery/piggerytraining3.jpg" },
  { id: 4, src: "/images/galleryImageCardsPiggery/piggerytraining4.jpg" },
  { id: 5, src: "/images/galleryImageCardsPiggery/piggerytraining5.jpg" },
];

export function PiggeryTrainingGallery() {
  return (
    <>
      <ProjectDeliveryGalleryHero image={piggeryHeroImg} alt="Piggery training" />
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">PIGGERY TRAINING GALLERY</h3>
      <GalleryImageGrid images={pictures} />
    </>
  );
}
