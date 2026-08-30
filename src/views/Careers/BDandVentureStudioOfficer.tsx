import Image from "next/image";
import Link from "next/link";
import logos from "@/assets/images/logos.png";
import { JointheTeamBtn } from "@/components/Buttons/PillButtons";

export function BDandVentureStudioOfficer() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
      <Link href="/">
        <Image src={logos} alt="" width={90} height={110} className="h-[110px] w-[90px]" />
      </Link>

      <h1 className="mt-4 font-heading text-2xl">Business Development/Venture Studio Officer</h1>
      <p className="m-0">Work type: Onsite</p>
      <p className="m-0">Contract type: Full time (Entry level)</p>
      <p className="m-0">Deadline: March 1st, 2023</p>
      <p>
        <a
          href="https://bit.ly/8Gjoinourteam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1.1rem] text-purple hover:underline"
        >
          Join the team
        </a>
      </p>

      <h2 className="mt-8 font-heading text-lg font-semibold text-[#37352f]">Job Roles and Responsibilities</h2>
      <p>Core responsibilities include:</p>
      <ul className="list-disc space-y-2 pl-5 text-secondary">
        <li>Negotiation meetings, Pitches & Presentations for 8thGear Hub.</li>
        <li>Response to RFPs, BIDs, Online Applications for 8thGear Hub.</li>
        <li>
          Preparation of concept notes, business proposals, pitch decks and other communication materials for
          8thGear Hub and external clients.
        </li>
        <li>Business Strategy support to Portfolio companies and Hub customers.</li>
        <li>Customer retention for our Hub services clients.</li>
        <li>8thGear Hub Services Sales.</li>
        <li>Build rapport with new and existing customers.</li>
        <li>Develop and implement an active growth strategy for 8thGear.</li>
        <li>Ability to meet up with KPI&rsquo;s set for the year.</li>
        <li>Upselling and cross-selling current customers.</li>
        <li>Coordinating with the Marketing & Comms team on leads generation for 8thGear.</li>
        <li>Overseeing the activities and performance of the sales analysts and interns.</li>
        <li>Conduct research to identify new markets and customer needs.</li>
        <li>Having in-depth knowledge of the services rendered and value proposition.</li>
        <li>Reporting on successes and areas that need improving.</li>
        <li>
          Provide after sales support to clients and collate feedback via customer satisfaction surveys.
        </li>
        <li>
          Promote the company&rsquo;s services addressing or predicting clients objectives and handling
          objections.
        </li>
        <li>Promoting sales on all hub services.</li>
      </ul>

      <h2 className="mt-8 font-heading text-lg font-semibold text-[#37352f]">Competencies and Skills Required</h2>
      <ul className="list-disc space-y-2 pl-5 text-secondary">
        <li>Bachelor&apos;s degree or equivalent.</li>
        <li>Working Knowledge of the Tech Start-up/Growth Strategy/ Talent Development/Edu-Tech space.</li>
        <li>1-2 years of Business Development experience.</li>
        <li>Ability to take initiative and manage critical relationships.</li>
        <li>Excellent written and verbal communication skills.</li>
        <li>Requires reasoning ability and good independent judgment.</li>
        <li>A deep understanding of the trends in the industry.</li>
        <li>Ability to operate in a fast-paced, flat-structured environment.</li>
      </ul>

      <div className="mb-4 mt-8">
        <JointheTeamBtn />
      </div>
    </div>
  );
}
