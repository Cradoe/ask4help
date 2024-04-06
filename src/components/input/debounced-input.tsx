"use client";
import { useState, useEffect } from "react";
import { Input } from "./";
import { useDebouncedCallback } from "use-debounce";

// A debounced input react component
export const DebouncedInput = ({
  radius,
  label,
  value: initialValue,
  onChange,
  debounce = 500,
  leftIcon,
  ...props
}: {
  radius?: string;
  label?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
  leftIcon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);
  const debouncedCallback = useDebouncedCallback(
    (value) => onChange(value),
    debounce
  );

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      {...props}
      label={label}
      value={value}
      leftIcon={leftIcon}
      radius={radius}
      onChange={(e) => {
        setValue(e.target.value);
        debouncedCallback(e.target.value);
      }}
    />
  );
};
