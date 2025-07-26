import { classNames } from "@/utils/classNames";
import React from "react";

const SubscriptionForm = () => {
  return (
    <form className="h-12 w-full flex">
      <input
        placeholder="Type your email here"
        className="flex-1 border-2 border-gray-300 border-r-0 rounded-lg rounded-r-none px-4 outline-none"
      />

      <button
        type="submit"
        className={classNames(
          "w-[120px] font-semibold",
          "border-2 border-gray-300",
          "rounded-lg rounded-l-none",
          "px-2 bg-gray-300"
        )}
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscriptionForm;
