import galleryData from "@/data/FMU_Q1.json";
import { EventPhotoGallery } from "@/components/Events/EventPhotoGallery";

export function FMUQ1() {
  const images = galleryData.foundersMeetup24Q1.map((item) => ({ id: item.id, src: item.image }));
  return <EventPhotoGallery images={images} />;
}
