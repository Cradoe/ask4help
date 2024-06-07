import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Connection } from "interfaces";

export const useConnections = () => {
  const { data, isPending, error, isError } = useQuery<Connection[]>({
    queryKey: ["connections"],
    queryFn: () => {
      return clientRequest.connection.myConnections();
    },
  });

  return { data, isPending, error, isError };
};
