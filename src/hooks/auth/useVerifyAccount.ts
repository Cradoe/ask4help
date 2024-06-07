"use client";
import { APIResponse, ApiError } from "interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { clientRequest } from "services/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useVerifyAccount = ({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation<APIResponse, ApiError>({
    // @ts-ignore
    mutationFn: () => {
      return clientRequest.auth.verifyAccount({ email, verificationCode });
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.statusCode === 200) {
        router.replace("/verify-email/success");
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

  //   call mutate on load
  useEffect(() => {
    if (email && verificationCode && !isPending) {
      mutate();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { mutate, isPending };
};
