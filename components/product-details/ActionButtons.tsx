import { ProductData } from "@/types/product";
import { useCartStore } from "@/stores/useCartStore";

import Button from "@/ui/Button";

interface ActionButtonsProps {
  product: ProductData;
}

const ActionButtons = ({ product }: ActionButtonsProps) => {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" variant="primary" className="w-full hover-lift font-semibold uppercase">
        buy
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className="w-full hover-lift font-semibold uppercase"
        onClick={() => addProduct(product)}
      >
        add to cart
      </Button>
    </div>
  );
};

export default ActionButtons;
