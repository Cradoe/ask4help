import { forwardRef, useId } from "react";
import { InputProps } from "./type";
import clsx from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      label,
      className,
      labelClassName,
      type = "text",
      readOnly = false,
      placeholder,
      defaultValue,
      value,
      onChange,
      radius = "rounded-md",
      leftIcon,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="py-3">
        {label && (
          <label
            htmlFor={id}
            className={`block text-xs font-medium  ${
              labelClassName ? labelClassName : "text-black/80"
            }`}
          >
            {label}
          </label>
        )}

        <div className={clsx("relative mt-1", radius)}>
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
            </div>
          )}
          <input
            aria-invalid={error ? "true" : "false"}
            type={type}
            id={id}
            readOnly={readOnly}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange ? onChange : undefined}
            className={clsx(
              "mt-2 outline-0 placeholder-[#828282] block w-full h-12  text-sm py-2 border border-slate-300 focus:ring-1 focus:ring-secondary-500  focus:outline-none",
              className ? className : "text-gray-600",
              leftIcon ? "pl-10" : "px-4",
              radius
            )}
            ref={ref}
            {...rest}
          />
        </div>
        <p className="text-red-500 text-xs">{error?.message}</p>
      </div>
    );
  }
);

Input.displayName = "Input";
