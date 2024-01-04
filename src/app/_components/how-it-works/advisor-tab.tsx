import clsx from "clsx";
import { HOW_IT_WORKS } from "lib/contents/how-it-works";
import { archivo } from "lib/font";
import { StepCard } from "./step-card";

export const AdvisorTab = () => {
  return (
    <div className="space-y-8 my-10">
      <h2
        className={clsx(
          "lg:w-1/3 lg:w-2/3 mx-auto text-2xl lg:text-3xl 2xl:text-4xl font-medium text-center",
          archivo.className
        )}
      >
        Offering Informed Advice, Real-world Experience, and Sustained
        Inspiration
      </h2>
      <p className="text-center lg:w-2/3 2xl:w-1/3 mx-auto font-light">
        Connect easily with prospective students in just a few simple steps.
        Providing guidance, experiential advice, and sustained inspiration to
        prospective students
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 lg:w-3/4 2xl:w-2/4 mx-auto pt-10">
        {HOW_IT_WORKS?.advisor?.map((item, index) => (
          <StepCard item={item} stepNumber={index + 1} key={index} />
        ))}
      </ul>
    </div>
  );
};
