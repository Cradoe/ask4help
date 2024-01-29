import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { archivo } from "lib/font";

export const LeftSection = () => {
  return (
    <div className="bg-auth-bg-pattern bg-no-repeat bg-cover bg-center bg-secondary-600 px-wrapper md:px-wrapper-md lg:pl-wrapper-lg xl:pl-wrapper-xl 3xl:pl-wrapper-3xl 4xl:pl-wrapper-4xl pt-10 py-20  grid-cols-1 items-center hidden md:grid">
      <div className="place-self-start">
        <Link
          href="/"
          className="focus:outline-none focus:ring-primary-600 focus:ring-2 rounded block"
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
        <div>
          <div>
            <Image
              src="/about-image.webp"
              height={250}
              width={250}
              className="w-3/4 h-auto"
              alt="2 ladies and a guy smiling"
            />
          </div>
          <div>
            <h2
              className={clsx(
                "text-xl xl:text-2xl 2xl:text-3xl mt-7",
                archivo.className
              )}
            >
              Simplifying Access to Study Abroad Resources
            </h2>
            <p className="text-sm text-secondary-100 mt-5">
              Connect easily with study advisors, mentors, and other prospective
              students in just a few simple steps. Join our community for
              customized information that fits your study abroad dream.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
