import { ProjectDeliveryTextHero, ProjectDeliveryContentSection } from "./ProjectDeliveryTextHero";

// NOTE: the CRA source's TalentsDevelopment.js (src/components/AllCards/TalentsDevelopment.js) reads
// `Data.ProjectDeliveryContentThree` from ProjectDeliveryManagedServicesCardMap.json — a key that does not
// exist anywhere in that file (only ProjectDeliveryContent, ProjectDeliveryContentTwo and
// ManagedServicesContent are defined). A literal port would crash with "Cannot read properties of
// undefined (reading 'map')" on render. The closest faithful substitute is the ProjectDeliveryContentTwo
// entry ("Talent Development and Employment") — it's thematically the right fit for this route, and is
// already reused (likely due to the same mix-up) by the Ecosystem-Events page in production today.
export function TalentDevelopment() {
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
