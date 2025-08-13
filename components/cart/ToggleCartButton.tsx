import { ProductData } from "@/types/product";
import { useAddProductToCart } from "@/hooks/cart/useAddProductToCart";
import { useRemoveProductFromCart } from "@/hooks/cart/useRemoveProductFromCart";

import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { HiShoppingCart } from "react-icons/hi";
import { useCartStatus } from "@/hooks/cart/useCartStatus";

interface ToggleCartButtonProps {
  product: ProductData;
}

const ToggleCartButton = ({ product }: ToggleCartButtonProps) => {
  const { isInCart } = useCartStatus(product.id);
  const { addProduct } = useAddProductToCart();
  const { removeProduct } = useRemoveProductFromCart();

  const handleAdd = () => addProduct(product);
  const handleRemove = () => removeProduct(product.id);

  const toggle = () => (!isInCart ? handleAdd() : handleRemove());

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
