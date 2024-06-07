"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { Skeleton } from "components/skeleton";
import { useAccount, useUpdateBasicDetails } from "hooks/account";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { basicUserDetailsValidationSchema } from "validations";
import { InferType } from "yup";

export default function Page() {
  const router = useRouter();
  const { data: user, isPending } = useAccount();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);

    // redirect to settings page
    router.push("/settings");
  };
  const { mutate, isPending: isSubmitting } = useUpdateBasicDetails(() =>
    handleModalClose()
  );
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
    <div>
      <Modal
        show={showModal}
        modalTitle="Basic Info"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        {isPending ? (
          <div>
            <div className="space-y-6">
              {[...new Array(4)]?.map((_, index: number) => (
                <div key={index}>
                  <Skeleton width={80} />
                  <Skeleton height={50} />
                </div>
              ))}
            </div>
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
        )}
      </Modal>
    </div>
  );
}
