import Image from "next/image";
import Link from "next/link";
import hubservices from "@/assets/images/Homepageassets/HubServices.jpg";
import projects from "@/assets/images/Homepageassets/Projects.jpg";
import venture from "@/assets/images/Homepageassets/VentureStudio.jpg";

const offerings = [
  {
    image: hubservices,
    title: "Hub Services",
    body: (
      <>
        Supporting your venture with{" "}
        <Link href="/growth-advisory" className="text-shadow-purple-600 no-underline">
          Growth-Advisory,{" "}
        </Link>
        <Link href="/coworking" className="text-shadow-purple-600 no-underline">
          Co-working
        </Link>{" "}
        services &amp; B2B solutions in our{" "}
        <Link href="/msme-marketplace" className="text-shadow-purple-600 no-underline">
          MSME Marketplace
        </Link>
        .
      </>
    ),
  },
  {
    image: projects,
    title: <Link href="/initiatives" className="text-black no-underline">Initiatives</Link>,
    body: "Innovate. Execute. Succeed - The Project Experience.",
  },
  {
    image: venture,
    title: <Link href="/venture-studio" className="text-black no-underline">Venture Studio</Link>,
    body: "Crafting Success: Your Idea, Our Expertise, Thriving Ventures.",
  },
];

export function Service() {
  return (
    <div className="bg-[#f1f8ed] pb-12">
      <h3 className="pt-12 text-center font-heading text-purple font-medium text-2xl">OFFERINGS</h3>
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-4 pt-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {offerings.map((offer, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-[20px] bg-white text-center shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
            <Image src={offer.image} alt="" className="w-full rounded-t-[20px]" />
            <div className="px-4 pb-3">
              <h4 className="mt-4 font-heading font-medium text-xl mb-2">{offer.title}</h4>
              <p>{offer.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
