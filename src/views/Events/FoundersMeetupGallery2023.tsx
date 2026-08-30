import { GalleryImageGrid } from "./EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupone.jpg" },
  { id: 2, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetuptwo.jpg" },
  { id: 3, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupthree.jpg" },
  { id: 4, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupfour.jpg" },
  { id: 5, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupfive.jpg" },
  { id: 6, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupsix.jpg" },
  { id: 7, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupseven.jpg" },
  { id: 8, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupeight.jpg" },
  { id: 9, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupnine.jpg" },
  { id: 10, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupten.jpg" },
  { id: 11, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetupeleven.jpg" },
  { id: 12, src: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetuptwelve.jpg" },
];

// Named `FoundersPictureGalleryCardsTwo` in the CRA source (src/pages/Events/foundersMeetupGallery.js), a
// second named export living alongside `FoundersMeetupGalleryPage` in the same file. Split into its own
// component/route here since it now backs a distinct page (`/founders-meetup-gallery-2023`).
export function FoundersMeetupGallery2023Page() {
  return (
    <div>
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">FOUNDERS MEETUP GALLERY 2023</h3>
      <GalleryImageGrid images={pictures} />
    </div>
  );
}
