import clsx from "clsx";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export const StepWizard = ({ step = 1 }: { step?: number }) => {
  return (
    <div className="flex gap-5 text-white items-center my-5 text-sm">
      <Link
        href="/profile-setup/background"
        className="bg-secondary-100 rounded-full h-10 w-10 flex items-center justify-center"
      >
        <div className="bg-secondary-500 hover:bg-secondary-400 ease-in-out duration-200 rounded-full h-8 w-8 flex items-center justify-center">
          {step === 1 ? "1" : <FaCheck />}
        </div>
      </Link>

      <div
        className={clsx(
          "h-1.5 w-32",
          step < 2 ? "bg-neutral-300" : "bg-secondary-500"
        )}
      ></div>

      <Link
        href={step < 2 ? "#" : "/profile-setup/goal"}
        className={clsx(
          "rounded-full h-10 w-10 flex items-center justify-center",
          step < 2 ? "bg-neutral-200" : "bg-secondary-100"
        )}
      >
        <div
          className={clsx(
            "rounded-full h-8 w-8 flex items-center justify-center  ease-in-out duration-200",
            step < 2
              ? "bg-neutral-500"
              : "bg-secondary-500 hover:bg-secondary-400"
          )}
        >
          2
        </div>
      </Link>
    </div>
  );
};
