import { getCookie } from "lib/cookie";
import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";

export const useAccount = () => {
  const isLoggedIn = getCookie("token");

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      return clientRequest.account.accountDetails();
    },
    enabled: !!isLoggedIn,
  });

  return { data, isPending, error, isError };
};
