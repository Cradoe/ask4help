import clsx from "clsx";
import { archivo } from "lib/font";
import Image from "next/image";

export const UserCaption = () => {
  return (
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
          students in just a few simple steps. Join our community for customized
          information that fits your study abroad dream.
        </p>
      </div>
    </div>
  );
};
