"use client";
import { APIResponse, ApiError } from "interfaces";
import { setCookie } from "lib/cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { forgotPasswordValidationSchema } from "validations";

type MutationProp = { data: InferType<typeof forgotPasswordValidationSchema> };

interface HookProps {
  showNotification?: boolean;
}
export const useForgotPassword = ({
  showNotification = false,
}: HookProps = {}) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.auth.forgotPassword(data);
    },
    onSuccess: async (response: APIResponse, variables) => {
      if (response?.statusCode === 201) {
        setCookie("email", variables.data.email);
        router.push("/forgot-password/success");

        if (showNotification) {
          toast.success(response?.message ?? "Email sent successfully!");
        }
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
