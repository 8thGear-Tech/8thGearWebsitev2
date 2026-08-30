// Mirrors the CRA app's src/pages/ResourcesNew/Resources.jsx (named export ResourcesNew).
import ResourcesContent from "./ResourcesContent";

function ResourcesHero() {
  return (
    <div className="flex min-h-105 items-center justify-center bg-[url('/images/resourcesNew/resources_hero.png')] bg-cover bg-center px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold text-white lg:text-[2.8rem]">
          Accelerate Your Business <span className="text-amber-400">Growth</span>
        </h1>
        <p className="mt-3 text-lg text-white">
          Gain the insights and strategies needed to succeed in today’s market.
        </p>
      </div>
    </div>
  );
}

export const ResourcesNew = () => {
  return (
    <div>
      <ResourcesHero />
      <ResourcesContent />
    </div>
  );
};
