import { ProjectDeliveryTextHero, ProjectDeliveryContentSection } from "./ProjectDeliveryTextHero";

// NOTE: the CRA source's EcosystemEvents.js reads `Data.ProjectDeliveryContentTwo` from
// ProjectDeliveryManagedServicesCardMap.json, whose only entry is titled "Talent Development and
// Employment" — not ecosystem-events content. That's an apparent copy/paste mix-up in the original app
// (this component looks cloned from EnterpriseSupport.js without updating which data key it reads), but
// it's what's currently live in production, so the same content is preserved here rather than invented.
export function EcosystemEvents() {
  return (
    <div>
      <ProjectDeliveryTextHero />
      <ProjectDeliveryContentSection
        title="Talent Development and Employment"
        text="At 8thGear, we are committed to providing exceptional Talent Management to individuals and organizations alike. Whether you're a job seeker looking to take the next step in your career, or a company seeking top talent to fuel your growth, we have the expertise and resources to help you succeed. Our Career services are designed to help individuals reach their full potential, with a range of programs and resources that support learning, growth, and career advancement. From skills assessments and training programs to mentorship and coaching, we provide a comprehensive suite of services that empower individuals to achieve their goals and excel in their careers."
      />
    </div>
  );
}
