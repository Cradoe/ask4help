import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { Select } from "components/select";
import { SearchableSelect } from "components/select/searchable-select";
import {
  useFaculties,
  useQualifications,
  useSaveEducationGoal,
  useUpdateEducationGoal,
} from "hooks/education";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { eduGoalsValidationSchema } from "validations";
import { InferType } from "yup";
import { useCountries } from "hooks/country";
import { EducationGoal } from "interfaces";
import { CiEdit } from "react-icons/ci";

export const EditEducationGoal = ({
  education,
}: {
  education: EducationGoal;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } = useUpdateEducationGoal(onSuccess);

  const { data: faculties } = useFaculties();
  const { data: qualifications } = useQualifications();
  const { data: countries } = useCountries();

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
  > = (data) => mutate({ educationId: education?.id, data });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="font-medium text-3xl"
      >
        <CiEdit />
      </button>
      <Modal
        show={showModal}
        modalTitle="Education goal"
        onCloseCallback={() => setShowModal(false)}
      >
        <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
          <Select
            label="Field of Interest"
            placeholder="Please select"
            error={errors.facultyId}
            {...register("facultyId", { required: true })}
            defaultValue={education?.faculty?.id}
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
            defaultValue={education?.qualification?.id}
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
            defaultValue={education?.destinations?.map((country) => ({
              label: country.name,
              value: country.id,
            }))}
            options={
              countries?.map((country) => ({
                label: country.name,
                value: country.id,
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
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
