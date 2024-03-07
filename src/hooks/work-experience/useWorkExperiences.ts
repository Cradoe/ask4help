import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { WorkExperience } from "interfaces";

export const useWorkExperiences = (userId?: string) => {
  const { data, isPending, error, isError } = useQuery<WorkExperience[]>({
    queryKey: ["work-experience", userId],
    queryFn: () => {
      return clientRequest.workExperience.getExperiences(userId);
    },
  });

  return { data, isPending, error, isError };
};
