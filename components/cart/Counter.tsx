"use client";

import Button from "@/ui/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

interface CounterProps {
  counterValue: number;
  onValueDecrease: () => void;
  onValueIncrease: () => void;
}

const Counter = ({ counterValue, onValueDecrease, onValueIncrease }: CounterProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="ghost"
        aria-label="Decrease value"
        onClick={onValueDecrease}
        className="w-9 h-9"
      >
        <FiMinus className="w-full h-full" />
      </Button>

      <span className="w-12 flex items-center justify-center py-2 px-4 rounded-lg border border-gray-300/50">
        {counterValue}
      </span>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Increase value"
        onClick={onValueIncrease}
        className="w-9 h-9"
      >
        <FiPlus className="w-full h-full" />
      </Button>
    </div>
  );
};

export default Counter;
