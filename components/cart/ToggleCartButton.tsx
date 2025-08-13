import { ProductData } from "@/types/product";

import { useAddProductToCart } from "@/hooks/cart/useAddProductToCart";
// import { fetchAddProductToCart } from "@/API/cartAPI";
import { useMemo } from "react";

import { useCartStore } from "@/stores/useCartStore";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";
import { HiShoppingCart } from "react-icons/hi";

interface ToggleCartButtonProps {
  product: ProductData;
}

const ToggleCartButton = ({ product }: ToggleCartButtonProps) => {
  const { addProduct } = useAddProductToCart();

  const handleAddProductToCart = () => {
    console.log("here");
    addProduct(product);
  };

  const cartList = useCartStore((state) => state.cartList);

  const isInCart = useMemo(() => {
    return cartList.find(({ id }) => id === product.id);
  }, [cartList, product.id]);

  // const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={`${isInCart ? "remove from" : "Add to"} cart`}
      onClick={() => (!isInCart ? handleAddProductToCart() : removeProduct(product.id))}
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
