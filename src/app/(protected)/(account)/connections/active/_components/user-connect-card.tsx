import clsx from "clsx";
import { Connection } from "interfaces";
import { archivo } from "lib/font";
import { LinkButton } from "components/link-button";
import { useMemo } from "react";
import { UserConnectionCard } from "../../_components/user-connect-card";

export const UserConnectCard = ({ connection }: { connection: Connection }) => {
  const { user } = useMemo(() => connection, [connection]);
  return (
    <UserConnectionCard connection={connection}>
      <div>
        <LinkButton
          href={`/messages/${user?.id}`}
          radius="rounded-full"
          size="sm"
          className={clsx(
            "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
            archivo.className
          )}
        >
          Message
        </LinkButton>
      </div>
    </UserConnectionCard>
  );
};
