import { classNames } from "@/utils/classNames";

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        className={classNames(
          "text-white font-semibold text-lg uppercase tracking-wide",
          "min-w-0 w-full py-4 px-8 rounded-xl shadow-lg bg-gradient-to-r from-gray-700 to-gray-800 cursor-pointer",
          "hover-lift"
        )}
      >
        buy
      </button>

      <button
        className={classNames(
          "font-semibold text-lg text-gray-700 uppercase tracking-wide",
          "min-w-0 w-full py-4 px-8 rounded-xl border border-gray-300 shadow-lg bg-white/60 cursor-pointer",
          "hover-lift"
        )}
      >
        add to cart
      </button>
    </div>
  );
};

export default ActionButtons;
