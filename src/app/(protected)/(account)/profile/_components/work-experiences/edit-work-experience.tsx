import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { workExperienceValidationSchema } from "validations";
import { InferType } from "yup";
import { useUpdateWorkExperience } from "hooks/work-experience";
import { Input } from "components/input";
import { CiEdit } from "react-icons/ci";
import { WorkExperience } from "interfaces";

export const EditWorkExperience = ({
  experience,
}: {
  experience: WorkExperience;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } =
    useUpdateWorkExperience(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(workExperienceValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof workExperienceValidationSchema>
  > = (data) => mutate({ experienceId: experience?.id, data });

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
        modalTitle="Edit work experience"
        onCloseCallback={() => setShowModal(false)}
      >
        <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
          <Input
            label="Company name"
            placeholder="Enter the name of your company"
            error={errors.company}
            defaultValue={experience?.company}
            {...register("company", { required: true })}
          />

          <Input
            label="Job title"
            placeholder="What is your job title?"
            error={errors.position}
            defaultValue={experience?.position}
            {...register("position", { required: true })}
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
