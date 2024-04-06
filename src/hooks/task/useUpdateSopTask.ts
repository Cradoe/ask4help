"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { sopReviewTaskValidationSchema } from "validations";

interface MutationProps {
  taskId: string;
  data: InferType<typeof sopReviewTaskValidationSchema>;
}
export const useUpdateSopTask = (onSuccess?: Function) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProps
  >({
    // @ts-ignore
    mutationFn: ({ taskId, data }: MutationProps) => {
      return clientRequest.task.updateTask(taskId, data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        toast.success(response?.message || "Task updated successfully!");
        queryClient.invalidateQueries({
          queryKey: ["sop-tasks"],
        });

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
