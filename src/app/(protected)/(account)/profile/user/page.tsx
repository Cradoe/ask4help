import { AboutSection } from "../_components/about-section";
import { EducationBackgrounds } from "../_components/education-backgrounds";
import { EducationGoals } from "../_components/education-goals";
import { Interests } from "../_components/interests";
import { WorkExperiences } from "../_components/work-experiences";
import { DetailsCard } from "./_components/profile-details-card";
import { SopReviews } from "./_components/sop-reviews";

export default function Page() {
  return (
    <div className="space-y-2">
      <DetailsCard />
      <SopReviews />
      <AboutSection />
      <EducationBackgrounds />
      <EducationGoals />
      <WorkExperiences />
      <Interests />
    </div>
  );
}
