import { InputHTMLAttributes } from "react";
import { classNames } from "@/utils/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={classNames(
        "min-w-0 w-full px-4 py-3",
        "border-2 border-muted-foreground rounded-lg bg-white",
        "focus:outline-none focus:ring-0 focus:ring-foreground",
        className
      )}
    />
  );
};

export default Input;
