import { Card } from "components/card";
import { SignUpForm } from "./_components/signup-form";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";
import { UserRole } from "lib/enum";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Page({ params }: { params: { role: string } }) {
  const { role } = params;

  // check if role is valid or redirect back to get started
  if (!role || !Object.values(UserRole).includes(role as UserRole)) {
    redirect("/get-started/user");
  }

  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12">
      <SectionTitle>Welcome to Ask4help</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Create an account
      </h2>
      <SignUpForm />

      <div className="flex text-xs items-center justify-center mt-5 gap-1 md:hidden">
        <span>Already have an account?</span>
        <Link
          className="text-secondary-500 hover:text-secondary-500/80 underline "
          href="/login"
        >
          Login
        </Link>
      </div>
    </Card>
  );
}
