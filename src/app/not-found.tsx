import Image from "next/image";
import img404 from "@/assets/images/404.png";
import { HomeBtn } from "@/components/Buttons/PillButtons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-4 py-16 md:flex-row md:items-center">
      <div className="w-full md:w-1/2">
        <Image src={img404} alt="Page not found" className="w-full" />
      </div>

      <div className="w-full text-center md:w-1/2 md:text-left">
        <h3 className="mb-4">
          <strong>UH OH! Page Not Found</strong>
        </h3>
        <p className="text-secondary">
          The page you are looking for does not exist. Please click on the button below to go back to the homepage
        </p>
        <div className="mt-4 flex justify-center md:justify-start">
          <HomeBtn />
        </div>
      </div>
    </div>
  );
}
