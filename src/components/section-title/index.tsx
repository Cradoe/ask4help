import clsx from "clsx";
import { archivo } from "lib/font";

export const SectionTitle = ({
  children,
  px = "px-8",
}: {
  children: React.ReactNode;
  px?: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-secondary-50 rounded-full py-2 text-xs uppercase inline-block font-medium",
        archivo.className,
        px
      )}
    >
      {children}
    </div>
  );
};
