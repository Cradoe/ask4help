"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { useLogout } from "hooks/auth";

export const useCloseAccount = (onSuccess?: Function) => {
  const { mutate: logout, isPending: isLoggingOutt } = useLogout(onSuccess);
  const { mutate, isPending, isSuccess } = useMutation<APIResponse, ApiError>({
    // @ts-ignore
    mutationFn: () => {
      return clientRequest.account.closeAccount();
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        toast.success(response?.message || "Account closed successfully!");

        // log user out
        logout();
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

  return { mutate, isPending: isPending || isLoggingOutt, isSuccess };
};
