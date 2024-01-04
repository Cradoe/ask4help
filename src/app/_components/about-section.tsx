import clsx from "clsx";
import { archivo } from "lib/font";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="mt-40 bg-primary-100 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
      <div className="space-y-7 xl:p-10 xl:mr-10">
        <div>
          <div
            className={clsx(
              "bg-white px-8 rounded-full py-2 text-xs md:text-sm uppercase inline font-medium",
              archivo.className
            )}
          >
            ABOUT US
          </div>
        </div>
        <h3 className="font-medium text-2xl lg:text-3xl 2xl:text-5xl 2xl:w-3/4">
          Ask4Hep, Your Dedicated Partner
        </h3>

        <p>
          Ask4Hep serves as your exclusive platform for pursuing your
          aspirations of studying abroad.
        </p>

        <p>
          We connect professional study abroad solution providers (Study
          Advisors) with study abroad solution seekers (Prospective Students).
        </p>

        <p>
          Our belief is grounded in the empowerment of individuals to
          independently navigate their study abroad journey, with the precise
          and comprehensive information and assistance they need.
        </p>
      </div>
      <div className="order-first lg:order-last">
        <Image
          src="/about-image.svg"
          height={200}
          width={50}
          className="w-full xl:w-[80%] h-auto"
          alt="2 ladies and a guy smiling"
        />
      </div>
    </section>
  );
};
