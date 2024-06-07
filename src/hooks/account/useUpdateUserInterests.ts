"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { interestValidationSchema } from "validations";

interface MutationProps {
  data: InferType<typeof interestValidationSchema>;
}
export const useUpdateUserInterests = (onSuccess?: Function) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProps) => {
      return clientRequest.account.updateUserInterests(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        toast.success(response?.message || "Interests updated successfully!");
        queryClient.invalidateQueries({
          queryKey: ["profile", "interests", undefined],
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
