"use client";
import { useAdvisorActiveSopTask } from "hooks/task";
import { SubmitSopModal } from "./submit-sop";
import { formatDate } from "lib/util";
import { SopTaskDetailsModal } from "components/sop-task-details-modal";

export const SopReviewTaskBoard = () => {
  const { data: sopTask } = useAdvisorActiveSopTask();

  if (sopTask && new Date(sopTask?.collectionStartDate) <= new Date()) {
    return (
      <div className="bg-secondary-600 absolute top-0 w-full left-0 z-0 text-white text-sm flex items-center justify-center px-3 text-center py-4 rounded-t-3xl flex-wrap">
        <span>I am currently reviewing SOPs... Interested?</span>{" "}
        <span>
          <SubmitSopModal taskId={sopTask?.id} />
        </span>
      </div>
    );
  }

  if (sopTask && new Date(sopTask?.collectionStartDate) > new Date()) {
    return (
      <div className="bg-secondary-600 absolute top-0 w-full left-0 z-50 text-white text-sm flex items-center justify-center px-3 text-center py-4 rounded-t-3xl flex-wrap">
        <span>
          I will start collecting SOPs for review by{" "}
          {formatDate(sopTask?.collectionStartDate)}
        </span>
        <SopTaskDetailsModal
          task={sopTask}
          trigerButtonClass="text-primary-500 border-none underline"
        />
      </div>
    );
  }

  return null;
};
