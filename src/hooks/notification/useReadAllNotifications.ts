"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

export const useReadAllNotifications = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<APIResponse, ApiError>({
    // @ts-ignore
    mutationFn: () => {
      return clientRequest.notification.markAllAsRead();
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: ["notifications"],
        });

        toast.success(response?.message || "Notifications marked as read!");
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
