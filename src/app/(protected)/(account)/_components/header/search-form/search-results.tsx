"use client";

import { User } from "interfaces";
import { UserCard } from "./user-card";
import { LinkButton } from "components/link-button";
import { Skeleton } from "components/skeleton";

export const SearchResults = ({
  isPending,
  users,
  searchQuery,
  moreResults,
}: {
  users: User[];
  searchQuery?: string;
  moreResults?: boolean;
  isPending?: boolean;
}) => {
  return (
    <div>
      {searchQuery && (
        <div
          className={`absolute top-[110%] w-[120%] right-0 z-30 bg-white rounded-xl shadow-lg py-1  focus:outline-none pb-5`}
          role="menu"
          aria-orientation="vertical"
        >
          {/* loading state  */}
          {isPending &&
            searchQuery &&
            [...new Array(5)]?.map((_, index: number) => (
              <Skeleton key={index} height={40} />
            ))}

          {/* user lists */}
          <div>
            {users?.map((user) => (
              <UserCard user={user} key={user?.id} />
            ))}
          </div>

          {/* no result  */}
          {!isPending && users?.length === 0 && (
            <div className="h-12 flex items-center justify-center">
              No result
            </div>
          )}

          {/* more results  */}
          {moreResults && (
            <div className="border-t border-t-gray-300">
              <div>&nbsp;</div>
              <div>
                <LinkButton
                  href={`/search?q=${searchQuery}`}
                  className="text-secondary-500 underline border-none block"
                  variant="transparent"
                >
                  Show more results
                </LinkButton>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
