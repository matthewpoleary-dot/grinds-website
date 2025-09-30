import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`} {...props} />
  );
}

export function CardTitle({ className = "", ...props }: DivProps) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return (
    <div className={`px-6 pb-6 ${className}`} {...props} />
  );
}

export function CardFooter({ className = "", ...props }: DivProps) {
  return (
    <div className={`px-6 pt-0 pb-6 ${className}`} {...props} />
  );
}

export default Card;


