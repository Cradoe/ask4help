import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Connection } from "interfaces";

export const useSentInvitations = () => {
  const { data, isPending, error, isError } = useQuery<Connection[]>({
    queryKey: ["connections", "sent"],
    queryFn: () => {
      return clientRequest.connection.sentInvitations();
    },
  });

  return { data, isPending, error, isError };
};
