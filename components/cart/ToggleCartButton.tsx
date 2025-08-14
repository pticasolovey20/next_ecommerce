import { ProductData } from "@/types/product";
import { useCartData } from "@/hooks/cart/useCartData";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { HiShoppingCart } from "react-icons/hi";

interface ToggleCartButtonProps {
  product: ProductData;
}

const ToggleCartButton = ({ product }: ToggleCartButtonProps) => {
  const { isInCart, addItem, deleteItem } = useCartData(product.id);

  const handleAdd = () => addItem(product);
  const handleDelete = () => deleteItem(product.id);

  const toggle = () => {
    if (isInCart) {
      handleDelete();
    } else {
      handleAdd();
    }
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={`${isInCart ? "remove from" : "Add to"} cart`}
      onClick={toggle}
      className={classNames(
        "absolute bottom-3 right-4 w-9 h-9 hover:text-green-500",
        isInCart ? "text-green-500" : ""
      )}
    >
      <HiShoppingCart className="w-full h-full" />
    </Button>
  );
};

export default ToggleCartButton;
