import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Pagination, SopDocument } from "interfaces";
import { useState } from "react";
import { clientRequest } from "services/client";

export const useGetDraftSopReviews = () => {
  const [page, setpage] = useState<number>(1);

  const fetchPage = (page: number) => {
    setpage(page);
  };

  const { data, error, isError, isPending } = useQuery<{
    data: SopDocument[];
    pagination?: Pagination;
  }>({
    queryKey: ["sop-tasks", "draft", "reviews", "page", page],
    queryFn: () => {
      return clientRequest.task.getDraftSopReviews(page);
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
