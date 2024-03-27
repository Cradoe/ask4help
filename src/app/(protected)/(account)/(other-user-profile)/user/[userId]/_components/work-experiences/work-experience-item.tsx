import { WorkExperience } from "interfaces";
import { IoBriefcaseOutline } from "react-icons/io5";

export const WorkExperienceItem = ({
  experience,
}: {
  experience: WorkExperience;
}) => {
  return (
    <div className="rounded-3xl p-10 bg-secondary-50/50 grid grid-cols-[10%_1fr_10%]">
      <div className="bg-secondary-50 rounded-full h-10 w-10 flex items-center justify-center">
        <IoBriefcaseOutline className="text-2xl text-secondary-500" />
      </div>
      <div className="space-y-2">
        <div className="font-medium ">{experience?.position}</div>
        <div className="text-sm text-gray-600">{experience?.company}</div>
      </div>
      <div></div>
    </div>
  );
};
