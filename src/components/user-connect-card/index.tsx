import clsx from "clsx";
import { SuggestedConnection } from "interfaces";
import { archivo } from "lib/font";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Button } from "components/button";
import { useMemo } from "react";
import { ConnectionStack } from "./connection-stack";
import { useConnectRequest } from "hooks/connections";

export const UserConnectCard = ({
  suggestion,
}: {
  suggestion: SuggestedConnection;
}) => {
  const { user, mutualUsers } = useMemo(() => suggestion, [suggestion]);

  const {
    mutate: sendConnectRequest,
    isPending: isSendingRequest,
    isSuccess: hasSentRequest,
  } = useConnectRequest();

  return (
    <div className="md:border md:border-gray-500 grid grid-cols-[30%_1fr] lg:grid-cols-1 md:rounded-3xl p-5">
      <div>
        <Link
          href={`/profile/${user?.id}`}
          aria-label={`${user?.firstName} ${user?.lastName}`}
          className="rounded-full bg-secondary-600 text-white inline-block p-3 md:p-6 focus:outline-primary-500"
        >
          <FaUser className="text-2xl md:text-4xl" />
        </Link>
      </div>
      <div>
        <Link
          href={`/profile/${user?.id}`}
          aria-label={`${user?.firstName} ${user?.lastName}`}
          className={clsx(
            archivo.className,
            "text-secondary-600 font-medium focus:outline-secondary-500 hover:underline"
          )}
        >
          {user?.firstName} {user?.lastName}
        </Link>

        <ConnectionStack mutualUsers={mutualUsers || []} />

        <div>
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
            {hasSentRequest ? "Pending" : "Connect"}
          </Button>
        </div>
      </div>
    </div>
  );
};
