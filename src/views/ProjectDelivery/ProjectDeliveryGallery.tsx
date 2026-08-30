import { GalleryVideoGrid } from "@/views/Events/EventGalleryCards";

// NOTE: the CRA source's `projectDeliveryPictures` data set (src/data/gallerycards.json) points every
// entry at "./images/gallerycards/gallery1.jpg" / "gallery2.jpg" — neither file exists anywhere in the CRA
// repo (checked src/pages, public/images, and src/assets, same as the already-converted Events gallery
// page), so that picture grid is omitted here rather than porting broken image links.
//
// The `projectDeliveryVideos` data set has one usable entry (id 15, "https://www.youtube.com/embed/watch?v=
// PEnuHN-Mqvg") whose embed URL is malformed (should be "/embed/PEnuHN-Mqvg"); it's corrected below. The
// other two entries (ids 16-17) use a literal "VIDEO_ID" placeholder with no real video behind it and are
// dropped.
const videos = [{ id: 1, src: "https://www.youtube.com/embed/PEnuHN-Mqvg" }];

export function ProjectDeliveryGallery() {
  return (
    <div className="mx-auto max-w-350 px-4 py-12 lg:px-12">
      <h3 className="pb-6 text-center font-heading text-purple">PROJECT DELIVERY GALLERY</h3>
      <GalleryVideoGrid videos={videos} />
    </div>
  );
}
