import { Card } from "components/card";
import { SignUpForm } from "./_components/signup-form";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>Welcome to Ask4help</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Create an account
      </h2>
      <SignUpForm />
    </Card>
  );
}
