import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";

export const useCountConnections = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<{ count: number }>({
    queryKey: ["connections", "count"],
    queryFn: () => {
      return clientRequest.connection.countConnections(userId);
    },
  });

  return { data, isPending, error, isError };
};
