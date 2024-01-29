"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Select } from "components/select";
import { useSignIn } from "hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { eduBackgroundValidationSchema } from "validations";
import { InferType } from "yup";

export const ProfileForm = () => {
  const { mutate, isPending: isSubmitting } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eduBackgroundValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof eduBackgroundValidationSchema>
  > = (data) => {
    // mutate({ data })
  };

  return (
    <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
      <Select
        label="Highest Educational Level Attained"
        placeholder="e.g Bachelor of Science"
        error={errors.highestQualification}
        {...register("highestQualification", { required: true })}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
      />

      <Select
        label="Field of Study"
        placeholder="Please select"
        error={errors.fieldOfStudy}
        {...register("fieldOfStudy", { required: true })}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
      />

      <Select
        label="Class of degree"
        placeholder="Please select"
        error={errors.classOfDegree}
        {...register("classOfDegree", { required: true })}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
      />

      <Input
        label="Graduation Year"
        placeholder="Enter Graduation Year "
        error={errors.graduationYear}
        {...register("graduationYear", { required: true })}
      />

      <div className="pt-5">
        <Button
          type="submit"
          className="h-12 w-32"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Next
        </Button>
      </div>
    </form>
  );
};
