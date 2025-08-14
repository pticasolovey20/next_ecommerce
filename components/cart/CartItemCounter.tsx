"use client";

import { CartItemMutationValue } from "@/types/cart";
import { useState, useRef, useEffect } from "react";

import Button from "@/ui/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

interface CartItemCounterProps {
  initialValue: number;
  debounceDelay?: number;
  productId: string;
  onValueChange?: (data: CartItemMutationValue) => void;
  disabled: boolean;
}

const CartItemCounter = ({
  initialValue,
  debounceDelay = 250,
  productId,
  onValueChange,
  disabled,
}: CartItemCounterProps) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), debounceDelay);

    return () => clearTimeout(handler);
  }, [value, debounceDelay]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    if (debouncedValue !== initialValue && onValueChange) {
      onValueChange({ productId, quantity: debouncedValue });
    }
  }, [debouncedValue, initialValue, productId, onValueChange]);

  const handleDecrease = () => setValue((prev) => Math.max(0, prev - 1));
  const handleIncrease = () => setValue((prev) => prev + 1);

  return (
    <div className="flex items-center justify-center rounded-md border border-gray-200 overflow-hidden">
      <Button
        size="icon"
        variant="ghost"
        aria-label="Decrease value"
        onClick={handleDecrease}
        disabled={disabled}
        className="w-7 h-6 p-1 rounded-none"
      >
        <FiMinus className="w-full h-full" />
      </Button>

      <div className="w-10 h-6 flex items-center justify-center px-1 border-r border-l border-gray-200">
        {value}
      </div>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Increase value"
        onClick={handleIncrease}
        disabled={disabled}
        className="w-7 h-6 p-1 rounded-none"
      >
        <FiPlus className="w-full h-full" />
      </Button>
    </div>
  );
};

export default CartItemCounter;
