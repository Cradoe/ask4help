import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Pagination, User } from "interfaces";
import { useState } from "react";

export const useSearchForMiniUsers = () => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const { data, isPending, error, isError } = useQuery<{
    data: User[];
    pagination: Pagination;
  }>({
    queryKey: ["users", "search", searchQuery],
    queryFn: () => {
      return clientRequest.user.miniSearch(searchQuery || "");
    },
    enabled: !!searchQuery,
    refetchInterval: 5_000,
  });

  return {
    data: data?.data,
    pagination: data?.pagination,
    isPending,
    error,
    isError,
    searchQuery,
    setSearchQuery,
  };
};
