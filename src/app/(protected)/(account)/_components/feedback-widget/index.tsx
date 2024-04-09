"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEscapeKeyListener, useOnClickOutside } from "hooks/common";

const FeedbackForm = dynamic(() =>
  import("./feedback-form").then((mod) => mod.FeedbackForm)
);

export const FeedbackWidget = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dialogRef, () => setDisplay(false));
  useEscapeKeyListener(() => setDisplay(false));

  const toggleDisplay = () => setDisplay((prev) => !prev);

  const [isSubmitted, setIsSumitted] = useState<boolean>(false);
  return (
    <div
      className="fixed bottom-5 md:bottom-10 right-2 md:right-32 z-50"
      ref={dialogRef}
    >
      {/* dialog  */}
      {display && (
        <div className="w-[90vw] md:w-[30rem] flex flex-col">
          <div className="bg-feedback-bg bg-cover bg-no-repeat w-full text-white px-10 py-5 space-y-2 rounded-t-3xl">
            <div className="flex justify-between">
              <div className="font-medium text-2xl">
                {isSubmitted
                  ? "Thank you for your valuable feedback!"
                  : "We value your input!"}
              </div>

              <button
                className="text-black bg-white hover:bg-black hover:text-white ease-in-out duration-300 rounded-full h-8 w-8 flex items-center justify-center focus:outline-secondary-500"
                onClick={toggleDisplay}
                aria-label="Close dialog"
              >
                <AiOutlineClose />
              </button>
            </div>
            {/* <div className="text-sm">
              {isSubmitted
                ? "Your insights are instrumental in shaping our beta version and enhancing the user experience for everyone. We appreciate your contribution to our continuous improvement process."
                : "Please share your thoughts, suggestions, and any issues you encountered while using our beta version. Your feedback will help  us improve and create a better experience for all users."}
            </div> */}
          </div>
          {!isSubmitted && (
            <div className="bg-white p-10 pt-0 rounded-b-3xl mt-0">
              <FeedbackForm onSuccess={() => setIsSumitted(true)} />
            </div>
          )}
        </div>
      )}

      {/* toggle button  */}
      <div className="flex justify-end mt-5">
        <button
          className="hover:scale-110 ease-in-out duration-200 focus:outline-red-500 rounded-full"
          onClick={toggleDisplay}
          aria-haspopup="menu"
          aria-expanded={display ? "true" : "false"}
        >
          <Image
            src="/feedback-icon.svg"
            height={60}
            width={60}
            className="h-12 md:h-16 w-auto"
            alt="Open dialog"
          />
        </button>
      </div>
    </div>
  );
};
