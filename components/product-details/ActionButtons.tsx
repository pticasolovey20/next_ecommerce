import { ProductData } from "@/types/product";
import { useCartData } from "@/hooks/cart/useCartData";
import { useCartStore } from "@/stores/useCartStore";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";

interface ActionButtonsProps {
  product: ProductData;
}

const ActionButtons = ({ product }: ActionButtonsProps) => {
  const { isInCart, addItem } = useCartData(product.id);
  const { openCart } = useCartStore();

  const handleClick = () => {
    if (isInCart) {
      openCart();
    } else {
      addItem(product);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" variant="primary" className="w-full hover-lift font-semibold uppercase">
        buy
      </Button>

      <Button
        size="lg"
        variant="secondary"
        onClick={handleClick}
        className={classNames(
          "w-full hover-lift font-semibold uppercase",
          isInCart ? "border border-green-500 bg-green-300 hover:bg-green-300" : ""
        )}
      >
        {isInCart ? "open" : "add to"} cart
      </Button>
    </div>
  );
};

export default ActionButtons;
