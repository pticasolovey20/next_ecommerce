import { classNames } from "@/utils/classNames";

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return <div className={classNames("w-full h-[1px] bg-gray-400", className)} />;
};

export default Separator;
