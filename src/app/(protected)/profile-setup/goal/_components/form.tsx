"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Select } from "components/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { eduGoalsValidationSchema } from "validations";
import { InferType } from "yup";
import Link from "next/link";
import { SearchableSelect } from "components/select/searchable-select";
import {
  useFaculties,
  useQualifications,
  useSaveEducationGoal,
} from "hooks/education";
import { useRouter } from "next/navigation";
import { useCountries } from "hooks/country";
import { Country, Interest } from "interfaces";
import { useInterests } from "hooks/interest";

export const ProfileForm = () => {
  const router = useRouter();
  const onSuccess = () => {
    // redirect to home page
    router.push("/home");
  };

  const { mutate, isPending: isSubmitting } = useSaveEducationGoal(onSuccess);

  const { data: faculties } = useFaculties();
  const { data: qualifications } = useQualifications();
  const { data: countries } = useCountries();
  const { data: interests } = useInterests();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(eduGoalsValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof eduGoalsValidationSchema>
  > = (data) => mutate({ data });

  return (
    <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
      <Select
        label="Field of Interest"
        placeholder="Please select"
        error={errors.facultyId}
        {...register("facultyId", { required: true })}
        options={faculties?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }))}
      />

      <Select
        label="Intended Study Level "
        placeholder="Please select"
        error={errors.qualificationId}
        {...register("qualificationId", { required: true })}
        options={qualifications?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }))}
      />

      <SearchableSelect
        label="Preferred Study Destinations"
        error={errors.preferredDestinations}
        multi={true}
        onChange={(selectedOptions: { label: string; value: string }[]) => {
          setValue(
            "preferredDestinations",
            selectedOptions?.map((item) => item.value)
          );
        }}
        options={
          countries?.map((country: Country) => ({
            label: country.name,
            value: country.id,
          })) || []
        }
      />

      <SearchableSelect
        label="Interests"
        error={errors.interests}
        multi={true}
        onChange={(selectedOptions: { label: string; value: string }[]) => {
          setValue(
            "interests",
            selectedOptions?.map((item) => item.value)
          );
        }}
        options={
          interests?.map((interest: Interest) => ({
            label: interest.name,
            value: interest.id,
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
