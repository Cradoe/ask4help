import { Card } from "components/card";
import { ResetPasswordForm } from "./_components/reset-password-form";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>RESET YOUR PASSWORD</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Enter your new password
      </h2>
      <ResetPasswordForm />
    </Card>
  );
}
