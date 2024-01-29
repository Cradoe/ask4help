"use client";
import { useJoinWaitlist } from "hooks/waitlist";
import { WaitlistForm } from "./waitlist-form";
import { useState } from "react";
import { SuccessMessage } from "./success-message";

export const Waitlist = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const onSuccess = () => {
    setShowSuccessMessage(true);
  };
  const { mutate: saveData, isPending: isSubmitting } =
    useJoinWaitlist(onSuccess);

  return (
    <section className="relative h-[60vh] md:h-[50vh] w-full" id="waitlist">
      <div className="absolute -top-20 md:-top-32 lg:-top-52 2xl:-top-36 4xl:-top-20 left-[6%] w-[88%]">
        {showSuccessMessage ? (
          <SuccessMessage onClose={() => setShowSuccessMessage(false)} />
        ) : (
          <WaitlistForm
            onSubmit={(data) => saveData({ data })}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </section>
  );
};
