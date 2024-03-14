"use client";
import clsx from "clsx";
import { Connection } from "interfaces";
import { archivo } from "lib/font";
import { Button } from "components/button";
import { useWithdrawInvitation } from "hooks/connections";
import { UserConnectionCard } from "../../../_components/user-connect-card";

export const UserConnectCard = ({ connection }: { connection: Connection }) => {
  const {
    mutate: withdrawRequest,
    isPending: isWithDrawing,
    isSuccess: hasWithdrawn,
  } = useWithdrawInvitation();

  if (hasWithdrawn) return null;
  return (
    <UserConnectionCard connection={connection}>
      <div>
        <Button
          radius="rounded-full"
          size="sm"
          className={clsx(
            "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
            archivo.className
          )}
          onClick={() => withdrawRequest(connection?.id)}
          isLoading={isWithDrawing}
        >
          Withdraw
        </Button>
      </div>
    </UserConnectionCard>
  );
};
