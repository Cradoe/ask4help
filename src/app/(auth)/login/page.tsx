import { Card } from "components/card";
import { LoginForm } from "./_components/login-form";
import { SectionTitle } from "components/section-title";
import clsx from "clsx";
import { archivo } from "lib/font";
import Link from "next/link";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>Welcome back!</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Login into your Account
      </h2>

      <LoginForm />

      <div className="flex text-xs items-center justify-center mt-5 gap-1 md:hidden">
        <span>Don&apos;t have an account? </span>
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 underline "
          href="/get-started/user"
        >
          Sign up
        </Link>
      </div>
    </Card>
  );
}
