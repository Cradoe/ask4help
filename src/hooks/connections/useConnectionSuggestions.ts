import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { SuggestedConnection } from "interfaces";

export const useConnectionSuggestions = () => {
  const { data, isPending, error, isError } = useQuery<SuggestedConnection[]>({
    queryKey: ["connections", "suggestions"],
    queryFn: () => {
      return clientRequest.connection.suggestions();
    },
  });

  return { data, isPending, error, isError };
};
