import { ProductData } from "@/types/product";

import { FaStar, FaRegStar } from "react-icons/fa";

interface ProductRatingProps {
  product: ProductData;
}

const ProductRating = ({ product }: ProductRatingProps) => {
  const rating = product?.rating ?? 0;

  return (
    <div className="flex items-center space-x-3">
      <ul className="flex space-x-1 relative">
        {Array.from({ length: 5 }).map((_, index) => {
          const fillLevel = Math.min(Math.max(rating - index, 0), 1);

          return (
            <li key={index}>
              <div className="relative w-5 h-5 cursor-pointer hover-lift">
                <FaRegStar className="absolute top-0 left-0 w-full h-full text-gray-300" />

                <div
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                  style={{ width: `${fillLevel * 100}%` }}
                >
                  <FaStar className="w-full h-full text-yellow-400" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <span className="text-gray-600">({rating}) 127 reviews</span>
    </div>
  );
};

export default ProductRating;
