import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Qualification } from "interfaces";

export const useQualifications = () => {
  const { data, isPending, error, isError } = useQuery<Qualification[]>({
    queryKey: ["qualifications"],
    queryFn: () => {
      return clientRequest.education.getQualifications();
    },
  });

  return { data, isPending, error, isError };
};
