"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Textarea } from "components/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { feedbackValidationSchema } from "validations";
import { InferType } from "yup";
import { Checkbox } from "components/input/checkbox";
import { useProposedFeatures, useSubmitFeedback } from "hooks/feedback";
import { Skeleton } from "components/skeleton";

export const FeedbackForm = ({ onSuccess }: { onSuccess?: Function }) => {
  const { data: options, isPending: isLoadingOptions } = useProposedFeatures();
  const { mutate: saveFeedback, isPending: isSubmitting } =
    useSubmitFeedback(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(feedbackValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof feedbackValidationSchema>
  > = (data) => saveFeedback({ data });

  return (
    <form onSubmit={handleSubmit(sendToServer)} className="mt-3">
      <Textarea
        label="Suggestions"
        labelClassName="font-medium"
        className="h-12 resize-none"
        value={watch("suggestion")}
        onChange={(e) => setValue("suggestion", e?.target?.value)}
        showRequiredAsterik
        error={errors?.suggestion}
      />

      <div className="text-sm mt-3">Which feature will you find useful?</div>
      <p className="text-gray-500 text-xs">(You can select multiple choice)</p>
      <div className="my-3">
        <div className="h-48 overflow-y-auto">
          {/* loading state  */}
          {isLoadingOptions &&
            [...new Array(10)]?.map((_, index) => (
              <Skeleton height={20} key={index} />
            ))}

          {/* loop through options  */}
          {options?.map((option) => (
            <Checkbox
              value={option.id}
              label={option.name}
              key={option.id}
              {...register("features")}
            />
          ))}
        </div>
        {errors?.features && (
          <p className="text-red-500 text-xs">
            {(errors?.features?.message as string) || ""}
          </p>
        )}
      </div>

      <div className="text-sm">
        <Button
          type="submit"
          className="h-12 "
          size="sm"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
          isLoading={isSubmitting}
        >
          Send Feedback
        </Button>
      </div>
    </form>
  );
};
