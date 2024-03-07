"use client";
import { Skeleton } from "components/skeleton";
import { useAccount } from "hooks/account";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export const UserAccountProfile = () => {
  const { data: user, isPending } = useAccount();

  return (
    <div
      className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:outline-2 "
      aria-haspopup="menu"
    >
      {/* loading state  */}
      {isPending && (
        <>
          <div>
            <Skeleton height={40} width={40} borderRadius={100} />
          </div>
          <div className="w-full">
            <Skeleton height={20} width="full" />
            <Skeleton height={10} width="80%" />
          </div>
        </>
      )}

      {user && (
        <>
          <div className="flex items-center justify-center p-2 rounded-full bg-secondary-600 text-white">
            <FaUser />
          </div>
          <div>
            <div className="text-sm leading-3">
              {user?.firstName} {user?.lastName}
            </div>
            <Link
              href="/profile"
              className="text-gray-400 text-xs hover:underline  focus:outline-2 focus:outline-secondary-500 px-1 rounded"
            >
              View profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
