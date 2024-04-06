import clsx from "clsx";
import { Connection, SuggestedConnection } from "interfaces";
import { archivo } from "lib/font";
import { Button } from "components/button";
import { useMemo } from "react";
import { useConnectRequest } from "hooks/connections";
import { UserConnectionCard } from "app/(protected)/(account)/connections/_components/user-connect-card";

export const UserConnectCard = ({
  suggestion,
}: {
  suggestion: SuggestedConnection;
}) => {
  const { user } = useMemo(() => suggestion, [suggestion]);

  const {
    mutate: sendConnectRequest,
    isPending: isSendingRequest,
    isSuccess: hasSentRequest,
  } = useConnectRequest();

  return (
    <UserConnectionCard connection={suggestion as Connection}>
      <Button
        radius="rounded-full"
        size="sm"
        onClick={() => sendConnectRequest({ data: { userId: user?.id } })}
        isLoading={isSendingRequest}
        className={clsx(
          "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
          archivo.className
        )}
        variant={hasSentRequest ? "neutral" : "primary"}
        disabled={isSendingRequest || hasSentRequest}
      >
        {hasSentRequest ? "Request sent" : "Connect"}
      </Button>
    </UserConnectionCard>
  );
};
