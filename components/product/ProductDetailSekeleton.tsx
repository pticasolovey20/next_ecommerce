import ProductDetailSectionContainer from "@/components/product/ProductDetailSectionContainer";

interface ProductDetailSekeletonProps {
  className?: string;
}

const ProductDetailSekeleton = ({ className }: ProductDetailSekeletonProps) => {
  return (
    <ProductDetailSectionContainer className={className}>
      <div></div>
    </ProductDetailSectionContainer>
  );
};

export default ProductDetailSekeleton;
