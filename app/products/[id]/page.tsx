import ProductDetailsCard from "@/components/product/ProductDetailsCard";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  return <ProductDetailsCard productId={id} />;
};

export default ProductDetailsPage;
