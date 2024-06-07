import { useQuery } from "@tanstack/react-query";
import { SopTask } from "interfaces";
import { useParams } from "next/navigation";
import { clientRequest } from "services/client";

export const useAdvisorActiveSopTask = () => {
  const params = useParams();
  const userId = params?.userId as string;
  const { data, error, isError, isPending } = useQuery<SopTask>({
    queryKey: ["sop-task", userId],
    queryFn: () => {
      return clientRequest.task.getUserActiveSopTask(userId);
    },
  });

  return {
    data,
    error,
    isPending,

    isError,
  };
};
