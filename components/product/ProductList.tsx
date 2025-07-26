import ProductCard from "@/components/product/ProductCard";

const ProductList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4 py-6">
      {Array.from({ length: 15 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default ProductList;
