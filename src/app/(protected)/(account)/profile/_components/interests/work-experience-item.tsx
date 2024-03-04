import { CiEdit } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";

export const WorkExperienceItem = () => {
  return (
    <div className="rounded-3xl p-10 bg-secondary-50/50 grid grid-cols-[10%_1fr_10%]">
      <div className="bg-secondary-50 rounded-full h-10 w-10 flex items-center justify-center">
        <IoBriefcaseOutline className="text-2xl text-secondary-500" />
      </div>
      <div className="space-y-2">
        <div className="font-medium ">Product Designer</div>
        <div className="text-sm text-gray-600">Blakskill Limited</div>
      </div>
      <div>
        <button className="font-medium text-3xl">
          <CiEdit />
        </button>
      </div>
    </div>
  );
};
