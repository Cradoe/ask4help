"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { useForgotPassword } from "hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { forgotPasswordValidationSchema } from "validations";
import { InferType } from "yup";

export const ForgotPasswordForm = () => {
  const { mutate: submitRequest, isPending: isSubmitting } =
    useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const processSubmit: SubmitHandler<
    InferType<typeof forgotPasswordValidationSchema>
  > = (data) => submitRequest({ data });

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="mt-6">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email}
        {...register("email", { required: true })}
      />
      <div className="pt-5">
        <Button
          type="submit"
          className="h-12 block w-full"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Send reset link
        </Button>
      </div>
    </form>
  );
};
