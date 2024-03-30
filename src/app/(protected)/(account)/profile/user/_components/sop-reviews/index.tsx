"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { Skeleton } from "components/skeleton";
import { SopReview } from "./sop-review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMyReviewedSops } from "hooks/task";
import { SopDocument } from "interfaces";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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
export const SopReviews = () => {
  const { data: documents, isPending } = useMyReviewedSops();

  return (
    <section
      className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4"
      id="sop-reviews"
    >
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>SOP reviews</h2>
      </div>

      <div className="pt-5 space-y-2 lg:w-[50vw]">
        {isPending && <Skeleton borderRadius={30} height={140} />}
        <Slider {...settings}>
          {documents?.map((document: SopDocument) => (
            <SopReview document={document} key={document?.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
