import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Pagination, SopTask } from "interfaces";
import { useState } from "react";
import { clientRequest } from "services/client";

export const useGetMySopTasks = () => {
  const [page, setpage] = useState<number>(1);

  const fetchPage = (page: number) => {
    setpage(page);
  };

  const { data, error, isError, isPending } = useQuery<{
    data: SopTask[];
    pagination?: Pagination;
  }>({
    queryKey: ["sop-tasks", "page", page],
    queryFn: () => {
      return clientRequest.task.getAll(page);
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
