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
import { DiscoverConnectionCard } from "./discover-connection-card";
import { SliderNextArrow, SliderPrevArrow } from "./slider-arrows";

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

export const SuggestedConnections = () => {
  const { data: suggestedUsers, isPending } = useConnectionSuggestions();

  return (
    <section className="space-y-4 md:space-y-10 relative">
      <div className="flex items-center justify-between md:px-8">
        <h3 className={clsx("text-xl font-medium", archivo.className)}>
          Add to your Connection
        </h3>
      </div>

      <div className="flex items-center lg:pl-8 gap-x-10">
        <div className="w-full md:w-2/4 h-full">
          <DiscoverConnectionCard />
        </div>

        <div className="md:w-[45vw] lg:w-[25vw] hidden md:block">
          <div className="grid grid-cols-1">
            {isPending && (
              <Skeleton
                className="border border-gray-500"
                height={280}
                borderRadius={10}
              />
            )}
          </div>

          <div className="">
            {!isPending && (
              <Slider {...settings}>
                {suggestedUsers?.map((suggestion: SuggestedConnection) => (
                  <div key={suggestion.user.id}>
                    <div className="lg:w-[90%] xl:w-[80%]">
                      <UserConnectCard suggestion={suggestion} />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
