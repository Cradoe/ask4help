import { getCookie } from "lib/cookie";
import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { User } from "interfaces";

export const useAccount = () => {
  const isLoggedIn = getCookie("token");

  const { data, isPending, error, isError } = useQuery<User>({
    queryKey: ["profile"],
    queryFn: () => {
      return clientRequest.account.accountDetails();
    },
    enabled: !!isLoggedIn,
  });

  return { data, isPending, error, isError };
};
