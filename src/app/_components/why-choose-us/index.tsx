"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { Slider } from "./slider";

export const WhyChooseUs = () => {
  return (
    <section className="mt-20 md:mt-32 xl:mt-40 pl-wrapper md:pl-wrapper-md lg:pl-wrapper-lg xl:pl-wrapper-xl grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[55%_1fr] 4xl:grid-cols-1 gap-12 relative">
      <div className="space-y-7 xl:p-10 xl:mr-10">
        <div>
          <div
            className={clsx(
              "bg-secondary-50 px-8 rounded-full py-2 text-xs md:text-sm uppercase inline font-medium",
              archivo.className
            )}
          >
            Why Choose Ask4help?
          </div>
        </div>
        <h3 className="font-medium text-2xl lg:text-3xl 2xl:text-5xl 2xl:w-3/4">
          Empowering Students to Make Informed Decisions
        </h3>

        <p>
          Become a part of our platform and access a pool of expert study
          advisors to address all your inquiries.
        </p>
      </div>
      <div>
        <Slider />
      </div>
    </section>
  );
};
