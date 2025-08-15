import { ProductData } from "@/types/product";
import { classNames } from "@/utils/classNames";

import CardContainer from "@/components/card/CardConainer";

interface ProductSpecificationsProps {
  product: ProductData;
}

const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
  const features = product?.features ?? [];

  return (
    <CardContainer>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">FEATURES</h2>

      <ul className="space-y-3">
        {features.map(({ label, value }, index) => (
          <li key={index}>
            <div
              className={classNames(
                "flex flex-wrap justify-between sm:items-center gap-2 py-2",
                index === features.length - 1 ? "" : "border-b border-gray-200"
              )}
            >
              <span className="text-gray-600 font-medium">{label}</span>
              <span className="text-gray-800">{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </CardContainer>
  );
};

export default ProductSpecifications;
