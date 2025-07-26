import { classNames } from "@/utils/classNames";

const ProductCardSkeleton = () => {
  return (
    <div
      className={classNames(
        "relative w-full",
        "rounded-md border-2 border-muted-foreground",
        "shadow-lg bg-muted cursor-pointer overflow-hidden"
      )}
    >
      <div className="relative w-full aspect-square bg-muted" />

      <div className="p-4 border-t-2 border-muted-foreground bg-background">
        <div className="w-full h-6 rounded-sm border-2 border-muted-foreground bg-muted" />
        <div className="w-full h-6 mt-2 rounded-sm border-2 border-muted-foreground bg-muted" />
        <div className="w-[100px] h-7 mt-4 rounded-sm border-2 border-muted-foreground bg-muted" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
