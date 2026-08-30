import Image from "next/image";
import Link from "next/link";
import logos from "@/assets/images/logos.png";
import { JointheTeamBtn } from "@/components/Buttons/PillButtons";

export function HRIntern() {
  return (
    <div className="mx-auto max-w-350 px-6 py-12 sm:px-10">
      <Link href="/">
        <Image src={logos} alt="" width={90} height={110} className="h-27.5 w-22.5" />
      </Link>

      <h1 className="mt-4 font-heading text-2xl">HR Intern</h1>
      <p className="m-0">Work type: Onsite</p>
      <p className="m-0">Contract type: Intern (Corper)</p>
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
        <li>
          Support talent acquisition activities such as CV screening, interview scheduling, reference checks and
          onboarding etc.
        </li>
        <li>Assist with performance management process.</li>
        <li>Supports in the implementation of all HR initiatives across the organization.</li>
        <li>
          Maintains and updates relevant databases (recruitment, performance history, employee database,
          organization structures, training, etc.) may be required by the management to conduct various analysis
          and prepare relevant reports to support decision making by the leadership.
        </li>
        <li>Tracks organization compliance with set deadlines for various activities such as performance management etc.</li>
        <li>Provides daily support and resolves employee issues; escalates to management if unable to resolve.</li>
        <li>
          Provides logistics support, where required for various events/activities for the Department (interviews,
          training, team-building, meetings etc.)
        </li>
        <li>Prepares letters as may be required.</li>
        <li>
          Responsible for maintaining staff records and also for ensuring that all documents are appropriately
          filed in a timely manner.
        </li>
        <li>Serve as point of contact with benefit vendors and administrators such as HMO, Group Life Insurance etc.</li>
        <li>Assists periodic unit planning and budgeting activities.</li>
        <li>Complete exit documentation and schedule exit interviews.</li>
        <li>Performs other duties as assigned.</li>
      </ul>

      <h2 className="mt-8 font-heading text-lg font-semibold text-[#37352f]">Competencies and Skills Required</h2>
      <ul className="list-disc space-y-2 pl-5 text-secondary">
        <li>Bachelor&rsquo;s degree in any relevant field.</li>
        <li>0-2 years of experience in HR Operations.</li>
        <li>Organizational and time management skills.</li>
        <li>Excellent interpersonal relationship skills.</li>
        <li>Must be team oriented and results focused.</li>
        <li>Exemplary communication skills.</li>
      </ul>

      <div className="mb-4 mt-8">
        <JointheTeamBtn />
      </div>
    </div>
  );
}
