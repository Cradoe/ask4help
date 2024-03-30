"use client";
import { Modal } from "components/modal";
import { SopTask } from "interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NewTaskForm } from "./_components/new-task-form";
import { SuccessModal } from "./_components/success-modal";

export default function Page() {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(true);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string>();

  const onSuccess = (data: SopTask) => {
    setTaskId(data?.id);
    setShowSuccess(true);
  };

  const handleModalClose = () => {
    setShowModal(false);

    if (taskId) {
      // redirect to manage task page
      router.push(`/tasks/manage/${taskId}`);
    } else {
      // redirect to tasks page
      router.push("/tasks");
    }
  };

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle={showSuccess ? "" : "Create SOP Review Task"}
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        {showSuccess && taskId ? (
          <SuccessModal taskId={taskId} />
        ) : (
          <NewTaskForm onSuccess={onSuccess} />
        )}
      </Modal>
    </div>
  );
}
