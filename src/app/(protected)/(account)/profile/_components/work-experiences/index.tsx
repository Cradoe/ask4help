import clsx from "clsx";
import { archivo } from "lib/font";
import { FaPlus } from "react-icons/fa";
import { WorkExperienceItem } from "./work-experience-item";

export const WorkExperiences = () => {
  return (
    <section className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Work Experience</h2>

        <button className="text-xs flex items-center justify-between bg-secondary-50 px-5 py-1 rounded-full">
          <FaPlus /> <span>Add</span>
        </button>
      </div>

      <div className="pt-10 space-y-2">
        {[...new Array(2)]?.map((_, index) => (
          <WorkExperienceItem key={index} />
        ))}
      </div>
    </section>
  );
};
