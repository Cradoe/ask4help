"use client";
import clsx from "clsx";
import { Table } from "components/table";
import { archivo } from "lib/font";
import { TableHeader } from "./_components/table-header";
import { SopTask } from "interfaces";

const dummyTasks: SopTask[] = [
  {
    id: "1",
    title: "dddd",
    description: "fff",
    quantity: "20",
    collectionStartDate: "2020-03-20",
    collectionEndDate: "2020-03-20",
    returnStartDate: "2020-03-20",
    returnEndDate: "2020-03-20",
    createdAt: "2020-03-20",
    status: "Active",
  },
  {
    id: "2",
    title: "dddd",
    description: "fff",
    quantity: "20",
    collectionStartDate: "2020-03-20",
    collectionEndDate: "2020-03-20",
    returnStartDate: "2020-03-20",
    returnEndDate: "2020-03-20",
    createdAt: "2020-03-20",
    status: "Reviewing",
  },
  {
    id: "3",
    title: "dddd",
    description: "fff",
    quantity: "20",
    collectionStartDate: "2020-03-20",
    collectionEndDate: "2020-03-20",
    returnStartDate: "2020-03-20",
    returnEndDate: "2020-03-20",
    createdAt: "2020-03-20",
    status: "Completed",
  },
];
export default function Page() {
  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 px-6 md:px-8 lg:mr-10">
      <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
        Task Management
      </h2>

      <div>
        <Table
          data={dummyTasks ?? []}
          columns={TableHeader}
          isLoading={false}
          meta={{
            previousCursor: "dd",
            nextCursor: "dd",
          }}
          setPage={() => {}}
        />
      </div>
    </div>
  );
}
