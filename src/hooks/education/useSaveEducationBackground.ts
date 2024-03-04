"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduBackgroundValidationSchema } from "validations";
import { useState } from "react";

type MutationProp = {
  data: InferType<typeof eduBackgroundValidationSchema>;
  userId?: string;
};

export const useSaveEducationBackground = (onSuccess?: Function) => {
  const [userId, setUserId] = useState<string | undefined>();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data, userId }: MutationProp) => {
      setUserId(userId);
      return clientRequest.education.saveEducationBackground(data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 201) {
        queryClient.invalidateQueries({
          queryKey: ["education", "background", userId],
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
