"use client";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export const SliderNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className="absolute z-10 -right-12  md:-right-1 lg:-right-20  z-50 top-[50%] md:-top-2">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-6 md:h-10 w-6 md:w-10 rounded-full flex items-center justify-center text-xs"
        onClick={onClick}
      >
        <TfiAngleRight />
      </button>
    </div>
  );
};

export const SliderPrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className="absolute z-10 right-[110%] md:right-16 lg:-right-5 top-[50%] md:-top-2">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-6 md:h-10 w-6 md:w-10 rounded-full flex items-center justify-center text-xs"
        onClick={onClick}
      >
        <TfiAngleLeft />
      </button>
    </div>
  );
};
