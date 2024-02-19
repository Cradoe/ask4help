import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: {
    message?: string;
  };
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  readOnly?: boolean;
  value?: string | number;
  radius?: string;
  leftIcon?: React.ReactNode;
}
