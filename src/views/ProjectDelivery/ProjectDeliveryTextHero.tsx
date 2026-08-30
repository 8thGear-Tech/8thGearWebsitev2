// Shared hero + content section used by the Enterprise-Support, Ecosystem-Events and Talent-Development
// pages. In the CRA source (EnterpriseSupport.js / EcosystemEvents.js / TalentsDevelopment.js) each page
// renders an identical ".EnterpriceHero" block (which per _projectDelivery.scss has no background image,
// just the dark hero-text overlay styling) with the same heading/quote copy, followed by a single
// title+paragraph pulled from ProjectDeliveryManagedServicesCardMap.json. Consolidated here since the
// three pages are otherwise a byte-for-byte duplicate.
export function ProjectDeliveryTextHero() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,rgba(0,164,149,0.9)_0%,rgba(130,30,107,0.95)_100%)] px-4 py-16 text-center text-white">
      <h1 className="max-w-2xl font-heading text-3xl lg:text-4xl">Great people building enduring ventures</h1>
      <p className="italic text-white">&quot;Get ready to experience the future!&quot;</p>
      <p className="max-w-xl text-white">
        Join Us at #DemoDay to witness the latest innovation and groundbreaking technologies that are changing
        the world.
      </p>
    </section>
  );
}

export function ProjectDeliveryContentSection({ title, text }: { title: string; text: string }) {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-14 text-center">
      <h2 className="mb-4 font-heading text-purple">{title}</h2>
      <p className="text-secondary">{text}</p>
    </div>
  );
}
