"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduGoalsValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof eduGoalsValidationSchema>;
  educationId: string;
};

export const useUpdateEducationGoal = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data, educationId }: MutationProp) => {
      return clientRequest.education.editEducationGoal(educationId, data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: ["education", "goal", undefined],
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
