import { type ComponentProps } from "react";

export const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return <button {...props}>{children}</button>;
};
