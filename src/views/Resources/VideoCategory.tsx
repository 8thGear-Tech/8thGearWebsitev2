// Mirrors the CRA app's src/pages/Resources/VideoCategory.js (default export VideoDetail),
// composed from its former components/Hero/VideoCard.js (ResourceNavBar) and
// components/AllCards/ResourceVideoCard.js (DetailsCard/VideoCard).
import bmcVideoData from "@/data/bmcvideos.json";

function VideoCategoryHero() {
  return (
    <div className="flex h-60 items-center justify-center bg-teal px-4 text-center">
      <div className="max-w-xl rounded-brand bg-white p-6 shadow-brand-md sm:p-8">
        <h1 className="font-heading text-xl font-semibold">Business Model Canva</h1>
        <p className="mt-2 text-sm text-secondary">
          Created by: 8thGear Venture Studio.
          <br />
          Last Updated: February 1st, 2023.
          <br />
          No. of Videos: 6
        </p>
      </div>
    </div>
  );
}

function DetailsCard() {
  return (
    <div className="mx-auto -mt-10 max-w-3xl rounded-brand bg-white p-6 shadow-brand-md sm:p-8">
      <h2 className="font-heading text-lg font-semibold">Brief</h2>
      <p className="mt-2 text-secondary">
        A business model canvas (BMC) aids an entrepreneur in achieving clarity of thoughts regarding their business
        concern. It is a powerful tool that allows business owners to analyze and describe all aspects of their
        business in a single glance. It is a one-pager that helps in the simplification of any business procedure.
      </p>
    </div>
  );
}

function BmcVideoCard({ video, title, articletype }: { video: string; title: string; articletype: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-brand bg-white shadow-brand">
      <div className="aspect-video w-full">
        <iframe src={video} title={title} allowFullScreen className="h-full w-full border-0" />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base font-semibold">{title}</h3>
        <p className="text-sm text-secondary">{articletype}</p>
      </div>
    </div>
  );
}

export default function VideoDetail() {
  return (
    <div className="bg-grey-bg pb-16">
      <VideoCategoryHero />
      <div className="mx-auto max-w-350 px-4">
        <DetailsCard />
        <h2 className="pt-10 text-center font-heading text-purple">Videos In BMC</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bmcVideoData.Videoresources.map((video) => (
            <BmcVideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
