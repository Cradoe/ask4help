"use client";

import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";

export const useProfileCompletionScore = () => {
  const { data, isPending, error, isError } = useQuery<{
    completionPercentage: number;
    actionText: string;
  }>({
    queryKey: ["profile", "profile-completion-score"],
    queryFn: () => {
      return clientRequest.account.getProfileCompletionScore();
    },
  });

  return { data, isPending, error, isError };
};
