import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { useUpdateBasicDetails } from "hooks/account";
import { User } from "interfaces";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { basicUserDetailsValidationSchema } from "validations";
import { InferType } from "yup";

export const EditBasicDetails = ({ user }: { user: User }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };
  const { mutate, isPending: isSubmitting } = useUpdateBasicDetails(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicUserDetailsValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof basicUserDetailsValidationSchema>
  > = (data) => mutate({ data });

  return (
    <Modal
      show={showModal}
      modalTitle="Basic Info"
      buttonIcon={<CiEdit className="text-2xl font-medium" />}
      triggerButtonVariant="transparent"
      trigerButtonClass="border-none px-0 rounded-full hover:bg-secondary-50 ease-in-out duration-200 focus:outline-secondary-500"
      onShowCallback={() => setShowModal(true)}
      onCloseCallback={() => setShowModal(false)}
    >
      <form onSubmit={handleSubmit(sendToServer)}>
        <Input
          label="First name"
          placeholder="Enter first name"
          error={errors.firstName}
          defaultValue={user?.firstName}
          {...register("firstName", { required: true })}
        />

        <Input
          label="Last name"
          placeholder="Enter last name"
          error={errors.lastName}
          defaultValue={user?.lastName}
          {...register("lastName", { required: true })}
        />

        <Input
          label="Location"
          placeholder="Enter your location"
          error={errors.location}
          defaultValue={user?.location}
          {...register("location", { required: true })}
        />

        <Input
          label="Job title"
          placeholder="Enter your job title"
          error={errors.jobTitle}
          defaultValue={user?.jobTitle}
          {...register("jobTitle", { required: true })}
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
  );
};
