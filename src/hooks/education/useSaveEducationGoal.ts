"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduGoalsValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof eduGoalsValidationSchema>;
};

export const useSaveEducationGoal = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.education.saveEducationGoal(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        queryClient.invalidateQueries({
          queryKey: ["education", "goal", undefined],
        });

        toast.success(response?.message || "Data saved successfully!");

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
