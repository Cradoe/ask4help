"use client";
import clsx from "clsx";
import { Connection } from "interfaces";
import { archivo } from "lib/font";
import { Button } from "components/button";
import {
  useAcceptConnectionRequest,
  useRejectConnectionRequest,
} from "hooks/connections";
import { UserConnectionCard } from "../../../_components/user-connect-card";

export const UserConnectCard = ({ connection }: { connection: Connection }) => {
  const {
    mutate: acceptRequest,
    isPending: isAccepting,
    isSuccess: hasAccepted,
  } = useAcceptConnectionRequest();

  const {
    mutate: rejectRequest,
    isPending: isRejecting,
    isSuccess: hasRejected,
  } = useRejectConnectionRequest();

  if (hasAccepted || hasRejected) return null;
  return (
    <UserConnectionCard connection={connection}>
      <div className="flex items-center gap-5">
        <Button
          radius="rounded-full"
          size="sm"
          className={clsx(
            "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
            archivo.className
          )}
          variant="neutral"
          onClick={() => rejectRequest(connection?.id)}
          isLoading={isRejecting}
        >
          Ignore
        </Button>
        <Button
          radius="rounded-full"
          size="sm"
          className={clsx(
            "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
            archivo.className
          )}
          onClick={() => acceptRequest(connection?.id)}
          isLoading={isAccepting}
        >
          Accept
        </Button>
      </div>
    </UserConnectionCard>
  );
};
