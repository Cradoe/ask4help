import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { Textarea } from "components/textarea";
import { useUpdateBio } from "hooks/account";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { bioValidationSchema } from "validations";
import { InferType } from "yup";

export const EditBioModal = ({ bio }: { bio: string }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };
  const { mutate, isPending: isSubmitting } = useUpdateBio(onSuccess);
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(bioValidationSchema),
  });

  const sendToServer: SubmitHandler<InferType<typeof bioValidationSchema>> = (
    data
  ) => mutate({ data });

  return (
    <Modal
      show={showModal}
      className="w-[90vw] lg:w-[60vw] 2xl:w-[40vw]"
      modalTitle="Basic Info"
      buttonIcon={<CiEdit className="text-2xl font-medium" />}
      triggerButtonVariant="transparent"
      trigerButtonClass="border-none px-0 rounded-full hover:bg-secondary-50 ease-in-out duration-200 focus:outline-secondary-500"
      onShowCallback={() => setShowModal(true)}
      onCloseCallback={() => setShowModal(false)}
    >
      <form onSubmit={handleSubmit(sendToServer)}>
        <Textarea
          label="About me"
          placeholder="Tell us about you"
          error={errors.bio}
          defaultValue={bio}
          className="h-56"
          value={watch("bio")}
          onChange={(e) => setValue("bio", e.target.value)}
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
