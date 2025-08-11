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
    <div className="flex items-center justify-center rounded-md border border-gray-200 overflow-hidden">
      <Button
        size="icon"
        variant="ghost"
        aria-label="Decrease value"
        onClick={onValueDecrease}
        className="w-7 h-6 p-1 rounded-none"
      >
        <FiMinus className="w-full h-full" />
      </Button>

      <div className="w-10 h-6 flex items-center justify-center px-1 border-r border-l border-gray-200">
        {counterValue}
      </div>

      <Button
        size="icon"
        variant="ghost"
        aria-label="Increase value"
        onClick={onValueIncrease}
        className="w-7 h-6 p-1 rounded-none"
      >
        <FiPlus className="w-full h-full" />
      </Button>
    </div>
  );
};

export default Counter;
