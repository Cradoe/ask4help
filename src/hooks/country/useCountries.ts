import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Country } from "interfaces";

export const useCountries = () => {
  const { data, isPending, error, isError } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: () => {
      return clientRequest.user.getCountries();
    },
  });

  return { data, isPending, error, isError };
};
