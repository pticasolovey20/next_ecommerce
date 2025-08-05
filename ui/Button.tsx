import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { classNames } from "@/utils/classNames";

type ButtonVariant = "default" | "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className = "", children, ...props }, ref) => {
    const baseStyles = classNames(
      "inline-flex items-center justify-center",
      "font-medium transition-all cursor-pointer",
      "focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
    );

    const variants = {
      default: "text-gray-800 bg-white/90 hover:bg-white hover:shadow-lg focus:ring-gray-500",

      primary:
        "text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:shadow-lg focus:ring-gray-500",

      secondary:
        "border border-gray-300/50 text-foreground bg-white/60 hover:text-gray-800 hover:bg-white/80 focus:ring-gray-400",

      ghost:
        "border border-gray-300/50 text-gray-600 bg-gray-100/80 hover:text-gray-800 hover:bg-gray-200/80 focus:ring-0",
    };

    const sizes = {
      sm: "text-sm px-3 py-2 rounded-lg",
      md: "text-sm px-4 py-2 rounded-xl",
      lg: "text-lg font-semibold tracking-wide px-8 py-3 rounded-xl",
      icon: "p-1.5 rounded-lg shadow-sm",
    };

    return (
      <button
        ref={ref}
        className={classNames(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
