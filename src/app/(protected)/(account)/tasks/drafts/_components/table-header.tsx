import { TableCell } from "interfaces";
import Link from "next/link";
import { formatDate } from "lib/util";
import { LinkButton } from "components/link-button";
import { LiaEdit } from "react-icons/lia";

export const TableHeader = [
  {
    accessor: "user",
    Cell: ({ value }: TableCell) => {
      return (
        <Link
          href={`/user/${value?.id}`}
          className="underline text-secondary-500"
        >
          {value?.firstName} {value?.lastName}
        </Link>
      );
    },
    Header: () => <span>Name</span>,
  },

  {
    accessor: "task",
    Cell: ({ value }: TableCell) => {
      return (
        <Link
          href={`/tasks/manage/${value?.id}`}
          className="underline text-secondary-500"
        >
          {value?.title}
        </Link>
      );
    },
    Header: () => <span>Task</span>,
  },

  {
    accessor: "createdAt",
    Cell: ({ value }: TableCell) => formatDate(value),
    Header: () => <span>Last submitted</span>,
  },

  {
    accessor: "review.updatedAt",
    Cell: ({ value }: TableCell) => formatDate(value),
    Header: () => <span>Last modified</span>,
  },
  {
    accessor: "status",
    Cell: ({ value }: TableCell) => {
      if (value?.toString()?.toLowerCase() === "active") {
        return (
          <span className="bg-secondary-50 px-5 py-1 rounded-full">
            {value}
          </span>
        );
      }

      if (value?.toString()?.toLowerCase() === "completed") {
        return (
          <span className="bg-green-200 px-5 py-1 rounded-full">{value}</span>
        );
      }

      if (value?.toString()?.toLowerCase() === "reviewing") {
        return (
          <span className="bg-blue-200 px-5 py-1 rounded-full">{value}</span>
        );
      }
    },
    Header: () => <span>Status</span>,
  },
  {
    accessor: "action",
    Cell: ({ row }: TableCell) => {
      return (
        <div>
          <LinkButton
            variant="transparent"
            size="sm"
            className="border-none gap-2 text-secondary-500 items-center flex hover:underline"
            href={`/tasks/edit/${row?.original?.id}`}
          >
            <span>Continue</span>
            <LiaEdit />
          </LinkButton>
        </div>
      );
    },
    Header: () => <span>Review SOP</span>,
    disableSortBy: true,
    placeHolder: true,
  },
];
