import { classNames } from "@/utils/classNames";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={classNames("rounded bg-gray-200 animate-pulse", className)} />;
};

export default Skeleton;
