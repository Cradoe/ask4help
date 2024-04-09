import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Connection } from "interfaces";

export const useFindConnectionStatus = (userId: string) => {
  const { data, isPending, error, isError } = useQuery<Connection>({
    queryKey: ["connections", "status", userId],
    queryFn: () => {
      return clientRequest.connection.findConnectionStatus(userId);
    },
    enabled: !!userId,
  });

  return { data, isPending, error, isError };
};
