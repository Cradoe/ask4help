import clsx from "clsx";
import { archivo } from "lib/font";
import Image from "next/image";

export const AdvisorCaption = () => {
  return (
    <div>
      <div>
        <Image
          src="/advisor-grid.webp"
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
          Offering Informed Advice, Real-world Experience, and Sustained
          Inspiration
        </h2>
        <p className="text-sm text-secondary-100 mt-5">
          Connect easily with prospective students in just a few simple steps.
          Providing guidance, experiential advice, and sustained inspiration to
          prospective students
        </p>
      </div>
    </div>
  );
};
