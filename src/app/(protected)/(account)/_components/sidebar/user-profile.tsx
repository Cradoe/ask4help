import Link from "next/link";
import { FaUser } from "react-icons/fa";

export const UserProfile = () => {
  return (
    <div
      className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:ring-2 focus:outline-none"
      aria-haspopup="menu"
    >
      <div className="flex items-center justify-center p-2 rounded-full bg-secondary-600 text-white">
        <FaUser />
      </div>
      <div>
        <div className="text-sm leading-3">Katrina Kilback</div>
        <Link
          href="/profile"
          className="text-gray-400 text-xs hover:underline "
        >
          View profile
        </Link>
      </div>
    </div>
  );
};
