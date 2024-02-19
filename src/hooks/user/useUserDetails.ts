import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { User } from "interfaces";

export const useUserDetails = (userId: string) => {
  const { data, isPending, error, isError } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => {
      return clientRequest.user.getOne(userId);
    },
  });

  return { data, isPending, error, isError };
};
