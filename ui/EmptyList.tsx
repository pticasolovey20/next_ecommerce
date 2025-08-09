import { classNames } from "@/utils/classNames";

interface EmptyListProps {
  className?: string;
}

const EmptyList = ({ className }: EmptyListProps) => {
  return (
    <div className={classNames("w-full flex items-center justify-center p-4", className)}>
      <p className="text-foreground text-lg font-medium">Oops... Nothing found!</p>
    </div>
  );
};

export default EmptyList;
