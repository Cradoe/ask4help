import clsx from "clsx";
import { ButtonProps } from "./type";
import { archivo } from "lib/font";

export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    type = "button",
    disabled = false,
    isLoading = false,
    className: extendedClassName,
    variant = "primary",
    justifyContent = "justify-center",
    radius = "rounded lg:rounded-md focus:rounded",
    size = "lg",
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
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
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
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
            ></path>
          </svg>{" "}
          Please&nbsp;wait...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
