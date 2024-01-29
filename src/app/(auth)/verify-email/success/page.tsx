import { Card } from "components/card";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";
import { LinkButton } from "components/link-button";

export default function Page() {
  return (
    <Card className="md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto rounded-xl px-9 py-12 text-sm">
      <SectionTitle px="px-2">
        <div>
          <FaRegCheckCircle className="text-3xl text-secondary-500 block" />
        </div>
      </SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Success!
      </h2>
      <p className="mt-3 mb-10">
        Your account has been verified successfully, please return to the login
        page.
      </p>

      <div className="w-2/3">
        <LinkButton
          href="/login"
          className="h-12"
          radius="rounded-full focus:rounded-full"
          variant="secondary"
        >
          Return to login page
        </LinkButton>
      </div>
    </Card>
  );
}
