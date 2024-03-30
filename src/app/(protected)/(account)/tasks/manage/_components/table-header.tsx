import { TableCell } from "interfaces";
import Link from "next/link";
import { TableRowActions } from "./table-row-actions";
import { addCommaToNumber, formatDate } from "lib/util";

export const TableHeader = [
  {
    accessor: "createdAt",
    Cell: ({ value }: TableCell) => formatDate(value),
    Header: () => <span>Date created</span>,
  },
  {
    accessor: "title",
    Cell: ({ value, row }: TableCell) => {
      return (
        <Link
          href={`/tasks/manage/${row?.original?.id}`}
          className="underline text-secondary-500"
        >
          {value}
        </Link>
      );
    },
    Header: () => <span>Task title</span>,
  },
  {
    accessor: "quantity",
    Cell: ({ value }: TableCell) => (
      <span className="bg-secondary-50 px-5 py-1 rounded-full">
        {addCommaToNumber(value)}
      </span>
    ),
    Header: () => <span>Quantity</span>,
  },

  {
    accessor: "returnEndDate",
    Cell: ({ value }: TableCell) => formatDate(value),
    Header: () => <span>Return deadline</span>,
  },

  {
    accessor: "status",
    Cell: ({ value }: TableCell) => {
      if (value?.toString()?.toLowerCase() === "active") {
        return (
          <span className="bg-secondary-50 px-5 py-1 rounded-full text-xs">
            {value}
          </span>
        );
      }

      if (value?.toString()?.toLowerCase() === "closed") {
        return (
          <span className="bg-red-200 px-5 py-1 rounded-full text-xs">
            {value}
          </span>
        );
      }
    },
    Header: () => <span>Status</span>,
  },
  {
    accessor: "Manage",
    Cell: ({ row }: TableCell) => {
      return <TableRowActions row={row} />;
    },
    Header: () => <span>Manage</span>,
    disableSortBy: true,
    placeHolder: true,
  },
];
