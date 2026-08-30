// Mirrors the CRA app's src/pages/Resources/VideoReadMore.js.
import Image from "next/image";
import resourceshero from "@/assets/images/resources/resourceshero.png";

function VideoResourceHero() {
  return (
    <div className="relative flex min-h-[50vh] items-center px-4 py-10 lg:min-h-[70vh]">
      <Image src={resourceshero} alt="" fill sizes="100vw" className="-z-10 object-cover" priority />
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="font-heading text-2xl text-white lg:text-3xl">
          Lörem ipsum startup teotris fysisk cd. Tukrogåligen transparens. Innovationskontor biojäd, samt
          gamification.
        </h2>
      </div>
    </div>
  );
}

const repeatedParagraph =
  "For entrepreneurship, combining company building with venture funding combining company building with venture funding. For entrepreneurship, combining company building with venture funding, combining company building with venture funding. FFor entrepreneurship, combining company building with venture funding combining company building with venture funding. For entrepreneurship, combining company building with venture funding, combining company building";

function Video() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12">
      <div className="mx-auto aspect-[3/2] w-full max-w-[600px] overflow-hidden rounded-xl shadow-brand">
        <iframe
          src="https://www.youtube.com/embed/RH-Sv2J1PCU"
          title="managed-services"
          allow="autoplay; fullscreen; picture-in-picture"
          className="h-full w-full border-0"
        />
      </div>
      <div className="mt-4 text-center">
        <h3>Managed Services</h3>
        <p>Let’s Get You to Our Unlimited Offers on Tech</p>
      </div>
      <div className="mx-auto mt-4 max-w-3xl space-y-4 text-secondary">
        <p>{repeatedParagraph}</p>
        <p>{repeatedParagraph}</p>
        <p>{repeatedParagraph}</p>
        <p>{repeatedParagraph}</p>
      </div>
    </div>
  );
}

export default function VideoReadMore() {
  return (
    <>
      <VideoResourceHero />
      <Video />
    </>
  );
}
