import { GalleryVideoGrid } from "./EventGalleryCards";

// NOTE: the CRA source's `eventsGalleryPagePictures` data set (src/data/gallerycards.json) points every
// entry at "./images/gallerycards/gallery1.jpg" / "gallery2.jpg" — neither file exists anywhere in the CRA
// repo (checked src/pages, public/images, and src/assets), so that picture grid was already dead/broken in
// the live site. It's intentionally omitted here rather than porting broken image links; the video grid
// below uses the same (working) YouTube embeds as the source.
const videos = [
  { id: 1, src: "https://www.youtube.com/embed/J0VLOPUIsi4" },
  { id: 2, src: "https://www.youtube.com/embed/J0VLOPUIsi4" },
  { id: 3, src: "https://www.youtube.com/embed/J0VLOPUIsi4" },
];

export function EventsGalleryPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-12">
      <h3 className="pb-6 text-center font-heading text-purple">EVENTS GALLERY</h3>
      <GalleryVideoGrid videos={videos} />
    </div>
  );
}
