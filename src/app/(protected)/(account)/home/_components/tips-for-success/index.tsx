"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useConnectionSuggestions } from "hooks/connections";
import clsx from "clsx";
import { archivo } from "lib/font";
import { SuggestedConnection } from "interfaces";
import { UserConnectCard } from "components/user-connect-card";
import { Skeleton } from "components/skeleton";
import { SliderNextArrow, SliderPrevArrow } from "./slider-arrows";
import { TIPS_FOR_SUCCESS } from "lib/contents";
import { SectionTitle } from "components/section-title";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const TipsForSuccess = () => {
  return (
    <section className="space-y-4 md:space-y-10 relative bg-secondary-50/50 rounded-xl p-6 md:p-10">
      <div className="lg:w-[40vw]">
        <div className="">
          <Slider {...settings}>
            {TIPS_FOR_SUCCESS?.map((tip, index) => (
              <div key={index} className="space-y-4">
                <SectionTitle px="px-2 md:px-8">
                  #{index + 1} Tips for Success
                </SectionTitle>

                <div className="font-medium text-sm md:text-xl">
                  {tip?.title}
                </div>
                <div className="font-font text-xs md:text-sm lg:w-[80%]">
                  {tip?.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
