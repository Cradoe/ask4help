"use client";
import { Card } from "components/card";
import { ResendEmailButton } from "./_components/resend-button";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { redirect, useSearchParams } from "next/navigation";
import { getCookie } from "lib/cookie";
import { ImSpinner8 } from "react-icons/im";
import { useVerifyAccount } from "hooks/auth";

export default function Page() {
  const searchParams = useSearchParams();
  const email = getCookie("email") || searchParams.get("email");

  // redirect to login page if email is not in found
  if (!email || !email) redirect("/login");

  const verificationCode = searchParams.get("ref") || "";

  const { isPending } = useVerifyAccount({ email, verificationCode });

  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12 text-xs">
      {!isPending ? (
        <div>
          <SectionTitle px="px-2">
            <div>
              <MdOutlineMarkEmailUnread className="text-4xl text-secondary-500 block" />
            </div>
          </SectionTitle>

          <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
            Please Verify your email!
          </h2>
          <p className="my-3">
            We sent you an email to {email}, check your inbox to verify your
            email.{" "}
          </p>

          <p className="mt-10 mb-5">Didn&apos;t receive email?</p>
          <ResendEmailButton />
        </div>
      ) : (
        <div className="h-56 flex items-center justify-center">
          <ImSpinner8 className="text-secondary-500 text-3xl lg:text-5xl animate animate-spin" />
        </div>
      )}
    </Card>
  );
}
