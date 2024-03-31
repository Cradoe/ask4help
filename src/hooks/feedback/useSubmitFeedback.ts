"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { feedbackValidationSchema } from "validations";

type MutationProp = {
  data: InferType<typeof feedbackValidationSchema>;
};

export const useSubmitFeedback = (onSuccess?: Function) => {
  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.feedback.saveFeedback(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        toast.success(response?.message || "Feedback submitted successfully!");

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
