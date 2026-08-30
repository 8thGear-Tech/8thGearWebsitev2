import { AdvisoryTeamPic, Gerians } from "@/components/AllCards/TeamCard";

export function TeamPage() {
  return (
    <>
      <Gerians />
      <AdvisoryTeamPic />
      <JointheTeam />
    </>
  );
}

function JointheTeam() {
  return (
    <div className="bg-grey-bg px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-3xl pb-2 pt-8 text-center lg:pt-12">
        <h3 className="pb-2 font-heading text-purple">Become an 8thGearian</h3>
        <p className="text-sm text-secondary">
          Dream teams are not right for everyone. Some people prefer job security, and choose to work at companies
          that are more focused on stability and seniority, and less rigorous about performance management. Our
          model works best for people who value excellence and the opportunities it provides.
        </p>
        <p className="text-sm text-secondary">
          Does our positioning and mission resonate with you? If yes, we have been waiting to have you!
        </p>
      </div>
    </div>
  );
}
