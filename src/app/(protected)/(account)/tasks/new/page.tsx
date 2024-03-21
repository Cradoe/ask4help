"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { Textarea } from "components/textarea";
import { useCreateSopTask } from "hooks/task";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sopReviewTaskValidationSchema } from "validations";
import { InferType } from "yup";

export default function Page() {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);

    // redirect to tasks page
    router.push("/tasks");
  };
  const { mutate, isPending: isSubmitting } = useCreateSopTask();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(sopReviewTaskValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof sopReviewTaskValidationSchema>
  > = (data) => mutate({ data });

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle="Create SOP Review Task"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        <form onSubmit={handleSubmit(sendToServer)}>
          <Input
            label="Task title"
            placeholder="E.g. SOP for MSC. Student"
            error={errors.title}
            {...register("title", { required: true })}
          />

          <Textarea
            label="Description"
            placeholder="Tell us about you"
            error={errors.description}
            className="h-32"
            value={watch("description")}
            onChange={(e) => setValue("description", e.target.value)}
          />

          <Input
            type="number"
            label="Quantity"
            placeholder="Enter Quantity"
            error={errors.quantity}
            {...register("quantity", { required: true })}
          />

          <div className="grid grid-cols-2 items-center gap-x-3 justify-between">
            <Input
              label="Collection start date"
              type="date"
              error={errors.collectionStartDate}
              {...register("collectionStartDate", { required: true })}
            />
            <Input
              label="Collection end date"
              type="date"
              error={errors.collectionEndDate}
              {...register("collectionEndDate", { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-x-3 justify-between">
            <Input
              label="Return start date"
              type="date"
              error={errors.returnStartDate}
              {...register("returnStartDate", { required: true })}
            />
            <Input
              label="Return end date"
              type="date"
              error={errors.returnEndDate}
              {...register("returnEndDate", { required: true })}
            />
          </div>

          <div className="pt-5">
            <Button
              type="submit"
              className="h-12 w-32"
              radius="rounded-full focus:rounded-full"
              variant="secondary"
              isLoading={isSubmitting}
            >
              Create task
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
