import clsx from "clsx";
import { HOW_IT_WORKS } from "lib/contents/how-it-works";
import { archivo } from "lib/font";
import { StepCard } from "./step-card";

import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var sliderSettings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
};

export const StudentTab = () => {
  return (
    <div className="space-y-8 my-10">
      <h2
        className={clsx(
          "md:w-2/3 mx-auto text-2xl lg:text-4xl xl:text-5xl font-medium text-center",
          archivo.className
        )}
      >
        Simplifying Access to <br className="hidden lg:block" /> Study Abroad
        Resources
      </h2>
      <p className="text-center lg:w-2/3 2xl:w-1/3 mx-auto xl:text-xl">
        Connect easily with study advisors, mentors, and other prospective
        students in just a few simple steps. Join our community for customized
        information that fits your study abroad dream.
      </p>

      <div className="md:hidden">
        <ReactSlick {...sliderSettings}>
          {HOW_IT_WORKS?.student?.map((item, index) => (
            <div key={index} style={{ width: "80vw", height: "100%" }}>
              <div className="w-[90%]">
                <StepCard
                  item={item}
                  stepNumber={index + 1}
                  variant="secondary"
                  key={index}
                />
              </div>
            </div>
          ))}
        </ReactSlick>
      </div>

      <ul className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 lg:w-3/4 2xl:w-2/4 mx-auto pt-10">
        {HOW_IT_WORKS?.student?.map((item, index) => (
          <li key={index}>
            <StepCard item={item} stepNumber={index + 1} variant="secondary" />
          </li>
        ))}
      </ul>
    </div>
  );
};
