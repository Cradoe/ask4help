"use client";

import Image from "next/image";

export const FeedbackWidget = () => {
  return (
    <div className="fixed bottom-32 right-32">
      {/* dialog  */}

      <div className="w-56 bg-white rounded-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nulla nam
        rerum consectetur fugit! Illo esse quasi delectus, error placeat, rerum
        blanditiis voluptatum odit facere, est in officia nisi deleniti.
      </div>

      {/* toggle button  */}
      <button className=" hover:scale-110 ease-in-out duration-200 focus:outline-red-500 rounded-full">
        <Image src="/feedback-icon.svg" height={60} width={60} alt="Feedback" />
      </button>
    </div>
  );
};
