"use client";

import clsx from "clsx";
import { archivo } from "lib/font";
import Link from "next/link";
import { InvitationCard } from "./invitation-card";
import { usePendingInvitations } from "hooks/connections";
import { Connection } from "interfaces";
import { Skeleton } from "components/skeleton";

export const Invitations = () => {
  const { data: invitations, isPending: isLoading } = usePendingInvitations();
  return (
    <section className="pb-10 border-b border-b-gray-400">
      <div className="flex flex-col gap-y-4 md:flex-row lg:items-center lg:justify-between px-5 md:px-8">
        <h2 className={clsx(archivo.className, "lg:text-xl")}>
          {isLoading || (invitations && invitations?.length > 0)
            ? "Invitations"
            : "No pending Invitations"}
        </h2>
        <div className="flex items-center gap-3">
          <Link
            className="bg-secondary-50 px-3 md:px-6 py-1.5 rounded-full text-xs lg:text-sm hover:bg-secondary-500 hover:text-white"
            href="/connections/active"
          >
            My connections
          </Link>
          <Link
            className="bg-secondary-50 px-3 md:px-8 py-1.5 rounded-full text-xs lg:text-sm  hover:bg-secondary-500 hover:text-white"
            href="/connections/pending/sent"
          >
            Manage
          </Link>
        </div>
      </div>

      <div className="flex flex-col pt-5">
        {isLoading &&
          [...new Array(1)]?.map((_, index: number) => (
            <Skeleton
              // className="border border-gray-500"
              height={70}
              borderRadius={0}
              key={index}
            />
          ))}

        {invitations?.map((invitation: Connection) => (
          <InvitationCard invitation={invitation} key={invitation.id} />
        ))}
      </div>
    </section>
  );
};
