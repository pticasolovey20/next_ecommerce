import { classNames } from "@/utils/classNames";

interface EmptyListProps {
  containerClassName?: string;
}

const EmptyList = ({ containerClassName }: EmptyListProps) => {
  return (
    <div className={classNames("w-full flex items-center justify-center", containerClassName)}>
      <p className="text-foreground text-lg font-medium">Oops... Nothing found!</p>
    </div>
  );
};

export default EmptyList;
