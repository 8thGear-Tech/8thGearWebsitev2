import { GalleryImageGrid, GalleryVideoGrid } from "./EventGalleryCards";

const pictures = [
  { id: 1, src: "/images/galleryFourthAnniv/annivtwo.jpg" },
  { id: 2, src: "/images/galleryFourthAnniv/annivthree.jpg" },
  { id: 3, src: "/images/galleryFourthAnniv/annivfour.jpg" },
  { id: 4, src: "/images/galleryFourthAnniv/annivfive.jpg" },
  { id: 5, src: "/images/galleryFourthAnniv/annivsix.jpg" },
  { id: 6, src: "/images/galleryFourthAnniv/annivseven.jpg" },
  { id: 7, src: "/images/galleryFourthAnniv/anniveight.jpg" },
  { id: 8, src: "/images/galleryFourthAnniv/annivnine.jpg" },
  { id: 9, src: "/images/galleryFourthAnniv/annivten.jpg" },
];

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/1VzsewXbQdg" },
  { id: 2, src: "https://www.youtube.com/embed/2GCAP-4QzgM" },
  { id: 3, src: "https://www.youtube.com/embed/-_UUX-NKUSg" },
];

export function FourthYearAnniversaryPage() {
  return (
    <div>
      <h3 className="pb-2 pt-10 text-center font-heading text-purple">4TH YEAR ANNIVERSARY</h3>
      <GalleryImageGrid images={pictures} />
      <GalleryVideoGrid videos={videos} />
    </div>
  );
}
