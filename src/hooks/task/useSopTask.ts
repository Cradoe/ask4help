import { useQuery } from "@tanstack/react-query";
import { SopTask } from "interfaces";
import { clientRequest } from "services/client";

export const useSopTask = (sopTaskId: string) => {
  const { data, error, isError, isPending } = useQuery<SopTask>({
    queryKey: ["sop-tasks", sopTaskId],
    queryFn: () => {
      return clientRequest.task.getOne(sopTaskId);
    },
  });

  return {
    data,
    error,
    isPending,
    isError,
  };
};
