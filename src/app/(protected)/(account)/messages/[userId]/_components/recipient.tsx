import { User } from "interfaces";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

export const Recipient = ({ user }: { user: User | undefined }) => {
  return (
    <div className="grid grid-cols-[3rem_1fr] items-center gap-x-1 xl:gap-x-3 text-black p-6 justify-between ease-in-out duration-300">
      <div className="flex items-center justify-center p-4 rounded-full bg-secondary-600 text-white">
        <Link
          href={`/profile/${user?.id}`}
          aria-label={`${user?.firstName} ${user?.lastName}`}
        >
          <FaUser />
        </Link>
      </div>
      <div>
        <div className="text-base leading-3 flex items-center justify-between">
          <Link href={`/profile/${user?.id}`} className="hover:underline">
            {user?.firstName} {user?.lastName}
          </Link>
          <button className="rounded-full p-1 text-xs  focus:outline-2 focus:outline-secondary-500">
            <FaEllipsisH />
          </button>
        </div>
      </div>
    </div>
  );
};
