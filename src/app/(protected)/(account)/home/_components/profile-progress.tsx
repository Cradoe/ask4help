"use client";
import clsx from "clsx";
import { useAccount, useProfileCompletionScore } from "hooks/account";
import { getPersonalProfileUrl } from "lib/util";
import Link from "next/link";

export const ProfileProgress = () => {
  const { data: user } = useAccount();
  const { data } = useProfileCompletionScore();

  if (
    data &&
    data?.completionPercentage > 0 &&
    data?.completionPercentage < 100
  ) {
    return (
      <div className="mt-12 bg-profile-progress bg-cover bg-no-repeat bg-center w-full h-full p-10 text-white rounded-md">
        <div className="text-2xl">Let us start with the basics</div>
        <div className="text-xs mt-5 mb-7">
          {data?.actionText || "Get more by setting up a profile you love."}
        </div>

        <div className="relative">
          <div
            className={clsx("bg-gray-500 w-fulld h-1 rounded-full relative")}
          ></div>
          <div
            className="absolute top-0 left-0 bg-primary-600 h-1 rounded-full"
            style={{ width: `${Math.floor(data?.completionPercentage)}%` }}
          ></div>
        </div>

        <Link
          href={getPersonalProfileUrl(user?.role!)}
          className="text-xs text-primary-600 mt-3 underline"
        >
          {Math.floor(data?.completionPercentage)}% Completed Profile
        </Link>
      </div>
    );
  }

  return null;
};
