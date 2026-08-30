import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { id: 1, image: "/images/talent_fair_2024/talent_fair_24.png", link: "/talent-fair-gallery", text: "Talent Fair 2024" },
  { id: 2, image: "/images/FMU_24_Q3/FMU_Q3_1.JPG", link: "/fmu-q3-gallery", text: "Founders Meetup Q3 2024" },
  { id: 3, image: "/images/FMU_24_Q2/FMU_Q2_1.PNG", link: "/fmu-q2-gallery", text: "Founders Meetup Q2 2024" },
  { id: 4, image: "/images/FMU_24_Q1/FMU_Q1_12.png", link: "/fmu-q1-gallery", text: "Founders Meetup Q1 2024" },
  { id: 5, image: "/images/FMU_24_Q1/FMU_Q1_13.png", link: "/4th-year-anniversary", text: "4th Year Anniversary" },
  {
    id: 6,
    image: "/images/galleryFoundersmeetup/foundersmeetuptwentytwentythree/foundersmeetup.jpg",
    link: "/founders-meetup-gallery-2023",
    text: "Founders Meetup Q1 2023",
  },
  { id: 7, image: "/images/galleryFoundersmeetup/foundersmeetup.jpg", link: "/founders-meetup-gallery", text: "Founders Meetup Q4 2022" },
  { id: 8, image: "/images/gallerydemoday/demodaysix.JPG", link: "/demo-day-gallery", text: "Demo Day Q3 2022" },
];

export function EventGallery() {
  return (
    <div className="bg-teal/5 pt-5">
      <div className="mx-auto max-w-350 px-4 py-12 lg:px-12">
        <h3 className="pb-6 text-center font-heading text-purple">GALLERY</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex flex-col overflow-hidden rounded-[10px] bg-white text-black no-underline shadow-brand-md"
            >
              <div className="relative aspect-video w-full">
                <Image src={item.image} alt={item.text} fill sizes="(min-width: 1024px) 33vw, 90vw" className="object-cover" />
              </div>
              <p className="px-3 py-4">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
