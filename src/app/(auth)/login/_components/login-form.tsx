"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { MaskPasswordInput } from "components/mask-password-input";
import { useSignIn } from "hooks/auth";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginValidationSchema } from "validations";
import { InferType } from "yup";

export const LoginForm = () => {
  const { mutate: signIn, isPending: isSubmitting } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleLogin: SubmitHandler<InferType<typeof loginValidationSchema>> = (
    data
  ) => signIn({ data });

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email}
        {...register("email", { required: true })}
      />

      <MaskPasswordInput
        label="Password"
        placeholder="Password (min. 8 character)"
        error={errors.password}
        {...register("password", { required: true })}
      />

      <div className="text-sm py-3 flex justify-end items-center">
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 hover:underline "
          href="/forgot-password"
        >
          Forgot password?
        </Link>
      </div>
      <div className="pt-5">
        <Button
          type="submit"
          className="h-12 block w-full"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </div>
    </form>
  );
};
