import { useQuery } from "@tanstack/react-query";
import { SopDocument } from "interfaces";

import { clientRequest } from "services/client";

export const useMyReviewedSops = () => {
  const { data, error, isError, isPending } = useQuery<SopDocument[]>({
    queryKey: ["sop-tasks", "reviewed"],
    queryFn: () => {
      return clientRequest.task.myReviewedSOP();
    },
  });

  return {
    data: data,
    error,
    isPending,
    isError,
  };
};
