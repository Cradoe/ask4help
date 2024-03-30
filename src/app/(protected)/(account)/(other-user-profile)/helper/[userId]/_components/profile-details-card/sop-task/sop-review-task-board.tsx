"use client";
import { useAdvisorActiveSopTask } from "hooks/task";
import { SubmitSopModal } from "./submit-sop";

export const SopReviewTaskBoard = () => {
  const { data: sopTask } = useAdvisorActiveSopTask();

  if (sopTask) {
    return (
      <div className="bg-secondary-600 absolute top-0 w-full left-0 z-50 text-white text-sm flex items-center justify-center px-3 text-center py-4 rounded-t-3xl flex-wrap">
        <span>I am currently reviewing SOPs... Interested?</span>{" "}
        <span>
          <SubmitSopModal taskId={sopTask?.id} />
        </span>
      </div>
    );
  }

  return null;
};
