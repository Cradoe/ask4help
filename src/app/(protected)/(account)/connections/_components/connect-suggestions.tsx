"use client";

import clsx from "clsx";
import { UserConnectCard } from "components/user-connect-card";
import { archivo } from "lib/font";
import { useConnectionSuggestions } from "hooks/connections";
import { SuggestedConnection } from "interfaces";
import { Skeleton } from "components/skeleton";
import { NoConnectionInvitations } from "components/no-connection-invitations.tsx";

export const ConnectSuggestions = () => {
  const { data: suggestedUsers, isPending } = useConnectionSuggestions();
  return (
    <section>
      <h2 className={clsx(archivo.className, "lg:text-xl")}>
        {" "}
        Add to your Connection
      </h2>

      {!isPending && suggestedUsers?.length === 0 && (
        <NoConnectionInvitations text="No suggestions found!" />
      )}

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

        {suggestedUsers?.map(
          (suggestion: SuggestedConnection, index: number) => (
            <UserConnectCard suggestion={suggestion} key={index} />
          )
        )}
      </div>

      {/* TODO:: implement pagination  */}
      {/* <div className="mt-10">
        <button className="text-sm underline text-secondary-500 focus:outline-secondary-500 p-1 flex gap-2 items-center">
          <span>Show more results</span> <FaArrowRightLong />
        </button>
      </div> */}
    </section>
  );
};
