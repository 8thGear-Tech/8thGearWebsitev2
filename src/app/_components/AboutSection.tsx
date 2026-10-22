import Image from "next/image";
import accountsteamimg from "@/assets/images/Homepageassets/accountsteam.png";
import { PillLinkButton } from "@/components/Buttons/PillButtons";

export function AboutSection() {
  return (
    <div className="bg-[#f1f8ed] py-12">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-10 px-4 lg:flex-row lg:justify-center">
        <div className="w-full lg:w-5/12">
          <h3 className="font-heading text-purple font-medium text-2xl">ABOUT US</h3>
          <p className="mb-4">
            Your trusted partner in venture building, guiding startups and businesses towards sustainable growth and
            success.
          </p>
          <PillLinkButton href="/about">Who We Are</PillLinkButton>
        </div>
        <div className="w-full lg:w-5/12">
          <Image
            src={accountsteamimg}
            alt=""
            className="mx-auto block w-full rounded-[20px] shadow-[0_12px_12px_rgba(0,0,0,0.1)] lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
