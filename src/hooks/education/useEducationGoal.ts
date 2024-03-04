import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { EducationGoal } from "interfaces";

export const useEducationGoal = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<EducationGoal[]>({
    queryKey: ["education", "goal", userId],
    queryFn: () => {
      return clientRequest.education.getEducationGoal(userId);
    },
  });

  return { data, isPending, error, isError };
};
