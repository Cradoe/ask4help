"use client";

import { useConnections } from "hooks/connections";
import { UserConnectCard } from "./user-connect-card";
import { NoConnectionInvitations } from "components/no-connection-invitations.tsx";
import { Skeleton } from "components/skeleton";
import { Connection } from "interfaces";

export const MyConnections = () => {
  const { data: connections, isPending } = useConnections();

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
      {connections?.map((connection: Connection, index: number) => (
        <UserConnectCard connection={connection} key={index} />
      ))}
    </div>
  );
};
