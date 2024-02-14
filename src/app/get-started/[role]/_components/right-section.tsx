import clsx from "clsx";
import { Card } from "components/card";
import { LinkButton } from "components/link-button";
import { SectionTitle } from "components/section-title";
import { archivo } from "lib/font";
import { UserTypeOptions } from "./user-type-options";
import Link from "next/link";
import Image from "next/image";
import { MobileHeaderMenu } from "components/mobile-header-menu";

export const RightSection = ({ role }: { role: string }) => {
  return (
    <div className="bg-secondary-600 md:bg-white px-wrapper md:px-wrapper-md lg:pr-wrapper-lg xl:pr-wrapper-xl 3xl:pr-wrapper-3xl 4xl:pr-wrapper-4xl pt-10 py-20 grid grid-cols-1 items-center">
      <div className="place-self-start justify-self-end flex items-center justify-between md:justify-end w-full">
        <Link
          href="/"
          className=" focus:outline-primary-600 focus:outline-2 rounded block md:hidden"
        >
          <Image
            src="/logo.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        {/* header  */}
        <div className="text-sm hidden md:flex items-center gap-6">
          <span className="text-black hidden md:block">
            Already have an account?
          </span>
          <LinkButton
            href="/login"
            radius="rounded-full"
            variant="transparent"
            className="w-36 h-11 border-black hover:bg-secondary-500 hover:text-white hover:border-secondary-500"
          >
            Login
          </LinkButton>
        </div>

        <div className="block flex-none md:hidden">
          <MobileHeaderMenu />
        </div>
      </div>

      <Card className="lg:ml-10 xl:ml-24 2xl:ml-32 3xl:ml-48 4xl:ml-64 border-black rounded-3xl mt-20 4xl:mt-0">
        <SectionTitle>Welcome to Ask4help</SectionTitle>

        <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
          Choose your Account Type
        </h2>

        <UserTypeOptions selectedRole={role} />

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
    </div>
  );
};
