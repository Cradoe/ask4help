export type ButtonVariant = "primary" | "secondary" | "transparent";

export type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  href: string;
  className?: string;
  justifyContent?: string;
  size?: "sm" | "md" | "lg";
  radius?: string;
};
