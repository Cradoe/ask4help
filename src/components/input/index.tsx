import { forwardRef, useId } from "react";
import { InputProps } from "./type";

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

        <div className="relative mt-1 rounded-md">
          <input
            aria-invalid={error ? "true" : "false"}
            type={type}
            id={id}
            readOnly={readOnly}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange ? onChange : undefined}
            className={`mt-2 outline-0 placeholder-[#828282] block w-full h-12  text-sm rounded-md py-2 border border-slate-300 focus:ring-1 focus:ring-secondary-500  focus:outline-none px-4 ${
              className ? className : "text-gray-600"
            }`}
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
