import galleryData from "@/data/FMU_Q3.json";
import { EventPhotoGallery } from "@/components/Events/EventPhotoGallery";

// Note: the CRA source's FMU_Q3.json data is keyed "foundersMeetup24Q2" (a copy-paste
// leftover from the Q2 gallery) even though the images inside are the real Q3 photos —
// preserved as-is here since it's just a JSON key name, not a behavior change.
export function FMUQ3() {
  const images = galleryData.foundersMeetup24Q2.map((item) => ({ id: item.id, src: item.image }));
  return <EventPhotoGallery images={images} />;
}
