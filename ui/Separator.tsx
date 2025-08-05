import { classNames } from "@/utils/classNames";

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return <div className={classNames("w-full h-[2px] my-4 bg-gray-200", className)} />;
};

export default Separator;
