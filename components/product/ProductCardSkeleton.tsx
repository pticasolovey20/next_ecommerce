import Skeleton from "@/ui/Skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="relative w-full rounded-xl shadow-lg bg-muted cursor-pointer overflow-hidden">
      <Skeleton className="relative w-full aspect-square rounded-b-none" />

      <div className="p-4">
        <Skeleton className="w-[70%] h-6 rounded-sm" />
        <Skeleton className="w-full h-6 mt-2 rounded-sm" />
        <Skeleton className="w-[100px] h-7 mt-4 rounded-sm" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
