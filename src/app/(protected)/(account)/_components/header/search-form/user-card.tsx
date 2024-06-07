"use client";
import { UserProfilePicture } from "components/profile-picture";
import { User } from "interfaces";
import { getProfileUrl } from "lib/util";
import Link from "next/link";

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Link
      href={getProfileUrl(user?.role, user?.id)}
      className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:outline-secondary-500 px-1 rounded px-6 py-3 hover:bg-secondary-50/50 ease-in-out duration-200"
    >
      {user && (
        <>
          <div className="flex items-center w-10 h-10 justify-center rounded-full">
            <UserProfilePicture
              size="sm"
              profilePicture={user?.profilePicture}
            />
          </div>
          <div>
            <div className="text-sm leading-3">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="text-gray-400 text-xs">{user?.jobTitle}</div>
          </div>
        </>
      )}
    </Link>
  );
};
