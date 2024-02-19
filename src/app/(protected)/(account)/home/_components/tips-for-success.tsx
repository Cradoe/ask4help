"use client";

import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { APP_FEATURES } from "lib/contents";
// import { AppFeature } from "./app-feature";
// import { SliderNextArrow, SliderPrevArrow } from "./slider-arrows";
import { useDomIsReady } from "hooks/common";
import { SectionTitle } from "components/section-title";
import clsx from "clsx";
import { archivo } from "lib/font";

var settings = {
  className: "slider variable-width",
  dots: false,
  //   infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   variableWidth: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  //   cssEase: "linear",
  pauseOnHover: true,
  //   nextArrow: <SliderNextArrow />,
  //   prevArrow: <SliderPrevArrow />,
};

export const TipsForSuccess = () => {
  const { isReady } = useDomIsReady();
  return (
    <div>
      {/* {isReady && (
        <div>
          <div>
            {APP_FEATURES?.map((feature, index) => (
              <div key={index} style={{ width: "30vw", height: "100%" }}>
                <SectionTitle>#1 Tips for Success</SectionTitle>
                <div className={clsx("my-2 text-xl", archivo.className)}>
                  What should we talk about during our meeting?
                </div>
                <p className="text-sm font-light">
                  Connect with a study advisor or student to explore backgrounds
                  and find compatibility. Discuss goals, challenges, recent
                  successes, or specific topics you need help with—it's up to
                  you.
                </p>
              </div>
            ))}
            </ReactSlick>
          </div>
        </div>
      )} */}
    </div>
  );
};
