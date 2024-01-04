"use client";
import clsx from "clsx";
import { archivo } from "lib/font";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { APP_FEATURES } from "lib/contents";
import { AppFeature } from "./app-feature";
import { SliderNextArrow, SliderPrevArrow } from "./slider-arrows";

var settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: true,
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,
};

export const WhyChooseUs = () => {
  return (
    <section className="mt-40 pl-wrapper md:pl-wrapper-md lg:pl-wrapper-lg xl:pl-wrapper-xl grid grid-cols-1 lg:grid-cols-2 gap-12 ">
      <div className="space-y-7 xl:p-10 xl:mr-10">
        <div>
          <div
            className={clsx(
              "bg-secondary-50 px-8 rounded-full py-2 text-xs md:text-sm uppercase inline font-medium",
              archivo.className
            )}
          >
            Why Choose Ask4Hep?
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
        <Slider {...settings}>
          {APP_FEATURES?.map((feature, index) => (
            <div key={index} style={{ width: "40vw", height: "100%" }}>
              <AppFeature feature={feature} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
