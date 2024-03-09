"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { changePasswordValidationSchema } from "validations";

interface MutationProps {
  data: InferType<typeof changePasswordValidationSchema>;
}
export const useChangePassword = (onSuccess?: Function) => {
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProps) => {
      return clientRequest.account.changePassword(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        toast.success(response?.message || "Password updated successfully!");

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
