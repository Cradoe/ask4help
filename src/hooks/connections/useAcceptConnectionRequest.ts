"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

export const useAcceptConnectionRequest = (onSuccess?: Function) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    string
  >({
    // @ts-ignore
    mutationFn: (connectionId: string) => {
      return clientRequest.connection.acceptRequest(connectionId);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        toast.success(response?.message || "Request accepted successfully!");
        queryClient.invalidateQueries({
          queryKey: ["connections", "received"],
        });
        onSuccess?.();
      } else {
        if (response) {
          toast.error(response?.message || "Opps! Something went wrong.");
        }
      }
    },
    onError: (error: ApiError) => {
      toast.error(error?.message || "Opps! Something went wrong.");
    },
  });

  return { mutate, isPending, isSuccess };
};
