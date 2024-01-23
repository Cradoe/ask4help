"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { MaskPasswordInput } from "components/mask-password-input";
import { useSignUp } from "hooks/auth";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupValidationSchema } from "validations";
import { InferType } from "yup";

export const SignUpForm = () => {
  const { mutate: signUp, isPending: isSubmitting } = useSignUp();
  const params = useParams();

  const role = params.role as string;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role,
    },
    resolver: yupResolver(signupValidationSchema),
  });

  const handleSignUp: SubmitHandler<
    InferType<typeof signupValidationSchema>
  > = (data) => signUp({ data });

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="mt-6">
      <Input
        label="Fullname"
        placeholder="Enter your full name"
        error={errors.fullname}
        {...register("fullname", { required: true })}
      />

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

      <MaskPasswordInput
        label="Confirm password"
        placeholder="Re-enter your password"
        error={errors.confirmPassword}
        {...register("confirmPassword", { required: true })}
      />

      <div className="text-sm py-3 text-center">
        By clicking Sign up, you agree to the Ask4Help{" "}
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 hover:underline "
          href="/legal/user-agreement"
        >
          User Agreement
        </Link>
        ,{" "}
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 hover:underline "
          href="/legal/privacy-policy"
        >
          Privacy Policy
        </Link>
        , and{" "}
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 hover:underline "
          href="/legal/cookie-policy"
        >
          Cookie Policy
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
          Sign Up
        </Button>
      </div>
    </form>
  );
};
