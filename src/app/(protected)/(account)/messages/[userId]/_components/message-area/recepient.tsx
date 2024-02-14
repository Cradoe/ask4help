import { FaUser } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

export const Recepient = () => {
  return (
    <div className="grid grid-cols-[3rem_1fr] items-center gap-x-1 xl:gap-x-3 text-black p-6 justify-between ease-in-out duration-300">
      <div className="flex items-center justify-center p-4 rounded-full bg-secondary-600 text-white">
        <FaUser />
      </div>
      <div>
        <div className="text-base leading-3 flex items-center justify-between">
          <span>Katrina Kilback</span>
          <button className="rounded-full p-1 text-xs">
            <FaEllipsisH />
          </button>
        </div>
      </div>
    </div>
  );
};
