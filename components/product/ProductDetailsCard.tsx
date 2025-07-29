import ProductDetailSekeleton from "@/components/product/ProductDetailSekeleton";

const ProductDetailsCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* LEFT SIDE */}
        <div className="relative w-full">
          <div className="sticky top-20 w-full">
            <ProductDetailSekeleton className="h-[800px]" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <ProductDetailSekeleton />
          <ProductDetailSekeleton />
          <ProductDetailSekeleton />
          <ProductDetailSekeleton />
        </div>
      </div>

      <ProductDetailSekeleton />
      <ProductDetailSekeleton />
    </div>
  );
};

export default ProductDetailsCard;
