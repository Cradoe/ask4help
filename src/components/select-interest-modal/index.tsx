"use client";

import clsx from "clsx";
import { Modal } from "components/modal";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const options = [
  {
    icon: "/book.png",
    title: "Mentorship",
    value: "mentorship",
  },
  {
    icon: "/advisor-icon.png",
    title: "Peer Journeying",
    value: "peer-journeying",
  },
  {
    icon: "/advisor-icon.png",
    title: "Docuement Review",
    value: "document-review",
  },
];

interface Props {
  onChange: Function;
  onCloseCallback: Function;
  show: boolean;
}
export const SelectInterestModal = ({
  show,
  onCloseCallback,
  onChange,
}: Props) => {
  const [values, setValues] = useState<string[]>();

  const toggleSelect = (value: string) => {
    // check if item has already been selected

    let newValues: string[];
    if (values?.includes(value)) {
      // deselect item

      newValues = values?.filter((item) => item !== value);
      setValues(newValues);
    } else {
      // push to state
      newValues = [...(values || []), value];
      setValues(newValues);
    }

    onChange(newValues);
  };

  return (
    <Modal
      show={show}
      onCloseCallback={() => onCloseCallback()}
      modalTitle="Interests"
      modalDescription="Add your interests so we can begin to personalize Ask4Help for you.
    Options are up to 3."
    >
      <div className="space-y-3">
        {options?.map((option) => (
          <div key={option.value}>
            <button
              type="button"
              className={clsx(
                "text-left px-6 py-2 rounded-full text-sm ease-in-out duration-300",
                values?.includes(option?.value)
                  ? "bg-secondary-500 text-white"
                  : "bg-secondary-100 text-black hover:bg-secondary-50 "
              )}
              onClick={() => toggleSelect(option.value)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2rem_1fr] gap-4 items-center">
                <Image
                  src={option.icon}
                  alt=""
                  height={20}
                  width={20}
                  className="w-full h-auto hidden lg:block"
                />
                <div className="flex gap-x-5">
                  <div>{option.title}</div>

                  {/* show check mark if item is selected  */}
                  {values?.includes(option?.value) && (
                    <span className="border border-gray-200 rounded-full h-5 w-5 flex items-center justify-center">
                      <FaCheck className="text-gray-200" />
                    </span>
                  )}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
};
