import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { ClassOfDegree } from "interfaces";

export const useClassOfDegrees = () => {
  const { data, isPending, error, isError } = useQuery<ClassOfDegree[]>({
    queryKey: ["class-of-degrees"],
    queryFn: () => {
      return clientRequest.education.getClassOfDegrees();
    },
  });

  return { data, isPending, error, isError };
};
