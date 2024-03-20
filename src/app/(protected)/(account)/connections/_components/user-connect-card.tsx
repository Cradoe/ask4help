import clsx from "clsx";
import { Connection } from "interfaces";
import { archivo } from "lib/font";
import Link from "next/link";
import { ConnectionStack } from "components/user-connect-card/connection-stack";
import { ReactElement, useMemo } from "react";
import { UserProfilePicture } from "components/profile-picture";

export const UserConnectionCard = ({
  connection,
  children,
}: {
  connection: Connection;
  children: ReactElement;
}) => {
  const { user, mutualUsers } = useMemo(() => connection, [connection]);
  return (
    <div className="md:border md:border-gray-500 grid grid-cols-[30%_1fr] gap-x-2 lg:grid-cols-1 md:rounded-3xl p-5">
      <div>
        <Link
          href={`/profile/${user?.id}`}
          aria-label={`${user?.firstName} ${user?.lastName}`}
          className="rounded-full inline-block focus:outline-primary-500"
        >
          <div className="flex items-center w-12 lg:w-20 h-12 lg:h-20 justify-center">
            <UserProfilePicture
              size="sm"
              placeholderClassName="text-2xl md:text-4xl m-1 lg:m-3"
              profilePicture={user?.profilePicture}
            />
          </div>
        </Link>
      </div>
      <div className="mt-2">
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

        <div className="text-xs">{user?.jobTitle}</div>

        <div className="h-[4em] lg:h-[5em]">
          <ConnectionStack mutualUsers={mutualUsers || []} />
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};
