"use client";
import { APIResponse, ApiError, User } from "interfaces";
import { setCookie } from "lib/cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { InferType } from "yup";
import { loginValidationSchema } from "validations";
import { UserRole } from "lib/enum";

type MutationProp = { data: InferType<typeof loginValidationSchema> };

export const useSignIn = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return clientRequest.auth.login(data);
    },
    onSuccess: async (response: APIResponse) => {
      const user: User = response?.data;

      if (response?.statusCode === 200) {
        // check if user has verified email
        if (!user.isVerified) {
          // save email to cookies, needed in the next page
          setCookie("email", user.email);

          // redirect to verification page
          router.push("/verify-email");
          return;
        }

        toast.success(response?.message ?? "Welcome back");
        setCookie("token", response?.accessToken!);

        setCookie("role", user?.role!);

        if (user?.role === UserRole.USER) {
          router.push("/dashboard");
        } else if (user?.role === UserRole.HELPER) {
          router.push("/helper/dashboard");
        } else {
          // unknown/lost user
          toast.error("Access denied!");
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
