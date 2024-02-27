"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { eduBackgroundValidationSchema } from "validations";

type MutationProp = { data: InferType<typeof eduBackgroundValidationSchema> };

export const useSaveEducationBackground = () => {
  const router = useRouter();

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
        // redirect to next page
        router.push("/profile-setup/goal");
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
