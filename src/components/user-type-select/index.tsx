"use client";

import clsx from "clsx";
import { useEscapeKeyListener, useOnClickOutside } from "hooks/common";
import Image from "next/image";
import { MutableRefObject, useRef, useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

const options = [
  {
    icon: "/book.png",
    title: "Student",
    value: "student",
    caption:
      "Aspiring Scholar, seeking for international study advice and mentorship.",
  },
  {
    icon: "/advisor-icon.png",
    title: "Study Advisor",
    value: "advisor",
    caption:
      "Study Advisor or Educational Mentor, seeking to provide quality international study advice and mentorship.",
  },
];
export const UserTypeSelect = ({
  label,
  labelClassName,
  className,
  error,
  onChange,
}: any) => {
  const [value, setValue] = useState<string>("student");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleSelect = (value: string) => {
    setValue(value);
    setShowDropdown(false);
    onChange(value);
  };

  // close when user clicks outside of the parent div
  useOnClickOutside(ref, () => setShowDropdown(false));

  // close when user presses escape button
  useEscapeKeyListener(() => setShowDropdown(false));

  return (
    <div className="py-3">
      {label && (
        <div
          className={`block text-xs font-medium  ${
            labelClassName ? labelClassName : "text-black/80"
          }`}
        >
          {label}
        </div>
      )}

      <div className="relative mt-1 rounded-md" ref={ref}>
        <button
          type="button"
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`mt-2 outline-0 placeholder-[#828282] flex justify-between items-center w-full h-12  text-sm rounded-md py-2 border border-slate-300 focus:ring-1 focus:ring-primary-500  focus:outline-none px-4 ${
            className ? className : "text-gray-600"
          }`}
        >
          <span>{value}</span>
          <TfiAngleDown />
        </button>

        <div
          className={clsx(
            "bg-white rounded-2xl text-black space-y-3 divide-y md:space-y-5 py-6 absolute top-[140%]",
            showDropdown ? "block" : "hidden"
          )}
        >
          {options?.map((option) => (
            <button
              type="button"
              key={option.value}
              className="text-left w-full block hover:bg-neutral-200 px-6 py-2"
              onClick={() => handleSelect(option.value)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[3rem_1fr] gap-4 items-center">
                <Image
                  src={option.icon}
                  alt=""
                  height={20}
                  width={20}
                  className="w-full h-auto hidden lg:block"
                />
                <div>
                  <div className="font-bold">{option.title}</div>
                  <div className="text-xs md:text-sm">{option.caption}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <p className="text-red-500 text-xs">{error?.message}</p>
    </div>
  );
};
