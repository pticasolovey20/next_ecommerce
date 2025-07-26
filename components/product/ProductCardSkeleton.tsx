const ProductCardSkeleton = () => {
  return (
    <div className="relative w-full rounded-sm bg-muted shadow-lg cursor-pointer overflow-hidden">
      <div className="relative w-full aspect-square bg-gray-300" />

      <div className="p-4">
        <div className="w-full h-6 rounded-sm bg-gray-300" />
        <div className="w-full h-6 mt-2 rounded-sm bg-gray-300" />

        <div className="w-[100px] h-7 mt-4 rounded-sm bg-gray-300" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
