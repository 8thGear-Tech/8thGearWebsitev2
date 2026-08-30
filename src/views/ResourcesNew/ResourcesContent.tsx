// Mirrors the CRA app's src/pages/ResourcesNew/ResourcesContent.jsx.
//
// The original toggled between a mobile "tab" layout and a desktop layout via a
// `activeSection` state, but the mobile block was hardcoded with a permanent
// Bootstrap `d-none` class (never actually shown at any viewport) while the desktop
// block used a permanent `d-block`. So the toggle buttons and their state were dead
// code — this only ever rendered the desktop two-column video list. Simplified here to
// just that, dropping the unreachable mobile markup and its (unused) `useState`.
import { FaYoutube } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

type Video = {
  index: number;
  videoLink: string;
  videoTitle: string;
  videoText: string;
};

const knowledgeCenter: Video[] = [
  {
    index: 1,
    videoLink: "https://www.youtube.com/embed/gdW8XHsHNoA",
    videoTitle: "Business Model Canvas",
    videoText:
      "A business model canvas is a strategic tool used to quickly and easily define and communicate a business idea or concept.",
  },
  {
    index: 2,
    videoLink: "https://www.youtube.com/embed/IAwPlkUx4_Y",
    videoTitle: "Nigerian Startup ACT",
    videoText:
      "As a Founder, how much do you know about the Startup ACT and its enormous benefits to you as a Business Owner?",
  },
];

const startingYourBusiness: Video[] = [
  {
    index: 1,
    videoLink: "https://www.youtube.com/embed/DwuT52ANalI",
    videoTitle: "ABC of Business Accounting",
    videoText:
      "The importance of Startup Founders having their accounting books right and various source documents that every business must have.",
  },
  {
    index: 2,
    videoLink: "https://www.youtube.com/embed/wJRBSeEB3FQ",
    videoTitle: "Customer Segementation",
    videoText: "",
  },
  {
    index: 3,
    videoLink: "https://www.youtube.com/embed/UKB0m6O8ZRk",
    videoTitle: "Keeping accounting records",
    videoText:
      "You don't have to have a full-time accountant working in your business if you can't afford it yet. All you need to do is to meticulously keep the basic records, and then you can have an accountant on your retainer.",
  },
];

function VideoColumn({ videos }: { videos: Video[] }) {
  return (
    <div className="space-y-10">
      {videos.map((video) => (
        <div key={video.index} className="text-center">
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-brand">
            <iframe src={video.videoLink} title={video.videoTitle} className="h-full w-full border-0" />
          </div>
          <div className="py-2 text-left">
            <h4 className="py-2 text-xl">{video.videoTitle}</h4>
            <p className="text-sm leading-snug font-normal">{video.videoText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResourcesContent() {
  return (
    <div className="bg-grey-bg pt-3 pb-10 text-center">
      <h3 className="py-4 font-heading text-purple">KNOWLEDGE CENTER</h3>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <VideoColumn videos={knowledgeCenter} />
        </div>
        <div className="lg:col-span-4">
          <VideoColumn videos={startingYourBusiness} />
        </div>
      </div>
      <div className="px-2 py-6">
        <a
          href="https://www.youtube.com/@8thgearhub"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 text-black no-underline"
        >
          <FaYoutube className="text-xl text-red-600" />
          <p className="mb-0">Visit Youtube for more videos</p>
          <GoArrowRight className="text-xl font-normal" />
        </a>
      </div>
    </div>
  );
}
