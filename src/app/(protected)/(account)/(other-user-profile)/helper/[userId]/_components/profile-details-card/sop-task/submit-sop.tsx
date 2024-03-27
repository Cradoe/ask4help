import { Button } from "components/button";
import { FileDropZone } from "components/file-drop-zone";
import { Modal } from "components/modal";
import { useUploadSop } from "hooks/task";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

export const SubmitSopModal = ({ taskId }: { taskId: string }) => {
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const onSuccess = () => {
    setShowSuccessModal(true);
  };

  const { mutate, isPending: isSubmitting } = useUploadSop(onSuccess);

  const uploadToServer = () => {
    if (selectedFile) mutate({ taskId, file: selectedFile });
  };

  const handleFileSelect = (file: File) => {
    if (file) {
      setSelectedFile(file);
    }
  };
  return (
    <>
      {/* upload modal  */}
      <Modal
        show={showUploadModal}
        modalTitle="Upload SOP"
        buttonTitle="Submit SOP"
        triggerButtonVariant="transparent"
        trigerButtonClass="text-primary-500 border-none underline"
        onShowCallback={() => setShowUploadModal(true)}
        onCloseCallback={() => setShowUploadModal(false)}
      >
        <FileDropZone
          onSelectFile={(file: File) => handleFileSelect(file)}
          accept={{ type: ["application/pdf"] }}
          showPreview
        >
          <div className="space-y-3">
            <div className="">
              <GrDocumentText className="text-5xl mx-auto text-gray-600" />
            </div>
            <div className="text-secondary-500">Upload SOP</div>
            <p>Please upload only PDF file</p>
          </div>
        </FileDropZone>

        <div className="pt-5">
          <Button
            onClick={uploadToServer}
            className="h-12 w-full"
            radius="rounded-full focus:rounded-full"
            variant="secondary"
            isLoading={isSubmitting}
          >
            Submit SOp
          </Button>
        </div>
      </Modal>

      {/* success modal  */}
      <Modal
        show={showSuccessModal}
        onShowCallback={() => setShowSuccessModal(true)}
        onCloseCallback={() => setShowSuccessModal(false)}
      >
        <div className="flex justify-center mb-5">
          <FaCheckCircle className="text-primary-500 text-4xl md:text-7xl" />
        </div>
        <div className="space-y-3 text-center">
          <p className="font-medium text-xl">SOP Submitted Successfully</p>
          <p className="text-sm">
            Congratulations! Your Statement of Purpose (SOP) has been
            successfully submitted. We will notify you when your SOP has been
            successfully reviewed!
          </p>
        </div>
      </Modal>
    </>
  );
};
