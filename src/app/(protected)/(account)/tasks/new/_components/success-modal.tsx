"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const SuccessModal = ({ taskId }: { taskId: string }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-y-3">
      <FaCheckCircle className="text-primary-500 text-5xl" />
      <h1 className="text-xl font-medium">Congratulations!</h1>
      <p className="text-gray-600">
        Your task has been successfully created, <br />
        <Link
          href={`/tasks/manage/${taskId}`}
          className="text-primary-500 underline"
        >
          view
        </Link>{" "}
        task created
      </p>
    </div>
  );
};
