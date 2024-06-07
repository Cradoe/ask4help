import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Interest } from "interfaces";

export const useInterests = () => {
  const { data, isPending, error, isError } = useQuery<Interest[]>({
    queryKey: ["interests"],
    queryFn: () => {
      return clientRequest.user.getInterests();
    },
  });

  return { data, isPending, error, isError };
};
