import { Option } from "./Select.type";
import SelectSearch from "react-dropdown-select";

export const SearchableSelect = ({
  error,
  ariaLabel,
  label,
  labelClassName,
  className,
  placeholder,
  leftIcon,
  defaultValue,
  onChange,
  options,
  showRequiredAsterik = false,
  ...rest
}: any) => {
  return (
    <div className="py-3">
      {label && (
        <label
          htmlFor={label || ariaLabel}
          className={`block text-xs font-medium  ${labelClassName}`}
        >
          {label}{" "}
          {showRequiredAsterik && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative mt-1 rounded-md">
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
          </div>
        )}

        <SelectSearch
          options={
            options?.map((option: Option) => ({
              label: option?.label,
              value: option?.value,
            })) || []
          }
          name={rest?.name || "select"}
          values={
            options?.filter(
              (option: Option) => option.value === defaultValue
            ) || []
          }
          onChange={(values: Option[]) => onChange?.(values)}
          className="mt-2 outline-0 placeholder-[#515151] text-gray-600 block w-full h-12  text-sm rounded p-2 border border-slate-300 focus:ring-2 focus:outline-none px-3"
        />
      </div>
      <p className="text-red-500 text-xs">{error?.message}</p>
    </div>
  );
};
