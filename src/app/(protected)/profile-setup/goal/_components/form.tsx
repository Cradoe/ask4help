"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Select } from "components/select";
import { useSignIn } from "hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { eduGoalsValidationSchema } from "validations";
import { InferType } from "yup";
import { ICountry, countries } from "countries-list";
import Link from "next/link";
import { SearchableSelect } from "components/select/searchable-select";

export const ProfileForm = () => {
  const { mutate, isPending: isSubmitting } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eduGoalsValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof eduGoalsValidationSchema>
  > = (data) => {
    // mutate({ data })
  };

  return (
    <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
      <Select
        label="Field of Interest"
        placeholder="Please select"
        error={errors.fieldOfInterest}
        {...register("fieldOfInterest", { required: true })}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
      />

      <Select
        label="Intended Study Level "
        placeholder="Please select"
        error={errors.intendedStudyLevel}
        {...register("intendedStudyLevel", { required: true })}
        options={[
          {
            label: "1",
            value: "1",
          },
        ]}
      />

      <SearchableSelect
        label="Preferred Study Destinations"
        error={errors.preferredCountry}
        {...register("preferredCountry", { required: true })}
        options={
          Object.values(countries).map((country: ICountry) => ({
            label: country.name,
            value: country.name,
          })) || []
        }
      />

      <div className="pt-5 flex items-center justify-between">
        <Button
          type="submit"
          className="h-12 w-32"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Submit
        </Button>

        <Link
          href="/profile-setup/background"
          className="text-neutral-400 font-medium hover:underline"
        >
          Previous
        </Link>
      </div>
    </form>
  );
};
