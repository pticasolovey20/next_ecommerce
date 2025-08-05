import { ProductData } from "@/types/product";

import SearchProductCard from "@/components/search-product/SearchProductCard";

interface SearchProductListProps {
  products: ProductData[];
  onSelect: () => void;
}

const SearchProductList = ({ products, onSelect }: SearchProductListProps) => {
  return (
    <ul className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
      {products.map((product) => (
        <li key={product.id}>
          <SearchProductCard product={product} onClick={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default SearchProductList;
