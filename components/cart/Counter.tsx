"use client";

import { useState } from "react";

import Button from "@/ui/Button";
import { FiMinus, FiPlus } from "react-icons/fi";

const Counter = () => {
  const [counterValue, setCounterValue] = useState<number>(0);

  const hanleDecreaseValue = () => setCounterValue((prev) => prev - 1);
  const hanleIncreaseValue = () => setCounterValue((prev) => prev + 1);

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="ghost"
        aria-label="Decrease value"
        onClick={hanleDecreaseValue}
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
        onClick={hanleIncreaseValue}
        className="w-9 h-9"
      >
        <FiPlus className="w-full h-full" />
      </Button>
    </div>
  );
};

export default Counter;
