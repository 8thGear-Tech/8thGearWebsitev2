"use client";

import { useState } from "react";
import Link from "next/link";

type UpcomingEvent = { id: number; date: string; event: string };
type PastEvent = {
  id: number;
  date: string;
  event: string;
  link: string;
  format: string;
  time: string;
};

const upcomingEvents: UpcomingEvent[] = [{ id: 1, date: "TBD", event: "..." }];

const pastEvents: PastEvent[] = [
  {
    id: 1,
    date: "January 2024",
    event: "Founders Meetup Q1",
    link: "/fmu-q1-gallery",
    format: "Physical and Virtual",
    time: "3pm - 6pm",
  },
  {
    id: 2,
    date: "June 2024",
    event: "Founders Meetup Q2",
    link: "/fmu-q2-gallery",
    format: "Physical and Virtual",
    time: "3pm - 6pm",
  },
  {
    id: 3,
    date: "30th July, 2024",
    event: "Employer's Forum",
    link: "/fmu-q3-gallery",
    format: "Physical and Virtual",
    time: "11am - 1pm",
  },
  {
    id: 4,
    date: "2nd August, 2024",
    event: "Talent Fair",
    link: "/talent-fair-gallery",
    format: "Physical and Virtual",
    time: "9am",
  },
];

const tabClasses = (active: boolean) =>
  `rounded-full px-5 py-2 text-sm font-medium transition-colors ${
    active ? "bg-purple-hover text-white" : "border border-purple text-purple hover:bg-purple hover:text-white"
  }`;

export function EventsCalendar() {
  const [showPast, setShowPast] = useState(false);

  return (
    <div className="mt-5 flex flex-col pt-4">
      <div className="flex items-center justify-center">
        <h3 className="pb-3 pt-5 text-center font-heading text-purple">EVENTS CALENDAR</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button type="button" onClick={() => setShowPast(false)} className={tabClasses(!showPast)}>
          Upcoming Events
        </button>
        <button type="button" onClick={() => setShowPast(true)} className={tabClasses(showPast)}>
          Past Events
        </button>
      </div>

      {!showPast && (
        <div className="my-3 mx-3 md:mx-12">
          <div className="overflow-x-auto">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex min-w-[600px] flex-row items-center justify-between bg-[#edccec] px-3 py-3"
              >
                <h3 className="text-lg font-medium text-[#1c1c1c]">{event.date}</h3>
                <h3 className="text-lg font-medium text-[#1c1c1c]">{event.event}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {showPast && (
        <div className="my-3 mx-3 md:mx-12">
          <div className="overflow-x-auto">
            {pastEvents.map((event) => (
              <div key={event.id}>
                <div className="flex min-w-[600px] flex-row items-center justify-between bg-[#edccec] px-3 py-3">
                  <h3 className="text-lg font-medium text-[#1c1c1c]">{event.date}</h3>
                  <h3 className="text-lg font-medium text-[#1c1c1c]">{event.event}</h3>
                  <Link href={event.link} className="text-base font-medium text-purple-hover">
                    Gallery
                  </Link>
                </div>
                <div className="flex min-w-[600px] flex-row items-center justify-between px-3 py-3">
                  <h3 className="text-base font-medium text-[#535353]">{event.time}</h3>
                  <h3 className="text-base font-medium text-[#535353]">...</h3>
                  <h3 className="text-base font-medium text-[#535353]">{event.format}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
