import Image from "next/image";

export type GalleryImage = { id: number; src: string; alt?: string };
export type GalleryVideo = { id: number; src: string };

export function GalleryImageGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
      {images.map((image) => (
        <div key={image.id} className="relative aspect-[4/3] overflow-hidden rounded-[10px] shadow-brand-md">
          <Image src={image.src} alt={image.alt ?? ""} fill sizes="(min-width: 1024px) 33vw, 90vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function GalleryVideoGrid({ videos }: { videos: GalleryVideo[] }) {
  return (
    <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-4 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
      {videos.map((video) => (
        <div key={video.id} className="aspect-video w-full overflow-hidden rounded-[10px] shadow-brand-md">
          <iframe
            src={video.src.trim()}
            title="Gallery video"
            className="h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
