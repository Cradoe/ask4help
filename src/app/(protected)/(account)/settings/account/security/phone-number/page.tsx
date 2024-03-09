"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { Skeleton } from "components/skeleton";
import { useAccount, useUpdatePhoneNumber } from "hooks/account";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { phoneValidationSchema } from "validations";
import { InferType } from "yup";

export default function Page() {
  const { data: user, isPending } = useAccount();

  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);

    // redirect to security settings page
    router.push("/settings/account/security");
  };
  const { mutate, isPending: isSubmitting } = useUpdatePhoneNumber(() =>
    handleModalClose()
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phoneValidationSchema),
  });

  const sendToServer: SubmitHandler<InferType<typeof phoneValidationSchema>> = (
    data
  ) => mutate({ data });

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle="Update phone number"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        {isPending ? (
          <div>
            <Skeleton width={80} />
            <Skeleton height={50} />
            <Skeleton
              height={45}
              className="mt-8"
              width={150}
              borderRadius={100}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit(sendToServer)}>
            <Input
              label="Phone number"
              placeholder="Enter your phone number"
              error={errors.phone}
              defaultValue={user?.phone}
              {...register("phone", { required: true })}
            />

            <div className="pt-5">
              <Button
                type="submit"
                className="h-12"
                radius="rounded-full focus:rounded-full"
                variant="secondary"
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
