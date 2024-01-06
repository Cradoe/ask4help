"use client";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export const SliderNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className="absolute z-10 right-1 lg:-left-[43vw] xl:-left-[51vw] top-52 lg:top-80 xl:top-96">
      <button
        className="bg-primary-600 hover:bg-primary-600/80 ease-in-out duration-300 border border-primary-500 h-12 w-12 rounded-full flex items-center justify-center text-xs"
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
    <div className="absolute z-10 -left-3 md:-left-6 lg:-left-[50.5vw] xl:-left-[56.5vw] top-52 lg:top-80 xl:top-96">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-12 w-12 rounded-full flex items-center justify-center text-xs"
        onClick={onClick}
      >
        <TfiAngleLeft />
      </button>
    </div>
  );
};
