import { classNames } from "@/utils/classNames";

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={classNames("w-full flex items-center justify-center gap-2 p-4", className)}>
      <div
        className={classNames(
          "w-5 h-5 border-2 border-muted-foreground/50 border-t-foreground rounded-full",
          "animate-spin"
        )}
      />

      <span className="text-foreground text-lg font-medium">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
