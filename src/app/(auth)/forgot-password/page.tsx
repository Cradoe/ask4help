import { Card } from "components/card";
import { ForgotPasswordForm } from "./_components/forgot-password-form";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>FORGOT PASSWORD</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Recover your Account
      </h2>
      <p className="mt-3 text-sm lg:w-2/3">
        Enter the email associated with your account and we&apos;ll send you a
        reset password link
      </p>
      <ForgotPasswordForm />

      <div className="flex text-xs items-center justify-center mt-5 gap-1 md:hidden">
        <span>Remember password? </span>
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 underline"
          href="/login"
        >
          Login
        </Link>
      </div>
    </Card>
  );
}
