import Image from "next/image";
import Link from "next/link";
import { UserCaption } from "./user-caption";
import { UserRole } from "lib/enum";
import { AdvisorCaption } from "./advisor-caption";

export const LeftSection = ({ role }: { role: string }) => {
  return (
    <div className="bg-auth-bg-pattern bg-no-repeat bg-cover bg-center bg-secondary-600 px-wrapper md:px-wrapper-md lg:pl-wrapper-lg xl:pl-wrapper-xl 3xl:pl-wrapper-3xl 4xl:pl-wrapper-4xl pt-10 py-20  grid-cols-1 items-center hidden md:grid">
      <div className="place-self-start">
        <Link
          href="/"
          className=" focus:outline-primary-600 focus:outline-2 rounded block"
        >
          <Image
            src="/logo.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="text-white mt-20 4xl:mt-0 lg:w-3/4">
        {role === UserRole.USER && <UserCaption />}

        {role === UserRole.HELPER && <AdvisorCaption />}
      </div>
    </div>
  );
};
