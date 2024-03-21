"use client";
import { Modal } from "components/modal";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Page() {
  const params = useSearchParams();
  const taskId: string = params.get("taskId") as string;
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModalClose = () => {
    setShowModal(false);

    // redirect to tasks page
    router.push("/tasks");
  };

  return (
    <div>
      <Modal
        show={showModal}
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        <div className="text-center flex flex-col justify-center items-center gap-y-3">
          <FaCheckCircle className="text-primary-500 text-5xl" />
          <h1 className="text-xl font-medium">Congratulations!</h1>
          <p className="text-gray-600">
            Your task has been successfully created, <br />
            <Link
              href={taskId ? `/tasks/${taskId}` : "#"}
              className="text-primary-500 underline"
            >
              view
            </Link>{" "}
            task created
          </p>
        </div>
      </Modal>
    </div>
  );
}
