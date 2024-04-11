import { Button } from "components/button";
import { FileDropZone } from "components/file-drop-zone";
import { Modal } from "components/modal";
import { useUploadAttachment } from "hooks/message";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { sendMessageValidationSchema } from "validations";
import { InferType } from "yup";

export const SendAttachment = ({
  sendMessage,
}: {
  sendMessage: (data: InferType<typeof sendMessageValidationSchema>) => void;
}) => {
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const onSuccess = (response: { url: string; mimeType: string }) => {
    sendMessage({ content: response?.url, mimeType: response?.mimeType });
    setSelectedFile(undefined);
    setShowUploadModal(false);
  };

  const { mutate, isPending: isSubmitting } = useUploadAttachment(onSuccess);

  const uploadToServer = () => {
    if (selectedFile) mutate({ file: selectedFile });
  };

  const handleFileSelect = (file: File) => {
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowUploadModal(true)}
        aria-label="Send attachment"
      >
        <FiPlusCircle aria-hidden="true" className="hidden md:block" />
        <ImAttachment aria-hidden="true" className="md:hidden" />
      </button>
      <Modal
        show={showUploadModal}
        modalTitle="Send Attachment"
        onCloseCallback={() => setShowUploadModal(false)}
      >
        <div>
          <FileDropZone
            onSelectFile={(file: File) => handleFileSelect(file)}
            showPreview
            isLoading={isSubmitting}
          >
            <div className="space-y-3">
              <div className="">
                <GrDocumentText className="text-5xl mx-auto text-gray-600" />
              </div>
              <div className="text-secondary-500">Upload file</div>
              <p className="text-sm">
                Drag and drop any file or click to select
              </p>
            </div>
          </FileDropZone>

          {!isSubmitting && (
            <div className="pt-5">
              <Button
                onClick={uploadToServer}
                className="h-12 w-full"
                radius="rounded-full focus:rounded-full"
                variant="secondary"
                isLoading={isSubmitting}
              >
                Send file
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
