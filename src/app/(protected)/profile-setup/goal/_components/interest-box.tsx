import { SelectInterestModal } from "components/select-interest-modal";
import { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

interface Props {
  onChange: Function;
  error?: {
    message?: string;
  };
}
export const InterestBox = ({ onChange, error }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>();

  const handleChange = (e: string[]) => {
    setValues(e);
    onChange(e);
  };

  return (
    <div className="py-3">
      <div className="block text-xs font-medium  text-black/80">Interests</div>

      <div className="relative mt-1 rounded-md">
        <button
          type="button"
          onClick={() => setShowModal((prev) => !prev)}
          className="mt-2 outline-0 placeholder-[#828282] flex justify-between items-center w-full h-12  text-sm rounded-md py-2 border border-slate-300 focus:outline-1 focus:outline-primary-500   px-4 text-gray-600"
        >
          <span>
            {values && values?.length > 0
              ? values?.join(", ")
              : "Please select"}
          </span>
          <TfiAngleDown />
        </button>
      </div>
      <SelectInterestModal
        show={showModal}
        onChange={handleChange}
        onCloseCallback={() => setShowModal(false)}
      />
      <p className="text-red-500 text-xs">{error?.message}</p>
    </div>
  );
};
