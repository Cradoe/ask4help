"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";

interface MutationProps {
  taskId: string;
  file: File;
}
export const useUploadSop = (onSuccess?: Function) => {
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ taskId, file }: MutationProps) => {
      const formData = new FormData();
      formData.append("file", file);
      return clientRequest.task.uploadSop(taskId, formData);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        toast.success(response?.message || "SOP uploaded successfully!");

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
