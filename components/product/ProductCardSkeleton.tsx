import Skeleton from "@/ui/Skeleton";
import { classNames } from "@/utils/classNames";

const ProductCardSkeleton = () => {
  return (
    <div
      className={classNames(
        "relative w-ful h-full flex flex-col",
        "rounded-xl shadow-lg bg-muted cursor-pointer overflow-hidden"
      )}
    >
      <Skeleton className="relative w-full h-50 sm:flex-1 rounded-b-none" />

      <div className="h-[150px] flex flex-col p-4">
        <div className="flex-1">
          <Skeleton className="w-[70%] h-6 rounded-sm" />
          <Skeleton className="w-full h-6 mt-2 rounded-sm" />
        </div>

        <Skeleton className="w-[100px] h-7 mt-4 rounded-sm" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
