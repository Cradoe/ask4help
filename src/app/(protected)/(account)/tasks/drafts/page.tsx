"use client";
import clsx from "clsx";
import { Table } from "components/table";
import { archivo } from "lib/font";
import { TableHeader } from "./_components/table-header";
import Link from "next/link";
import { Button } from "components/button";
import { useGetDraftSopReviews } from "hooks/task";

export default function Page() {
  const {
    data: drafts,
    fetchPage,
    pagination,
    isPending,
  } = useGetDraftSopReviews();

  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 px-6 md:px-8 lg:mr-10">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
          Drafts
        </h2>

        <div className="flex items-center gap-4">
          <Link
            href="/tasks/manage"
            className="bg-secondary-50 text-black rounded-full px-4 py-2 text-sm hover:bg-secondary-500 ease-in-out duration-300 focus:outline-secondary-500 hover:text-white"
          >
            Task Created
          </Link>
          <Button variant="secondary" size="sm" radius="rounded-full" disabled>
            Drafts
          </Button>
        </div>
      </div>

      <div>
        <Table
          data={drafts ?? []}
          columns={TableHeader}
          isLoading={isPending}
          pagination={pagination}
          setPage={fetchPage}
        />
      </div>
    </div>
  );
}
