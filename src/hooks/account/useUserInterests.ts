import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { UserInterest } from "interfaces";

export const useUserInterests = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<UserInterest[]>({
    queryKey: ["profile", "interests", userId],
    queryFn: () => {
      return clientRequest.account.getUserInterests(userId);
    },
  });

  return { data, isPending, error, isError };
};
