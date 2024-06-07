"use client";

import { useSentInvitations } from "hooks/connections";
import { UserConnectCard } from "./user-connect-card";
import { Skeleton } from "components/skeleton";
import { NoConnectionInvitations } from "components/no-connection-invitations.tsx";

export const SentConnects = () => {
  const { data: connections, isPending } = useSentInvitations();

  if (!isPending && connections?.length === 0) {
    return <NoConnectionInvitations />;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10">
      {isPending &&
        [...new Array(6)]?.map((_, index: number) => (
          <Skeleton
            className="border border-gray-500"
            height={280}
            borderRadius={10}
            key={index}
          />
        ))}
      {connections?.map((connection) => (
        <UserConnectCard connection={connection} key={connection.id} />
      ))}
    </div>
  );
};
