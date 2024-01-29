"use client";

import { Button } from "components/button";
import { useForgotPassword } from "hooks/auth";
import { getCookie } from "lib/cookie";

export const ResendEmailButton = () => {
  const { mutate, isPending: isSubmitting } = useForgotPassword({
    showNotification: true,
  });

  const resendEmail = () => {
    const email = getCookie("email");
    if (email) mutate({ data: { email } });
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
        Resend recovery email
      </Button>
    </div>
  );
};
