import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Pagination, User } from "interfaces";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const useSearchForUsers = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchQuery, setSearchQuery] = useState<string>();

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  const { data, isPending, error, isError } = useQuery<{
    data: User[];
    pagination: Pagination;
  }>({
    queryKey: ["users", "search", searchQuery],
    queryFn: () => {
      return clientRequest.user.search(searchQuery || "");
    },
    enabled: !!searchQuery,
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
