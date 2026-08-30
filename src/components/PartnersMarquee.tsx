import Image, { type StaticImageData } from "next/image";
import german from "@/assets/images/partners/german.png";
import funded from "@/assets/images/partners/co-funded.png";
import giz from "@/assets/images/partners/giz.png";
import usadf from "@/assets/images/partners/usadf.png";
import digital from "@/assets/images/partners/digital.png";
import lsetf from "@/assets/images/partners/lsetf.png";
import leap from "@/assets/images/partners/LEAP-Africa.png";
import lagos from "@/assets/images/partners/lagosI-logo.png";
import mtn from "@/assets/images/partners/mtn.png";
import vmware from "@/assets/images/partners/vmware.png";
import isn from "@/assets/images/partners/isn_logo.png";
import zoho from "@/assets/images/partners/zoho.png";
import fcmb from "@/assets/images/partners/fcmb.png";
import cisco from "@/assets/images/partners/cisco.png";
import afrilabs from "@/assets/images/partners/Afrilabs.png";
import skills from "@/assets/images/partners/skills.png";

const defaultLogos = [german, funded, giz, usadf, digital, lsetf, leap, lagos, mtn, vmware, isn, zoho, fcmb, cisco, afrilabs, skills];

export function PartnersMarquee({
  logos = defaultLogos,
  title = "OUR PARTNERS",
}: {
  logos?: StaticImageData[];
  title?: string | null;
}) {
  // Duplicated so the flex track is exactly 2x the width of one set: translating
  // it by -50% always lands on an identical copy of the start, making the loop seamless.
  const track = [...logos, ...logos];

  return (
    <div>
      {title && <h3 className="pb-3 pt-5 text-center font-heading text-purple">{title}</h3>}
      <div className="relative z-[1] mx-auto h-[150px] w-full overflow-hidden">
        <div className="flex w-max flex-nowrap items-center gap-16 [animation:marquee-scroll_45s_linear_infinite]">
          {track.map((src, index) => (
            <div key={index} className="relative h-[100px] w-[140px] shrink-0">
              <Image
                src={src}
                alt="Partner logo"
                fill
                loading="eager"
                sizes="140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
