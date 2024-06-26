"use client";
import { LuUsers } from "react-icons/lu";
import { ProfilePicture } from "./profile-picture";
import { useAccount } from "hooks/account";
import { useCountConnections } from "hooks/connections";
import { Skeleton } from "components/skeleton";
import dynamic from "next/dynamic";

const EditBasicDetails = dynamic(() =>
  import("./edit-basic-details").then((mod) => mod.EditBasicDetails)
);

export const DetailsCard = () => {
  const { data: user, isPending: isLoadingUser } = useAccount();
  const { data: connections, isPending: isLoadingConnectionCount } =
    useCountConnections();

  return (
    <div>
      <div className="h-36 rounded-t-3xl relative before:absolute before:left-0 before:top-0 before:w-full before:h-36 before:bg-cover-image-pattern before:bg-no-repeat before:bg-cover before:bg-center before:z-10 bg-secondary-500/80 before:rounded-t-3xl"></div>
      <div className="bg-white px-2 md:px-10 relative pb-32 pt-3 rounded-b-3xl">
        <div className="flex items-center justify-between gap-x-1 xl:gap-x-3 text-black focus:outline-2 relative">
          <ProfilePicture profilePicture={user?.profilePicture} />

          <div className="pt-2 md:pt-0 md:pl-36 leading-3">
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
          <div> {user && <EditBasicDetails user={user} />} </div>
        </div>
      </div>
    </div>
  );
};
