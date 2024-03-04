import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { ICountry, countries } from "countries-list";
import { Modal } from "components/modal";
import { Select } from "components/select";
import { SearchableSelect } from "components/select/searchable-select";
import {
  useFaculties,
  useQualifications,
  useSaveEducationGoal,
} from "hooks/education";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { eduGoalsValidationSchema } from "validations";
import { InferType } from "yup";

export const AddEducationGoalModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } = useSaveEducationGoal(onSuccess);

  const { data: faculties } = useFaculties();
  const { data: qualifications } = useQualifications();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      interests: ["dd"],
    },
    resolver: yupResolver(eduGoalsValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof eduGoalsValidationSchema>
  > = (data) => mutate({ data });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-xs flex items-center justify-between bg-secondary-50 px-5 py-1 rounded-full"
      >
        <FaPlus /> <span>Add</span>
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
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
