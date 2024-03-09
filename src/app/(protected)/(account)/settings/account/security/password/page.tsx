"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { MaskPasswordInput } from "components/mask-password-input";
import { Modal } from "components/modal";
import { useChangePassword } from "hooks/account";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { changePasswordValidationSchema } from "validations";
import { InferType } from "yup";

export default function Page() {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);

    // redirect to security settings page
    router.push("/settings/account/security");
  };
  const { mutate, isPending: isSubmitting } = useChangePassword(() =>
    handleModalClose()
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof changePasswordValidationSchema>
  > = (data) => mutate({ data });

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle="Change Password"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        <form onSubmit={handleSubmit(sendToServer)}>
          <MaskPasswordInput
            label="Current password"
            placeholder="Enter your current password"
            error={errors.currentPassword}
            {...register("currentPassword", { required: true })}
          />

          <MaskPasswordInput
            label="New password"
            placeholder="New Password"
            error={errors.newPassword}
            {...register("newPassword", { required: true })}
          />

          <MaskPasswordInput
            label="Retype your new password"
            placeholder="Retype New Password"
            error={errors.confirmNewPassword}
            {...register("confirmNewPassword", { required: true })}
          />
          <div className="pt-5">
            <Button
              type="submit"
              className="h-12"
              radius="rounded-full focus:rounded-full"
              variant="secondary"
              isLoading={isSubmitting}
            >
              Save password
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
