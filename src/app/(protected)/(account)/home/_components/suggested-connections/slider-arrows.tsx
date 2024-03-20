"use client";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export const SliderNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className="absolute z-10 right-1 z-50 -top-28 lg:-top-20">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-10 w-10 rounded-full flex items-center justify-center text-xs"
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
    <div className="absolute z-10 right-16 -top-28 lg:-top-20">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-10 w-10 rounded-full flex items-center justify-center text-xs"
        onClick={onClick}
      >
        <TfiAngleLeft />
      </button>
    </div>
  );
};
