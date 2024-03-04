"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Select } from "components/select";
import { useSignIn } from "hooks/auth";
import {
  useClassOfDegrees,
  useFaculties,
  useQualifications,
  useSaveEducationBackground,
} from "hooks/education";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { eduBackgroundValidationSchema } from "validations";
import { InferType } from "yup";

export const ProfileForm = () => {
  const router = useRouter();

  const onSuccess = () => {
    // redirect to next page
    router.push("/profile-setup/goal");
  };

  const { mutate, isPending: isSubmitting } =
    useSaveEducationBackground(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eduBackgroundValidationSchema),
  });

  const { data: qualifications } = useQualifications();
  const { data: classOfDegress } = useClassOfDegrees();
  const { data: faculties } = useFaculties();

  const sendToServer: SubmitHandler<
    InferType<typeof eduBackgroundValidationSchema>
  > = (data) => mutate({ data });

  return (
    <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
      <Select
        label="Highest Educational Level Attained"
        placeholder="e.g Bachelor of Science"
        error={errors.qualificationId}
        {...register("qualificationId", { required: true })}
        options={qualifications?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }))}
      />

      <Select
        label="Field of Study"
        placeholder="Please select"
        error={errors.facultyId}
        {...register("facultyId", { required: true })}
        options={faculties?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }))}
      />

      <Select
        label="Class of degree"
        placeholder="Please select"
        error={errors.classOfDegreeId}
        {...register("classOfDegreeId", { required: true })}
        options={classOfDegress?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }))}
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
