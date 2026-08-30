import Image from "next/image";
import { PillLinkButton } from "@/components/Buttons/PillButtons";

const majorEvents = [
  {
    title: "Founders Meetup",
    image: "/images/FMU_24_Q2/foundersmeetup.jpg",
    description:
      "A quarterly event that helps you travel the entrepreneurial journey with like-minded individuals to founders collaborate, synergize, spark inspiration, and motivation, and awaken the drive to chase dreams.",
    href: "/founders-meetup",
  },
  {
    title: "Demo Day",
    image: "/images/FMU_24_Q2/demoday.JPG",
    description:
      "It is a value-packed day where every member of our ecosystem comes together to witness the brilliance of creative minds and hear pitch ideas that have the potential to scale. This quarterly event is your gateway to being admitted into the 8thGear Venture Studio. Don't miss out!",
    href: "/demo-day",
  },
];

export function EventsPortfolio() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h3 className="pb-4 pt-5 text-center font-heading text-purple">MAJOR EVENTS</h3>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 pb-8 md:grid-cols-2 lg:px-12">
        {majorEvents.map((event) => (
          <div
            key={event.title}
            className="flex flex-col items-center rounded-[10px] bg-white p-4 text-center shadow-brand-md"
          >
            <h5 className="font-heading text-lg">{event.title}</h5>
            <div className="relative mt-3 aspect-video w-full overflow-hidden rounded">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="flex-1 py-3 text-sm">{event.description}</p>
            <PillLinkButton href={event.href}>Read More</PillLinkButton>
          </div>
        ))}
      </div>
    </div>
  );
}
