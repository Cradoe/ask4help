import { EducationBackground } from "interfaces";
import { CiEdit } from "react-icons/ci";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

export const EducationBackgroundItem = ({
  education,
}: {
  education: EducationBackground;
}) => {
  return (
    <div className="rounded-3xl p-10 bg-secondary-50/50 grid grid-cols-[10%_1fr_10%]">
      <div className="bg-secondary-50 rounded-full h-10 w-10 flex items-center justify-center">
        <HiOutlineBuildingLibrary className="text-2xl text-secondary-500" />
      </div>
      <div className="space-y-2">
        <div className="font-medium ">{education?.qualification?.name}</div>
        <div className="text-sm text-gray-600">
          {education?.faculty?.name} · {education?.classOfDegree?.name}
        </div>{" "}
        <div className="text-sm text-gray-600">{education?.graduationYear}</div>
      </div>
      <div>
        <button className="font-medium text-3xl">
          <CiEdit />
        </button>
      </div>
    </div>
  );
};
