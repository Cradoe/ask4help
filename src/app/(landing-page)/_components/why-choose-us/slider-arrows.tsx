"use client";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export const SliderNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className="absolute z-10 right-1 lg:-left-[43vw] xl:-left-[41vw] 2xl:-left-[48vw] 3xl:left-[102%] z-50 top-52 lg:top-80 xl:top-96 3xl:top-52">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-12 w-12 rounded-full flex items-center justify-center text-xs"
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
    <div className="absolute z-10 -left-3 md:-left-6 lg:-left-[50.5vw] xl:-left-[46.5vw] 2xl:-left-[52.5vw] 3xl:-left-[5%] top-52 lg:top-80 xl:top-96 3xl:top-52">
      <button
        className="bg-neutral-100 hover:bg-primary-600 ease-in-out duration-300 border border-neutral-400 hover:border-primary-500 h-12 w-12 rounded-full flex items-center justify-center text-xs"
        onClick={onClick}
      >
        <TfiAngleLeft />
      </button>
    </div>
  );
};
