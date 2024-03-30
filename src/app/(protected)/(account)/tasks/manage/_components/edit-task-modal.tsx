"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { Textarea } from "components/textarea";
import { useCreateSopTask } from "hooks/task";
import { SopTask } from "interfaces";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { sopReviewTaskValidationSchema } from "validations";
import { InferType } from "yup";

export const EditTaskModal = ({ task }: { task: SopTask }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setShowModal(false);
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
        modalTitle="Edit task"
        buttonTitle="Edit task"
        trigerButtonClass="w-full block border-0 font-light"
        triggerButtonVariant="transparent"
        trigerButtonJustifyContent="justify-start"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        <form onSubmit={handleSubmit(sendToServer)}>
          <Input
            label="Task title"
            placeholder="E.g. SOP for MSC. Student"
            error={errors.title}
            defaultValue={task?.title}
            {...register("title", { required: true })}
          />

          <Textarea
            label="Description"
            placeholder="Tell us about you"
            error={errors.description}
            className="h-32"
            value={watch("description")}
            defaultValue={task?.description}
            onChange={(e) => setValue("description", e.target.value)}
          />

          <Input
            type="number"
            label="Quantity"
            placeholder="Enter Quantity"
            error={errors.quantity}
            defaultValue={task?.quantity}
            {...register("quantity", { required: true })}
          />

          <div className="grid grid-cols-2 items-center gap-x-3 justify-between">
            <Input
              label="Collection start date"
              type="date"
              error={errors.collectionStartDate}
              defaultValue={task?.collectionStartDate}
              {...register("collectionStartDate", { required: true })}
            />
            <Input
              label="Collection end date"
              type="date"
              error={errors.collectionEndDate}
              defaultValue={task?.collectionEndDate}
              {...register("collectionEndDate", { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-x-3 justify-between">
            <Input
              label="Return start date"
              type="date"
              error={errors.returnStartDate}
              defaultValue={task?.returnStartDate}
              {...register("returnStartDate", { required: true })}
            />
            <Input
              label="Return end date"
              type="date"
              error={errors.returnEndDate}
              defaultValue={task?.returnEndDate}
              {...register("returnEndDate", { required: true })}
            />
          </div>

          <div className="pt-5">
            <Button
              type="submit"
              className="h-12"
              radius="rounded-full focus:rounded-full"
              variant="secondary"
              isLoading={isSubmitting}
            >
              Save update
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
