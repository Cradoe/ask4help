import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Faculty } from "interfaces";

export const useFaculties = () => {
  const { data, isPending, error, isError } = useQuery<Faculty[]>({
    queryKey: ["faculties"],
    queryFn: () => {
      return clientRequest.education.getFaculties();
    },
  });

  return { data, isPending, error, isError };
};
