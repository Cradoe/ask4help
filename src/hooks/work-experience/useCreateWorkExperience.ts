"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { workExperienceValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof workExperienceValidationSchema>;
};

export const useCreateWorkExperience = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.workExperience.saveWorkExperience(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        queryClient.invalidateQueries({
          queryKey: ["work-experience", undefined],
        });

        toast.success(response?.message || "Data added successfully!");

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
