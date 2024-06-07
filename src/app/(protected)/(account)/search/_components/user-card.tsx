import clsx from "clsx";
import { User } from "interfaces";
import { archivo } from "lib/font";
import Link from "next/link";
import { ReactElement, useMemo } from "react";
import { UserProfilePicture } from "components/profile-picture";
import { getProfileUrl } from "lib/util";
import { LinkButton } from "components/link-button";

export const UserCard = ({
  user,
  children,
}: {
  user: User;
  children?: ReactElement;
}) => {
  return (
    <div className="md:border md:border-gray-500 grid grid-cols-[30%_1fr] gap-x-2 lg:grid-cols-1 md:rounded-3xl p-5">
      <div>
        <Link
          href={getProfileUrl(user.role, user?.id)}
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
          href={getProfileUrl(user?.role, user?.id)}
          aria-label={`${user?.firstName} ${user?.lastName}`}
          className={clsx(
            archivo.className,
            "text-secondary-600 font-medium focus:outline-secondary-500 hover:underline"
          )}
        >
          {user?.firstName} {user?.lastName}
        </Link>

        <div className="text-xs">{user?.jobTitle}</div>

        {/* <div className="h-[4em] lg:h-[5em]">
          <ConnectionStack mutualUsers={mutualUsers || []} />
        </div> */}

        <div className="mt-8">
          <LinkButton
            radius="rounded-full"
            className="w-36"
            href={getProfileUrl(user?.role, user?.id)}
          >
            View profile
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
