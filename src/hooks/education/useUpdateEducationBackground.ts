"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduBackgroundValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof eduBackgroundValidationSchema>;
  educationId: string;
};

export const useUpdateEducationBackground = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ educationId, data }: MutationProp) => {
      return clientRequest.education.editEducationBackground(educationId, data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: ["education", "background", undefined],
        });

        toast.success(response?.message || "Data updated successfully!");

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

  return { mutate, isPending };
};
