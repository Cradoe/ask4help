import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Connection } from "interfaces";

export const usePendingInvitations = () => {
  const { data, isPending, error, isError } = useQuery<Connection[]>({
    queryKey: ["connections", "received"],
    queryFn: () => {
      return clientRequest.connection.pendingInvitations();
    },
  });

  return { data, isPending, error, isError };
};
