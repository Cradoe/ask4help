"use client";
import { APIResponse, ApiError } from "interfaces";
import { setCookie } from "lib/cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { signupValidationSchema } from "validations";

type MutationProp = { data: InferType<typeof signupValidationSchema> };

export const useSignUp = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      const [firstName, lastName] = data.fullname.split(" ");
      data = {
        ...data,
        firstName,
        lastName,
      };
      return clientRequest.auth.register(data);
    },
    onSuccess: async (response: APIResponse, variables) => {
      if (response?.statusCode === 201) {
        setCookie("email", variables.data.email);
        router.push("/verify-email");
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
