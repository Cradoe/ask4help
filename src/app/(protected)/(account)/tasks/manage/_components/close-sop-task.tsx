"use client";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { useCloseSopTask } from "hooks/task";
import { useState } from "react";

export const CloseSopTask = ({ taskId }: { taskId: string }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  const { mutate, isPending: isSubmitting } = useCloseSopTask(handleModalClose);

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle="Close SOP task"
        buttonTitle="Stop collection"
        trigerButtonClass="w-full block border-0 font-light"
        triggerButtonVariant="danger"
        trigerButtonJustifyContent="justify-start"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        <div className="text-sm">
          Are you sure you want to stop collecting SOP for this task?
        </div>

        <div className="pt-5">
          <Button
            type="submit"
            className="h-12"
            radius="rounded-full focus:rounded-full"
            variant="secondary"
            onClick={() => mutate({ taskId })}
            isLoading={isSubmitting}
          >
            Stop collection
          </Button>
        </div>
      </Modal>
    </div>
  );
};
