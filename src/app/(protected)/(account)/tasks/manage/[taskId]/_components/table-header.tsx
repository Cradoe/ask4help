import { SopDocument, TableCell } from "interfaces";
import Link from "next/link";
import { formatDate } from "lib/util";
import { LinkButton } from "components/link-button";
import { LiaEdit } from "react-icons/lia";
import { SOP_DOCUMENT_STATUS } from "lib/enum";

export const TableHeader = [
  {
    accessor: "user",
    Cell: ({ value, row }: TableCell) => {
      return (
        <Link
          href={`/user/${row?.original?.user?.id}`}
          className="underline text-secondary-500"
        >
          {value?.firstName} {value?.lastName}
        </Link>
      );
    },
    Header: () => <span>Name</span>,
  },

  {
    accessor: "createdAt",
    Cell: ({ value }: TableCell) => formatDate(value),
    Header: () => <span>Date submitted</span>,
  },

  {
    accessor: "status",
    Cell: ({ value }: TableCell) => {
      if (value?.toString()?.toLowerCase() === "pending") {
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
      const submission: SopDocument = row?.original;
      return (
        <div>
          {submission?.review?.status !== SOP_DOCUMENT_STATUS.COMPLETED ? (
            <LinkButton
              variant="transparent"
              size="sm"
              className="border-none gap-2 text-secondary-500 items-center flex hover:underline"
              href={`/tasks/edit/${row?.original?.id}`}
            >
              <span>Edit</span>
              <LiaEdit />
            </LinkButton>
          ) : (
            <span>--</span>
          )}
        </div>
      );
    },
    Header: () => <span>Review SOP</span>,
    disableSortBy: true,
    placeHolder: true,
  },
];
