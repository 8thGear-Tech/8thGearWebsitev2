import galleryData from "@/data/talentFair_24.json";
import { EventPhotoGallery } from "@/components/Events/EventPhotoGallery";

export function TalentFair24() {
  const images = galleryData.talentfair24.map((item) => ({ id: item.id, src: item.image }));
  return <EventPhotoGallery images={images} />;
}
