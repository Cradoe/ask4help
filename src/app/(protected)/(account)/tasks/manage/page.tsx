"use client";
import clsx from "clsx";
import { Table } from "components/table";
import { archivo } from "lib/font";
import { TableHeader } from "./_components/table-header";
import { useGetMySopTasks } from "hooks/task";

export default function Page() {
  const { data: tasks, fetchPage, pagination, isPending } = useGetMySopTasks();

  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 px-6 md:px-8">
      <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
        Task Management
      </h2>

      <div>
        <Table
          data={tasks ?? []}
          columns={TableHeader}
          isLoading={isPending}
          pagination={pagination}
          setPage={fetchPage}
        />
      </div>
    </div>
  );
}
