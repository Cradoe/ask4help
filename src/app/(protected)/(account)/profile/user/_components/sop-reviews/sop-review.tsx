import { SopDocument } from "interfaces";
import { DownloadSopReviewModal } from "./download-sop-review-modal";

export const SopReview = ({
  document,
}: {
  document: SopDocument | undefined;
}) => {
  if (!document || !document?.review) return null;
  return (
    <div className="rounded-3xl p-10 bg-secondary-50/50  lg:w-[90%] text-sm space-y-5">
      <div>
        <span className="font-medium">Bola tito</span>{" "}
        <span>has successfully reviewed your SOPs. Want to view?</span>
      </div>
      <div>
        <DownloadSopReviewModal content={document?.review?.content} />
      </div>
    </div>
  );
};
