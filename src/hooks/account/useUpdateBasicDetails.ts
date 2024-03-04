"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { basicUserDetailsValidationSchema } from "validations";

interface MutationProps {
  data: InferType<typeof basicUserDetailsValidationSchema>;
}
export const useUpdateBasicDetails = (onSuccess?: Function) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProps) => {
      return clientRequest.account.editBasicDetails(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        toast.success(response?.message || "Account updated successfully!");
        queryClient.invalidateQueries({
          queryKey: ["profile"],
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
