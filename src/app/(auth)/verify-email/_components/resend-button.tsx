"use client";

import { Button } from "components/button";
import { useResendEmailVerification } from "hooks/auth";
import { getCookie } from "lib/cookie";

export const ResendEmailButton = () => {
  const { mutate, isPending: isSubmitting } = useResendEmailVerification();

  const resendEmail = () => {
    const email = getCookie("email");
    if (email) mutate({ email });
  };

  return (
    <div>
      <Button
        onClick={resendEmail}
        className="h-12"
        radius="rounded-full focus:rounded-full"
        variant="secondary"
        isLoading={isSubmitting}
      >
        Resend confirmation email
      </Button>
    </div>
  );
};
