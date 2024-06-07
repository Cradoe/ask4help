"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduBackgroundValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof eduBackgroundValidationSchema>;
};

export const useSaveEducationBackground = (onSuccess?: Function) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.education.saveEducationBackground(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        queryClient.invalidateQueries({
          queryKey: ["education", "background", undefined],
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
