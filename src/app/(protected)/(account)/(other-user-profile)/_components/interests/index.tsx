"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { useUserInterests } from "hooks/account";
import { Skeleton } from "components/skeleton";
import { useParams } from "next/navigation";

export const Interests = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";

  const { data: userInterests, isPending } = useUserInterests(userId);
  return (
    <section className="rounded-3xl bg-white px-3 md:px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Interests</h2>
      </div>

      <div className="pt-5 flex gap-4 flex-wrap">
        {isPending &&
          [...new Array(9)].map((_, index) => (
            <Skeleton key={index} height={40} borderRadius={100} width={120} />
          ))}
        {userInterests?.map((userInterest) => (
          <span
            key={userInterest?.id}
            className="bg-secondary-500 px-5 py-2 text-sm text-white rounded-full uppercase"
          >
            {userInterest?.interest?.name}
          </span>
        ))}
      </div>
    </section>
  );
};
