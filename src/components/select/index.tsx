import { forwardRef, useId } from "react";
import { Option, SelectProps } from "./Select.type";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      error,
      label,
      labelClassName,
      className,
      placeholder,
      defaultValue,
      onChange,
      options,
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
            className={`block text-xs font-medium  ${labelClassName}`}
          >
            {label}
          </label>
        )}

        <div className="relative mt-1 rounded-md">
          <select
            id={id}
            aria-invalid={error ? "true" : "false"}
            onChange={onChange ? onChange : undefined}
            defaultValue={defaultValue}
            className={`mt-2 outline-0 placeholder-[#515151] text-gray-600 block w-full h-12  text-sm rounded p-2 border border-slate-300 focus:ring-2 focus:outline-none ${className}`}
            ref={ref}
            {...rest}
          >
            <option value="">{placeholder ? placeholder : "Select"}</option>

            {options &&
              options.map((option: Option, index: number) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
          </select>
        </div>
        <p className="text-red-500 text-xs">{error?.message}</p>
      </div>
    );
  }
);

Select.displayName = "Select";
