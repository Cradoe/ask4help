"use client";

import { LinkButton } from "components/link-button";
import { useCountUsers } from "hooks/user";

export const DiscoverConnectionCard = () => {
  const { formattedCount } = useCountUsers();

  return (
    <div className="bg-discover-connection bg-cover bg-no-repeat h-[20em] p-7 pb-10 text-white gap-y-3 flex flex-col justify-end rounded-xl">
      <div className="font-semibold text-3xl">Discover More People</div>
      {formattedCount && <div>Explore from over {formattedCount} users</div>}
      <div>
        <LinkButton
          href="/connections"
          className="w-32 text-black"
          radius="rounded-full"
        >
          Discover
        </LinkButton>
      </div>
    </div>
  );
};
