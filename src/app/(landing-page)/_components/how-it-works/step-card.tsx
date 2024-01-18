import clsx from "clsx";
import { HowItWorkStep } from "interfaces/global";
import Image from "next/image";

export const StepCard = ({
  item,
  stepNumber,
  variant = "primary",
}: {
  item: HowItWorkStep;
  stepNumber: number;
  variant?: "primary" | "secondary";
}) => {
  return (
    <div
      className={clsx(
        "pl-6 md:pl-0 relative before:block before:absolute  before:left-3 md:before:-left-3 before:top-2 md:before:top-3 before:border before:border-2 before:rounded-tl-xl hover:before:rounded-t-3xl lg:hover:before:left-0 lg:hover:before:top-0 before:duration-300 before:ease-in-out before:transition-all before:w-[90%] md:before:w-full before:h-full group",

        variant === "primary"
          ? "before:bg-primary-100  before:border-primary-200"
          : "before:bg-secondary-100  before:border-secondary-200"
      )}
    >
      <div
        className={clsx(
          "bg-white duration-200 ease-in-out relative p-4 md:p-8 pt-8 md:pt-16 rounded-t-3xl h-full space-y-5 border-2 border border-black min-h-[23.5rem] md:min-h-[20.5rem] lg:min-h-[27.5rem]",
          variant === "primary"
            ? "group-hover:bg-primary-50"
            : "group-hover:bg-secondary-50"
        )}
      >
        <div
          className={clsx(
            "absolute top-3 -left-6 md:-left-8 text-sm font-medium rounded-lg px-3 md:px-6 py-2 uppercase duration-200 ease-in-out",
            variant === "primary"
              ? "bg-primary-50 group-hover:bg-primary-200 "
              : "bg-secondary-50 group-hover:bg-secondary-200 "
          )}
        >
          step {stepNumber}
        </div>

        <div className="relative">
          <Image src={item.icon} alt="" width={60} height={60} />
        </div>
        <div
          className={clsx(
            "font-medium md:text-2xl relative",
            variant === "primary" ? "text-black" : "text-secondary-500"
          )}
        >
          {item.title}
        </div>
        <div className="relative text-sm">{item.description}</div>
      </div>
    </div>
  );
};
