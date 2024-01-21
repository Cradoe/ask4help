import { Card } from "components/card";
import { LoginForm } from "./_components/login-form";
import { SectionTitle } from "components/section-title";
import clsx from "clsx";
import { archivo } from "lib/font";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>Welcome back!</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Login into your Account
      </h2>

      <LoginForm />
    </Card>
  );
}
