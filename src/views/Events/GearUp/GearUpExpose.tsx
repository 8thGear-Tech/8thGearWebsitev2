import { PillExternalLinkButton } from "@/components/Buttons/PillButtons";

export function GearUpExpose() {
  return (
    <div className="mx-auto max-w-350 px-4 pb-16 pt-12 [&_a]:text-purple [&_a]:underline [&_li]:my-1 [&_p]:mb-4 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
      <p>Greetings, Visionary Business Minds,</p>
      <p>
        <b>Join us for a remarkable opportunity - GearUp Expose!</b>
      </p>
      <p>
        Embracing the path of an entrepreneur can indeed be challenging. Kudos to your choice &ndash; your
        determination paves the way for a brighter Africa. Keep forging ahead; your efforts will soon converge with
        celestial success. GearUp Expose has been meticulously designed with you in mind. A timeless African adage
        resonates deeply: &ldquo;To journey swiftly, venture alone; to journey far, venture together.&rdquo;
      </p>
      <p>
        GearUp Expose stands as an inclusive program, equipping entrepreneurs with the indispensable skills and
        wisdom imperative for business expansion.
      </p>
      <p>Discover the specifics of the event below:</p>
      <ul>
        <li>FREQUENCY : Monthly</li>
        <li>ADMISSION FEE: Free</li>
        <li>TIME: 4:00 PM - 5:00 PM</li>
        <li>PLATFORM: Virtual</li>
        <li>DATE: August 23rd, 2023</li>
      </ul>
      <p>
        Attendance is free but registration is compulsory. Kindly click the{" "}
        <a
          href="https://us06web.zoom.us/meeting/register/tZIvcOCprzsiE9wh14Jlf0CSGgFKZd9V6T4L"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>{" "}
        to confirm your participation.
      </p>
      <p>
        Eagerly anticipating the chance to connect.
        <br /> Wishing you a day brimming with accomplishment.
      </p>
      <p>
        Thank you. <br /> <br />
        Warm Regards.
      </p>
      <PillExternalLinkButton
        href="https://us06web.zoom.us/meeting/register/tZcrde-rpj0iGdJB4yZ75Srgw5Ba3-9D2Slq"
        className="w-40"
      >
        Register Now
      </PillExternalLinkButton>
    </div>
  );
}
