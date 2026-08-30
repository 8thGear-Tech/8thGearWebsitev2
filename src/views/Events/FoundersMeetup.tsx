import Image from "next/image";
import Link from "next/link";
import calendarIcon from "@/assets/images/founder'sMeetup/calenderIcon.svg";
import clockIcon from "@/assets/images/founder'sMeetup/clockicon.svg";
import locationIcon from "@/assets/images/founder'sMeetup/locationIcon.png";
import foundersHeroPic from "@/assets/images/founder'sMeetup/foundersheropic.png";

export function FounderMeetupPage() {
  return (
    <>
      <FounderMeetupHero />
      <EventsWriteUp />
    </>
  );
}

function FounderMeetupHero() {
  return (
    <div className="bg-[#f6f6f6] px-4 py-8 md:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-[#d6eed7] px-4 py-2 text-center text-sm font-bold text-[#5e8d70]">
            IN-PERSON EVENT
          </p>
          <h2 className="mt-4 font-heading text-2xl text-black lg:text-4xl">
            Founder&apos;s Meet up: CONNECT WITH CO-FOUNDERS, MEET POTENTIAL CLIENTS.
          </h2>
          <p className="pt-4 text-lg">Build valuable connections with entrepreneurs.</p>

          <div className="mt-4 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Image src={calendarIcon} alt="" className="h-5 w-5" />
              <span>TBD</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={clockIcon} alt="" className="h-5 w-5" />
              <span>TBD</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Image src={locationIcon} alt="" className="h-5 w-5" />
            <span>8thGear Hub, CMD Road, Magodo Secretariat, Lagos State.</span>
          </div>
        </div>

        <div className="text-center">
          <Image src={foundersHeroPic} alt="Founders Meetup" className="mx-auto w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}

function EventsWriteUp() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p>
        Founders Meetup is all about bringing Entrepreneurs, and those curious about Startups, together to share
        ideas while learning from each other! Some sessions have guest speakers and others have a topic of
        discussion the attendees focus on.
      </p>

      <div className="mt-8">
        <h3 className="font-heading">WHO SHOULD ATTEND?</h3>
        <ul className="ml-5 list-disc space-y-1 pt-2">
          <li>Startup founders</li>
          <li>Business owners</li>
          <li>Freelancers &amp; service providers (digital marketers, web developers, designers, etc.)</li>
          <li>Solo founders looking for founding team members</li>
          <li>Aspiring entrepreneurs who are either looking for one or more co-founders</li>
          <li>Anyone who wishes to expand their business network</li>
        </ul>

        <p className="pt-4">
          This event is free to attend. Join us for a fun day! For more startup events, visit this{" "}
          <Link href="/events" className="font-normal text-black underline">
            link
          </Link>
          .
        </p>
        <p>Feel free to invite other founders to join us as we meet every quarter!</p>
      </div>
    </div>
  );
}
