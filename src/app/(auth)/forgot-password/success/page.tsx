import { Card } from "components/card";
import { ResendEmailButton } from "./_components/resend-button";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();
  const email = cookieStore.get("email");

  // redirect to login page if email is not in cookie store
  // if (!email || !email.value) redirect("/forgot-password");

  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12 text-sm">
      <SectionTitle px="px-2">
        <div>
          <MdOutlineMarkEmailUnread className="text-4xl text-secondary-500 block" />
        </div>
      </SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Email on the way!
      </h2>
      <p className="mt-3 mb-10">
        We sent you password reset instructions to {email?.value || "****"},
        check your inbox
      </p>

      <ResendEmailButton />
    </Card>
  );
}
