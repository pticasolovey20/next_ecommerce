import ProductDetailsCard from "@/components/product-details/ProductDetailCard";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  return <ProductDetailsCard productId={id} />;
};

export default ProductDetailsPage;
