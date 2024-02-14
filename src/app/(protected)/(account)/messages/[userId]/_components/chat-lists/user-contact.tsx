import clsx from "clsx";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

export const UserContact = () => {
  return (
    <Link
      href={`/messages/fde`}
      className={clsx(
        "grid grid-cols-[2rem_1fr] items-center gap-x-1 xl:gap-x-3 text-black focus:ring-2 focus:outline-none p-6 justify-between ease-in-out duration-300",
        "hover:bg-secondary-50/70"
      )}
    >
      <div className="flex items-center justify-center p-2 rounded-full bg-secondary-600 text-white">
        <FaUser />
      </div>
      <div>
        <div className="text-sm leading-3 flex items-center justify-between">
          <span>Katrina Kilback</span>
          <button className="rounded-full p-1 text-xs bg-gray-300">
            <FaEllipsisH />
          </button>
        </div>
        <div className="text-gray-500 text-sm  flex items-end justify-between">
          <span>
            You: For reminder sake. <br /> Where is best to reach out...
          </span>
          <span>12:00AM</span>
        </div>
      </div>
    </Link>
  );
};
