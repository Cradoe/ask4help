"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

interface MutationProps {
  file: File;
}
export const useUploadAttachment = (onSuccess?: Function) => {
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ file }: MutationProps) => {
      const formData = new FormData();
      formData.append("file", file as File);

      return clientRequest.message.uploadAttachment(formData);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        onSuccess?.(response?.data);
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
