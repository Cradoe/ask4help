"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { useSearchForUsers } from "hooks/user";
import { Skeleton } from "components/skeleton";
import { User } from "interfaces";
import { UserCard } from "./_components/user-card";
import { NoConnectionInvitations } from "components/no-connection-invitations.tsx";
import { addCommaToNumber } from "lib/util";

export default function Page() {
  const { data: searchResults, pagination, isPending } = useSearchForUsers();
  console.log("pagination", pagination);

  return (
    <div className="bg-white py-10 space-y-10 rounded-3xl py-10 px-5 md:px-8">
      <h2 className={clsx(archivo.className, "lg:text-xl")}>
        About {addCommaToNumber(pagination?.total || 0)}{" "}
        {(pagination?.total || 0) > 1 ? "results" : "result"}
      </h2>

      {!isPending && searchResults?.length === 0 && (
        <NoConnectionInvitations text="No result found!" />
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

        {searchResults?.map((user: User) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
