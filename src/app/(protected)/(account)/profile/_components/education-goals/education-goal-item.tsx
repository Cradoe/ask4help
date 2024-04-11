import { EducationGoal } from "interfaces";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import dynamic from "next/dynamic";

const EditEducationGoal = dynamic(() =>
  import("./edit-education-goal").then((mod) => mod.EditEducationGoal)
);

export const EducationGoalItem = ({ goal }: { goal: EducationGoal }) => {
  return (
    <div className="rounded-3xl p-4 md:p-10 bg-secondary-50/50 grid md:grid-cols-[10%_1fr_10%]">
      <div className="bg-secondary-50 rounded-full h-10 w-10 flex items-center justify-center">
        <HiOutlineBuildingLibrary className="text-2xl text-secondary-500" />
      </div>
      <div className="space-y-2">
        <div className="font-medium ">{goal?.qualification?.name}</div>
        <div className="text-sm text-gray-600">{goal?.faculty?.name}</div>
        <div className="text-sm text-gray-600">
          {goal?.destinations?.flatMap((country) => country?.name).join(", ")}
        </div>
      </div>
      <div>
        <EditEducationGoal education={goal} />
      </div>
    </div>
  );
};
