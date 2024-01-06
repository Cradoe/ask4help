import Link from "next/link";
import { ButtonProps } from "./type";
import { clsx } from "clsx";
import { archivo } from "lib/font";

export const LinkButton = (props: ButtonProps) => {
  const {
    children,
    onClick,
    href,
    className: extendedClassName,
    variant = "primary",
    justifyContent = "justify-center",
    size = "lg",
    radius = "rounded lg:rounded-md focus:rounded",
    ...rest
  } = props;

  const variantClass = () => {
    if (variant === "primary") {
      return "bg-primary-600 hover:bg-primary-600/80 focus:ring-secondary-600";
    } else if (variant === "secondary") {
      return "text-white bg-primary-600 hover:bg-primary-600/80 focus:ring-primary-600";
    } else if (variant === "transparent") {
      return "bg-transparent border border-[#D1D1D1] focus:ring-primary-600";
    } else {
      return "text-dark bg-white hover:bg-primary-100 border border-[#D1D1D1]";
    }
  };

  const getPaddingFromBtnSize = () => {
    if (size === "sm") {
      return "px-1.5 lg:px-3 py-1.5 lg:py-2";
    } else if (size === "md") {
      return "px-4 lg:px-6 py-3";
    } else if (size === "lg") {
      return "px-3 lg:px-7 py-1.5 lg:py-3.5";
    } else {
      return "px-3 lg:px-5 py-1.5 lg:py-3.5";
    }
  };

  return (
    <>
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          "transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 font-medium  text-sm text-center flex items-center focus:ring-offset-2",
          archivo.className,
          justifyContent,
          radius,
          variantClass(),
          extendedClassName,
          getPaddingFromBtnSize()
        )}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
};
