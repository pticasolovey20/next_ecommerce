import { classNames } from "@/utils/classNames";

interface ProductSkeletonProps {
  className?: string;
}

const ProductSkeleton = ({ className }: ProductSkeletonProps) => {
  return <div className={classNames("rounded bg-gray-200 animate-pulse", className)} />;
};

export default ProductSkeleton;
