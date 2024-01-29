"use client";

import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { APP_FEATURES } from "lib/contents";
import { AppFeature } from "./app-feature";
import { SliderNextArrow, SliderPrevArrow } from "./slider-arrows";
import { useDomIsReady } from "hooks/common";

var settings = {
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
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,
};

export const Slider = () => {
  const { isReady } = useDomIsReady();
  return (
    <div>
      {isReady && (
        <div>
          {/* mobile  */}
          <div className=" md:hidden">
            <ReactSlick {...settings}>
              {APP_FEATURES?.map((feature, index) => (
                <div key={index} style={{ width: "90vw", height: "100%" }}>
                  <AppFeature feature={feature} />
                </div>
              ))}
            </ReactSlick>
          </div>

          {/* tablet  */}
          <div className="hidden md:block lg:hidden">
            <ReactSlick {...settings}>
              {APP_FEATURES?.map((feature, index) => (
                <div key={index} style={{ width: "50vw", height: "100%" }}>
                  <AppFeature feature={feature} />
                </div>
              ))}
            </ReactSlick>
          </div>

          {/* lg devices  */}
          <div className="hidden lg:block xl:hidden">
            <ReactSlick {...settings}>
              {APP_FEATURES?.map((feature, index) => (
                <div key={index} style={{ width: "40vw", height: "100%" }}>
                  <AppFeature feature={feature} />
                </div>
              ))}
            </ReactSlick>
          </div>

          {/* xl devices and above  */}
          <div className="hidden xl:block">
            <ReactSlick {...settings}>
              {APP_FEATURES?.map((feature, index) => (
                <div key={index} style={{ width: "30vw", height: "100%" }}>
                  <AppFeature feature={feature} />
                </div>
              ))}
            </ReactSlick>
          </div>
        </div>
      )}
    </div>
  );
};
