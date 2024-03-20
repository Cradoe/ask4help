"use client";

import { LinkButton } from "components/link-button";
import { useAccount } from "hooks/account";
import { UserRole } from "lib/enum";

export const DiscoverConnectionCard = () => {
  const { data: user } = useAccount();

  return (
    <div className="bg-discover-connection bg-cover bg-no-repeat h-[20em] p-7 pb-10 text-white gap-y-3 flex flex-col justify-end rounded-xl">
      <div className="font-semibold text-3xl">
        Discover More {user?.role === UserRole.HELPER && "Students"}
        {user?.role === UserRole.USER && "Advisors"}
        {!user && "People"}
      </div>
      <div>
        Explore from over 15K {user?.role === UserRole.HELPER && "students"}
        {user?.role === UserRole.USER && "mentors"}
        {!user && "people"}
      </div>
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
