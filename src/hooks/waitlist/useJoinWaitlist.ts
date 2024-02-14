"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { waitlistValidationSchema } from "validations";

type MutationProp = { data: InferType<typeof waitlistValidationSchema> };

export const useJoinWaitlist = (onSuccess?: Function) => {
  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.account.joinWaitlist(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.status === 201) {
        onSuccess?.();
      } else {
        if (response) {
          // @ts-ignore
          toast.error(response?.body?.message || "Opps! Something went wrong.");
        }
      }
    },
    onError: (error: ApiError) => {
      toast.error(error?.message || "Opps! Something went wrong.");
    },
  });

  return { mutate, isPending };
};
