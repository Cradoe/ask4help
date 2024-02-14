import Link from "next/link";
import { FaUser } from "react-icons/fa";

export const UserProfile = () => {
  return (
    <div
      className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:outline-2 "
      aria-haspopup="menu"
    >
      <div className="flex items-center justify-center p-2 rounded-full bg-secondary-600 text-white">
        <FaUser />
      </div>
      <div>
        <div className="text-sm leading-3">Katrina Kilback</div>
        <Link
          href="/profile"
          className="text-gray-400 text-xs hover:underline  focus:outline-2 focus:outline-secondary-500 px-1 rounded"
        >
          View profile
        </Link>
      </div>
    </div>
  );
};
