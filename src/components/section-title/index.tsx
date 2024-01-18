import clsx from "clsx";
import { archivo } from "lib/font";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "bg-secondary-50 px-8 rounded-full py-2 text-xs uppercase inline font-medium",
        archivo.className
      )}
    >
      {children}
    </div>
  );
};
