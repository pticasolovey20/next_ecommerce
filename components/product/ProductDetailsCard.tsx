import ProductSectionContainer from "@/components/product/ProductSectionContainer";

const ProductDetailsCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* LEFT SIDE */}
        <div className="relative w-full">
          <div className="sticky top-20 w-full">
            <ProductSectionContainer className="h-[800px]">
              <div></div>
            </ProductSectionContainer>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          {/* DESCRIPTION SECTION */}
          <ProductSectionContainer>
            <div></div>
          </ProductSectionContainer>

          {/* DESCRIPTION SECTION */}
          <ProductSectionContainer>
            <div></div>
          </ProductSectionContainer>

          {/* DESCRIPTION SECTION */}
          <ProductSectionContainer>
            <div></div>
          </ProductSectionContainer>

          {/* DESCRIPTION SECTION */}
          <ProductSectionContainer>
            <div></div>
          </ProductSectionContainer>
        </div>
      </div>

      <ProductSectionContainer>
        <div></div>
      </ProductSectionContainer>

      <ProductSectionContainer>
        <div></div>
      </ProductSectionContainer>
    </div>
  );
};

export default ProductDetailsCard;
