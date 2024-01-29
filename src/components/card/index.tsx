import { CardProps } from "./type";
import { CardHeader } from "./card-header";

export const Card = ({
  title,
  description,
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg border border slate-200 px-5 py-8 ${className}`}
    >
      {title && <CardHeader title={title} description={description} />}
      {children}
    </div>
  );
};
