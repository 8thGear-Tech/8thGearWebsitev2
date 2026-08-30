import Image from "next/image";
import { BsChatDotsFill, BsLinkedin } from "react-icons/bs";
import teamData from "@/data/8thGerains.json";
import advisoryData from "@/data/advisory.json";

type TeamMember = {
  image1: string;
  name1: string;
  title1?: string;
  id: string;
  link?: string;
  chatLink?: string;
};

type AdvisoryMember = {
  id: number;
  image: string;
  name: string;
  position: string;
  link: string;
};

// The JSON data carries legacy CRA-era relative import paths (e.g. "../../images/team/x.png").
// The actual files live in the public folder, so only the filename matters here.
function teamImageSrc(path: string) {
  return `/images/team/${path.split("/").pop()}`;
}

function advisoryImageSrc(path: string) {
  return `/images/advisoryImage/${path.split("/").pop()}`;
}

function TeamCard({ image1, name1, title1, link, chatLink, cardClassName = "" }: TeamMember & { cardClassName?: string }) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-brand border-x-[5px] border-b-[5px] border-teal-dark bg-white shadow-brand ${cardClassName}`}
    >
      <div className="relative h-[400px] w-full">
        <Image src={teamImageSrc(image1)} alt={name1} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-center gap-1 px-4 py-5 text-center">
        <p className="mt-1 text-sm font-medium">{name1}</p>
        {title1 && <p className="text-sm text-secondary">{title1}</p>}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name1} on LinkedIn`}
            className="mt-2 text-xl text-purple transition-colors hover:text-purple-hover"
          >
            <BsLinkedin />
          </a>
        )}

        {chatLink && (
          <a
            href={chatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm text-purple shadow-brand"
          >
            <BsChatDotsFill />
            Talk to Big Fay
          </a>
        )}
      </div>
    </div>
  );
}

export function Gerians() {
  return (
    <div className="mx-auto max-w-[1400px] px-4">
      <h3 className="mb-5 mt-5 text-center font-heading text-purple">OUR CORE TEAM</h3>
      <div className="flex flex-wrap justify-center gap-6 pb-5">
        {(teamData.team as TeamMember[]).map((card) => (
          <div key={card.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <TeamCard {...card} cardClassName="lg:w-3/4 lg:mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EIR() {
  return (
    <div className="mx-auto max-w-[1400px] px-4">
      <h3 className="mb-5 mt-5 text-center font-heading text-purple">ENTREPRENEURS IN RESIDENCE</h3>
      <div className="flex flex-wrap justify-center gap-6 pb-5">
        {(teamData.EIRcard as TeamMember[]).map((card) => (
          <div key={card.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <TeamCard {...card} cardClassName="lg:w-3/4 lg:mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvisoryCard({ image, name, position, link }: AdvisoryMember) {
  return (
    <div className="group relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-brand bg-slate shadow-brand-lg">
      <Image
        src={advisoryImageSrc(image)}
        alt={name}
        fill
        sizes="300px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 pb-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-xs text-white">{position}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} className="mt-1 text-lg text-white">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export function AdvisoryTeamPic() {
  return (
    <div className="bg-teal/5 py-5">
      <div className="mx-auto max-w-[1400px] px-4">
        <h3 className="pb-3 pt-5 text-center font-heading text-purple">Advisory Board</h3>
        <div className="flex flex-wrap justify-center gap-8 pb-5">
          {(advisoryData.FirstHoverCard as AdvisoryMember[]).map((card) => (
            <AdvisoryCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
