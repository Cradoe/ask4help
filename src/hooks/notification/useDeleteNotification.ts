"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

export const useDeleteNotification = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    string
  >({
    // @ts-ignore
    mutationFn: (notificationId: string) => {
      return clientRequest.notification.delete(notificationId);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: ["notifications"],
        });

        toast.success(
          response?.message || "Notification deleted successfully!"
        );
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
