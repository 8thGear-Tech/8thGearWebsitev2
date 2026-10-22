import Image from "next/image";
import Link from "next/link";
import logos from "@/assets/images/logos.png";
import { JointheTeamBtn } from "@/components/Buttons/PillButtons";

export function AccountingIntern() {
  return (
    <div className="mx-auto max-w-350 px-6 py-12 sm:px-10">
      <Link href="/">
        <Image src={logos} alt="" width={90} height={110} className="h-27.5 w-22.5" />
      </Link>

      <h1 className="mt-4 font-heading text-2xl">Accounting Intern</h1>
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
        <li>Developing an in-depth knowledge of organizational products and process.</li>
        <li>Assisting in the preparation of budgets and managements activities.</li>
        <li>Managing records and receipts.</li>
        <li>Reconciling daily, monthly and yearly transactions.</li>
        <li>Ensure all expenses are within assigned project budget.</li>
        <li>Vat filling.</li>
        <li>Participate in financial audits.</li>
        <li>Track bank deposits and payments made.</li>
        <li>Ensure that financial transactions are properly updated and recorded.</li>
        <li>Assist with budget preparation.</li>
        <li>Quarterly and monthly statement of affairs for all companies.</li>
        <li>Manage the preparation of balance sheets, income statements, expense reports, etc.</li>
        <li>Identify and resolve invoicing issues, accounting discrepancies and other financial related issues.</li>
        <li>Reconciling the organizations&rsquo; bank statements.</li>
        <li>Preparing invoices and receipts.</li>
        <li>Proper disbursement of funds.</li>
        <li>Track investments and maintain relevant cash reserves by all portfolio companies.</li>
        <li>Resolve financial disputes raised by team.</li>
        <li>Being a key point of contact for other departments on financial and accounting matters.</li>
        <li>Preparing financial on relevant projects.</li>
        <li>Supporting with projects and tasks when required.</li>
      </ul>

      <h2 className="mt-8 font-heading text-lg font-semibold text-[#37352f]">Competencies and Skills Required</h2>
      <ul className="list-disc space-y-2 pl-5 text-secondary">
        <li>Bachelor&rsquo;s degree in finance, accounting, or relevant field.</li>
        <li>0-2 years&rsquo; experience in a similar role.</li>
        <li>Knowledge of financial regulations and accounting processes.</li>
        <li>Outstanding analytical and time management skills.</li>
        <li>Strong attention to detail.</li>
        <li>Excellent written and verbal communication skills.</li>
      </ul>

      <div className="mb-4 mt-8">
        <JointheTeamBtn />
      </div>
    </div>
  );
}
