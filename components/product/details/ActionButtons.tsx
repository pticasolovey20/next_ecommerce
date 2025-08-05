import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        variant="primary"
        className={classNames(
          "w-full hover-lift",
          "font-semibold text-lg text-gray-700 uppercase tracking-wide"
        )}
      >
        buy
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className={classNames(
          "w-full hover-lift",
          "font-semibold text-lg text-gray-700 uppercase tracking-wide"
        )}
      >
        add to cart
      </Button>
    </div>
  );
};

export default ActionButtons;
