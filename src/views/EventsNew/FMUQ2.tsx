import galleryData from "@/data/FMU_Q2.json";
import { EventPhotoGallery } from "@/components/Events/EventPhotoGallery";

export function FMUQ2() {
  const images = galleryData.foundersMeetup24Q2.map((item) => ({ id: item.id, src: item.image }));
  return <EventPhotoGallery images={images} />;
}
