"use client";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { useCreateSopTask } from "hooks/task";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export const SubmitSopConfirmation = ({ content }: { content: string }) => {
  const router = useRouter();
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowConfirmationModal(false);

    setShowSuccessModal(true);
  };
  const { mutate, isPending: isSubmitting, isSuccess } = useCreateSopTask();

  const saveToServer = () => {
    if (content) {
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowSuccessModal(true)}
        variant="secondary"
        size="sm"
        radius="rounded md:rounded-full"
        className="w-full h-12 md:h-auto md:w-32"
      >
        Submit SOP
      </Button>

      {/* confirmation modal  */}
      <Modal
        show={showConfirmationModal}
        modalTitle="Confirm SOP Submission"
        onShowCallback={() => setShowConfirmationModal(true)}
        onCloseCallback={() => setShowConfirmationModal(false)}
      >
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            Are you sure you are ready to submit the Statement of Purpose (SOP)?
            Once submitted, you won&apos;t be able to make any further changes.
          </p>
          <p>
            If you are ready to proceed, click &apos;Submit.&apos; If you need
            to make any final edits, click &apos;Return to Editing.&apos;
          </p>
        </div>

        <div className="flex items-center mt-10 gap-5 flex-col md:flex-row">
          <Button
            onClick={saveToServer}
            variant="secondary"
            radius="rounded-full"
            size="md"
            className="w-full md:w-36"
          >
            Submit
          </Button>
          <Button
            onClick={() => setShowConfirmationModal(false)}
            variant="transparent"
            radius="rounded-full"
            size="md"
            className="w-full md:w-40 hover:bg-secondary-500 hover:text-white"
          >
            Return to Editing
          </Button>
        </div>
      </Modal>

      <Modal
        show={showSuccessModal}
        onShowCallback={() => setShowSuccessModal(true)}
        onCloseCallback={() => router.back()}
      >
        <div className="flex justify-center mb-5">
          <FaCheckCircle className="text-primary-500 text-4xl md:text-7xl" />
        </div>
        <div className="space-y-3 text-center">
          <p className="font-medium text-xl">Thank you for your submission!</p>
          <p className="text-sm">
            The Statement of Purpose (SOP) has been successfully submitted. We
            appreciate your effort.
            <br />
            We have notified Karen M.
          </p>
        </div>
      </Modal>
    </>
  );
};
