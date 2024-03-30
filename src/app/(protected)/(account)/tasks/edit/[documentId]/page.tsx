"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { editSopValidationSchema } from "validations";
import { Textarea } from "components/textarea";
import { ChangeEvent } from "react";
import { SubmitSopConfirmation } from "./_components/submit-sop-confirmation";
import { useSopDocument } from "hooks/task";
import { Skeleton } from "components/skeleton";
import { SOP_REVIEW_STATUS } from "lib/enum";
import { useSaveSopReview } from "hooks/task/useSaveSopReview";

export default function Page() {
  const params = useParams();
  const documentId: string = params.documentId as string;

  const { data: sopDocument, isPending: isLoadingTask } =
    useSopDocument(documentId);

  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      status: SOP_REVIEW_STATUS.DRAFT,
    },
    resolver: yupResolver(editSopValidationSchema),
  });

  const { mutate: submitDraftToServer, isPending: isSavingAsDraft } =
    useSaveSopReview(documentId);

  const saveAsDraft: SubmitHandler<
    InferType<typeof editSopValidationSchema>
  > = (data) => submitDraftToServer({ data });

  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 px-6 md:px-8 lg:mr-10">
      <form>
        <div className="flex items-center justify-between">
          <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
            {isLoadingTask ? (
              <Skeleton height={30} width={120} />
            ) : (
              sopDocument?.task?.title
            )}
          </h2>

          {(!sopDocument?.review ||
            sopDocument?.review?.status === SOP_REVIEW_STATUS.DRAFT) && (
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleSubmit(saveAsDraft)}
                disabled={isSavingAsDraft}
                className="bg-secondary-50 text-black rounded-full px-4 py-2 text-sm hover:bg-secondary-500 ease-in-out duration-300 focus:outline-secondary-500 hover:text-white w-32"
              >
                {isSavingAsDraft ? "Please wait" : " Save as Draft"}
              </button>
              <SubmitSopConfirmation content={watch("content")} />
            </div>
          )}
        </div>

        <div className="mt-10">
          {isLoadingTask ? (
            <Skeleton height={400} />
          ) : (
            <Textarea
              className="h-96 shadow-md border rounded-xl resize-none"
              placeholder="Write a message ..."
              value={watch("content")}
              defaultValue={
                sopDocument?.review?.content || sopDocument?.content
              }
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setValue("content", e.target.value)
              }
            />
          )}
        </div>
        {(!sopDocument?.review ||
          sopDocument?.review?.status === SOP_REVIEW_STATUS.DRAFT) && (
          <div className="flex items-center gap-4 md:hidden flex-col mt-3">
            <SubmitSopConfirmation content={watch("content")} />
            <button
              disabled={isSavingAsDraft}
              onClick={handleSubmit(saveAsDraft)}
              className="bg-secondary-50 text-black w-full h-12 px-4 py-2 text-sm hover:bg-secondary-500 ease-in-out duration-300 focus:outline-secondary-500 hover:text-white"
            >
              {isSavingAsDraft ? "Please wait" : "Save as Draft"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
