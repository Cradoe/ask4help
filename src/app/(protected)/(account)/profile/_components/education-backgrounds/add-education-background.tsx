import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { Select } from "components/select";
import {
  useClassOfDegrees,
  useFaculties,
  useQualifications,
  useSaveEducationBackground,
} from "hooks/education";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { eduBackgroundValidationSchema } from "validations";
import { InferType } from "yup";

export const AddEducationBackgroundModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
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
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-xs flex items-center justify-between bg-secondary-50 px-5 py-1 rounded-full"
      >
        <FaPlus /> <span>Add</span>
      </button>
      <Modal
        show={showModal}
        modalTitle="Education background"
        onCloseCallback={() => setShowModal(false)}
      >
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
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
