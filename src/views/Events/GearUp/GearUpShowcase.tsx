import { PillExternalLinkButton } from "@/components/Buttons/PillButtons";

export function GearUpShowcase() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-12 [&_a]:text-purple [&_a]:underline [&_li]:my-1 [&_p]:mb-4 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
      <p>Greetings, Business Leaders &amp; Great Minds!</p>
      <p>
        <b>Join us for a remarkable opportunity &ndash; the GearUp Showcase!</b>
      </p>
      <p>
        GearUp Showcase is an inclusive event where a business in our venture studio intimates leaders and members of
        the community about their business to gain necessary exposure which is critical for most businesses to
        thrive.
      </p>
      <p>Discover the specifics of the event below:</p>
      <ul>
        <li>FREQUENCY : Monthly</li>
        <li>VENTURE IN FOCUS : MindAfrik</li>
        <li>PLATFORM: Virtual</li>
        <li>TIME: 4:00 PM - 5:00 PM</li>
        <li>DATE: Friday, November 24th, 2023.</li>
        <li>ADMISSION FEE: Free</li>
      </ul>
      <p>MindAfrik&rsquo;s purpose and drive is to educate, recaliberate and support minds for productive and positive living.</p>
      <p>
        Attendance is free but registration is compulsory. Kindly click the{" "}
        <a
          href="https://us06web.zoom.us/meeting/register/tZ0ld-mvqzMjH9SL9l0ht3S5KRsXy6ePioaJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>{" "}
        to confirm your participation.
      </p>
      <p>
        Don&rsquo;t miss this incredible opportunity to be a part of the next big wave of innovation.
        <br /> Reserve your spot today and secure your seat!
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
