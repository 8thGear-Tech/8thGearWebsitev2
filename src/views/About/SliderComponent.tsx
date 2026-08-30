import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

const slidesData = [
  {
    image: "/images/team/damilola.png",
    title: "Damilola Obidairo",
    staff: "CEO",
    link: "https://www.linkedin.com/in/damilolaobidairo/",
  },
  {
    image: "/images/advisoryImage/Sholeye.jpg",
    title: "Olatutu Soleye",
    staff: "Governance & Ethics Advisor",
    link: "https://www.linkedin.com/in/olatutu-sholeye-470a9948/",
  },
  {
    image: "/images/team/rotimi.png",
    title: "Rotimi Owowa",
    staff: "Board Chairman",
    link: "https://www.linkedin.com/in/rotimi-owowa-bab8b113/",
  },
  {
    image: "/images/team/habeeb.png",
    title: "Habeeb Gbenle",
    staff: "Non-Executive Director",
    link: "https://www.linkedin.com/in/gbenle-habeeb-aca-cife-653aaa92/",
  },
  {
    image: "/images/advisoryImage/sutinyang.png",
    title: "Sutin Yang",
    staff: "Partnerships Advisor",
    link: "https://www.linkedin.com/in/sutiny/",
  },
  {
    image: "/images/advisoryImage/seyibioku.png",
    title: "Seyi Bioku",
    staff: "Advisor & Board Secretary",
    link: "https://www.linkedin.com/in/seyi-bioku-870539116/",
  },
  {
    image: "/images/team/omowunmi.png",
    title: "Omowunmi Obidairo",
    staff: "Executive Director",
    link: "https://www.linkedin.com/in/omowunmiobidairo/",
  },
  {
    image: "/images/advisoryImage/yinkaogunleye.png",
    title: "Yinka Ogunleye",
    staff: "Strategy Advisor",
    link: "#",
  },
];

// Duplicated so the track is exactly 2x one set's width — translating by -50% loops seamlessly.
const track = [...slidesData, ...slidesData];

export function SliderComponent() {
  return (
    <div className="mx-auto max-w-350 px-4 py-3">
      <h3 className="mb-5 mt-5 text-center font-heading text-purple">BOARD OF DIRECTORS &amp; ADVISORS</h3>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block [animation:marquee-scroll_40s_linear_infinite]">
          {track.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target={slide.link === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="mr-4 inline-block w-66.75 align-top"
            >
              <div className="overflow-hidden rounded-b-lg">
                <div className="relative h-63.75 w-full">
                  <Image src={slide.image} alt={slide.title} fill sizes="267px" className="object-cover" />
                </div>
                <div className="rounded-b-lg bg-[#152425] px-3 py-3 text-center text-white">
                  <p className="mb-0 font-heading text-lg">{slide.title}</p>
                  <p className="mb-1 text-sm">{slide.staff}</p>
                  <div className="flex justify-center">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
