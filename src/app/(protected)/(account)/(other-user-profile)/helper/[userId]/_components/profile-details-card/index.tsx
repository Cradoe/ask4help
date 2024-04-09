"use client";
import { LuUsers } from "react-icons/lu";
import { ProfilePicture } from "./profile-picture";
import { useCountConnections } from "hooks/connections";
import { Skeleton } from "components/skeleton";
import { useRedirectFromHelperToRolePage, useUserDetails } from "hooks/user";
import { useParams } from "next/navigation";
import { SopReviewTaskBoard } from "./sop-task/sop-review-task-board";
import { CtaButton } from "./cta-button";

export const DetailsCard = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data: user, isPending: isLoadingUser } = useUserDetails(userId);
  const { data: connections, isPending: isLoadingConnectionCount } =
    useCountConnections(userId);

  // redirect from helper to user profile
  useRedirectFromHelperToRolePage(userId);

  return (
    <div className="relative">
      <div className="h-44 rounded-t-3xl relative before:absolute before:left-0 before:top-0 before:w-full before:h-44 before:bg-cover-image-pattern before:bg-no-repeat before:bg-cover before:bg-center before:z-10 bg-black before:rounded-t-3xl"></div>
      <SopReviewTaskBoard />
      <div className="bg-white px-10 relative pb-32 pt-3 rounded-b-3xl">
        <div className="flex items-center justify-between gap-x-1 xl:gap-x-3 text-black focus:outline-2 relative">
          <ProfilePicture profilePicture={user?.profilePicture} />

          <div className="pl-32 leading-3">
            {isLoadingUser && <Skeleton height={20} width={150} />}
            <div className="text-xl">
              {user?.firstName} {user?.lastName}
            </div>
            {isLoadingUser && <Skeleton height={10} width={100} />}
            {isLoadingUser && <Skeleton height={10} width={80} />}

            <div className="text-gray-500 text-xs">{user?.jobTitle}</div>
            <div className="text-gray-400 text-xs">{user?.location}</div>

            {isLoadingConnectionCount && <Skeleton height={10} width={60} />}
            {connections && (
              <div className="text-xs text-secondary-500 flex items-center gap-2 mt-1">
                <LuUsers />
                <span>
                  {connections?.count}{" "}
                  {connections && connections?.count > 1
                    ? "Connections"
                    : "Connection"}
                </span>
              </div>
            )}
          </div>

          <CtaButton />
        </div>
      </div>
    </div>
  );
};
