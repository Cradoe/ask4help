"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { MaskPasswordInput } from "components/mask-password-input";
import { useResetPassword } from "hooks/auth";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordValidationSchema } from "validations";
import { InferType } from "yup";

export const ResetPasswordForm = () => {
  const { mutate: submitRequest, isPending: isSubmitting } = useResetPassword();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("ref");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      resetToken: (resetToken as string) || "",
    },
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const processSubmit: SubmitHandler<
    InferType<typeof resetPasswordValidationSchema>
  > = (data) => submitRequest({ data });

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="mt-6">
      <MaskPasswordInput
        label="Password"
        placeholder="Password (min. 8 character)"
        error={errors.newPassword}
        {...register("newPassword", { required: true })}
      />

      <MaskPasswordInput
        label="Confirm password"
        placeholder="Password (min. 8 character)"
        error={errors.confirmPassword}
        {...register("confirmPassword", { required: true })}
      />

      <div className="pt-5">
        <Button
          type="submit"
          className="h-12 block w-full"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Reset password
        </Button>
      </div>
    </form>
  );
};
