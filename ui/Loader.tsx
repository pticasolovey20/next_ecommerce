import { classNames } from "@/utils/classNames";

interface LoaderProps {
  className?: string;
  color?: string;
}

const Loader = ({ className, color = "bg-foreground" }: LoaderProps) => {
  return (
    <div className={classNames("w-full flex items-center justify-center gap-2 p-4", className)}>
      <div className="grid grid-cols-3 gap-2 w-20 h-20">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={classNames("w-full h-full rounded animate-fade-sequence", color)}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
