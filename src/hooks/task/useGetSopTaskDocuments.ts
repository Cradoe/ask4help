import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Pagination, SopDocument } from "interfaces";
import { useParams } from "next/navigation";
import { useState } from "react";
import { clientRequest } from "services/client";

export const useGetSopTaskDocuments = () => {
  const params = useParams();
  const taskId = params.taskId as string;
  const [page, setpage] = useState<number>(1);

  const fetchPage = (page: number) => {
    setpage(page);
  };

  const { data, error, isError, isPending } = useQuery<{
    data: SopDocument[];
    pagination?: Pagination;
  }>({
    queryKey: ["sop-tasks", taskId, "documents", "page", page],
    queryFn: () => {
      return clientRequest.task.getSopTaskDocuments(taskId, page);
    },
    placeholderData: keepPreviousData,
  });

  return {
    data: data?.data,
    fetchPage,
    pagination: data?.pagination,
    error,
    isPending,
    isError,
  };
};
