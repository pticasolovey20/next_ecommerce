import { classNames } from "@/utils/classNames";

interface LoadingSpinnerProps {
  containerClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}

const LoadingSpinner = ({
  containerClassName,
  iconClassName,
  textClassName,
}: LoadingSpinnerProps) => {
  return (
    <div
      className={classNames("w-full flex items-center justify-center gap-2", containerClassName)}
    >
      <div
        className={classNames(
          "w-5 h-5 border-2 border-muted-foreground/50 border-t-foreground rounded-full",
          "animate-spin",
          iconClassName
        )}
      />

      <span className={classNames("text-foreground text-lg font-medium", textClassName)}>
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
