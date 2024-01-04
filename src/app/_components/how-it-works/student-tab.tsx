import clsx from "clsx";
import { HOW_IT_WORKS } from "lib/contents/how-it-works";
import { archivo } from "lib/font";
import { StepCard } from "./step-card";

export const StudentTab = () => {
  return (
    <div className="space-y-8 my-10">
      <h2
        className={clsx(
          "lg:w-1/3 lg:w-2/3 mx-auto text-2xl lg:text-3xl 2xl:text-4xl font-medium text-center",
          archivo.className
        )}
      >
        Simplifying Access to Study Abroad Resources
      </h2>
      <p className="text-center lg:w-2/3 2xl:w-1/3 mx-auto font-light">
        Connect easily with study advisors, mentors, and other prospective
        students in just a few simple steps. Join our community for customized
        information that fits your study abroad dream.
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 lg:w-3/4 2xl:w-2/4 mx-auto pt-10">
        {HOW_IT_WORKS?.student?.map((item, index) => (
          <StepCard
            item={item}
            stepNumber={index + 1}
            variant="secondary"
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};
