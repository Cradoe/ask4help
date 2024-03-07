import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { workExperienceValidationSchema } from "validations";
import { InferType } from "yup";
import { useCreateWorkExperience } from "hooks/work-experience";
import { Input } from "components/input";

export const AddWorkExperienceModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } =
    useCreateWorkExperience(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(workExperienceValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof workExperienceValidationSchema>
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
          <Input
            label="Company name"
            placeholder="Enter the name of your company"
            error={errors.company}
            {...register("company", { required: true })}
          />

          <Input
            label="Job title"
            placeholder="What is your job title?"
            error={errors.position}
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
