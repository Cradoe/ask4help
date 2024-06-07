import { Button } from "components/button";
import { Modal } from "components/modal";
import { useUpdateProfilePicture } from "hooks/account";
import { useEffect, useId, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import Image from "next/image";

export const EditProfilePicture = ({
  currentPhoto,
}: {
  currentPhoto: string | undefined;
}) => {
  const inputId = useId();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };
  const { mutate, isPending: isSubmitting } =
    useUpdateProfilePicture(onSuccess);

  const sendToServer = () => {
    const formData = new FormData();

    if (imageUrl === currentPhoto) return;

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    mutate({ formData });
  };

  const handleImageSelection = (e: any) => {
    const file = e?.target?.files?.[0];
    if (!file) return;

    setImageUrl(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  useEffect(() => {
    if (currentPhoto) {
      setImageUrl(currentPhoto);
    }
  }, [currentPhoto]);

  return (
    <div className="absolute -bottom-1 md:bottom-0 -right-4 md:right-0">
      <button
        onClick={() => setShowModal(true)}
        className="font-medium text-xl bg-neutral-200 rounded-full p-1 md:p-2 text-gray-600 focus:outline-secondary-500"
        aria-label="Edit profile photo"
      >
        <CiEdit aria-hidden="true" />
      </button>
      <Modal
        show={showModal}
        modalTitle="Profile Photo"
        onCloseCallback={() => setShowModal(false)}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center h-56 w-56 mx-auto justify-center rounded-full bg-secondary-600 text-white border border-8 border-white relative">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="profile picture"
                height={200}
                width={200}
                className="h-full w-full rounded-full"
              />
            ) : (
              <FaUser className="text-6xl" />
            )}
          </div>

          <div className="flex items-center gap-5">
            <input
              type="file"
              className="hidden"
              name="file"
              accept="image/*"
              id={inputId}
              onChange={handleImageSelection}
            />
            <button
              onClick={() => {
                document.getElementById(inputId)?.click();
              }}
              className="flex items-center gap-1 font-medium focus:outline-secondary-500"
            >
              <CiCamera className="text-xl" />
              <span className="text-sm">Change Photo</span>
            </button>

            {/* show delete button if there's image  */}
            {/* {image && ( */}
            <button
              onClick={() => setImageUrl(undefined)}
              className="flex items-center gap-1 font-medium focus:outline-secondary-500"
            >
              <MdOutlineDelete className="text-xl" />
              <span className="text-sm">Delete</span>
            </button>
            {/* )} */}
          </div>
          <div>
            <Button
              type="submit"
              className="h-12 w-36"
              radius="rounded-full focus:rounded-full"
              variant="secondary"
              isLoading={isSubmitting}
              onClick={sendToServer}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
