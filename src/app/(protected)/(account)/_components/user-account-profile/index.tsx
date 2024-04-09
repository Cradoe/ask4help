"use client";
import { UserProfilePicture } from "components/profile-picture";
import { Skeleton } from "components/skeleton";
import { useAccount } from "hooks/account";
import { getPersonalProfileUrl } from "lib/util";
import Link from "next/link";

export const UserAccountProfile = () => {
  const { data: user, isPending } = useAccount();

  return (
    <div className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:outline-2 ">
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
          <div className="flex items-center w-10 h-10 justify-center rounded-full">
            <UserProfilePicture
              size="sm"
              profilePicture={user?.profilePicture}
            />
          </div>
          <div>
            <div className="text-sm capitalize">
              {user?.firstName} {user?.lastName}
            </div>
            <Link
              href={getPersonalProfileUrl(user?.role)}
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
