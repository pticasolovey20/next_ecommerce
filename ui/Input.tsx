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
        "border border-gray-300 rounded-lg bg-white/80",
        "focus:outline-none focus:ring-2 focus:ring-gray-400",
        className
      )}
    />
  );
};

export default Input;
