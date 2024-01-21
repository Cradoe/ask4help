"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

type MutationProp = { email: string };

export const useResendEmailVerification = () => {
  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ email }: MutationProp) => {
      return clientRequest.auth.resendEmailVerification({ email });
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.status === 200) {
        toast.success(response?.message ?? "Email sent successfully!");
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
