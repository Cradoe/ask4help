import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { EducationBackground } from "interfaces";

export const useEducationBackground = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<EducationBackground[]>({
    queryKey: ["education", "background", userId],
    queryFn: () => {
      return clientRequest.education.getEducationBackground(userId);
    },
  });

  return { data, isPending, error, isError };
};
