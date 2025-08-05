import { subscribe } from "@/actions/subscribe";
import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";

const SubscriptionForm = () => {
  return (
    <form
      action={subscribe}
      className="w-full flex flex-col sm:flex-row gap-3 md:w-auto drop-shadow-lg"
    >
      <input
        type="email"
        placeholder="Ваш email"
        className={classNames(
          "h-12 flex-1 md:w-64 px-4 py-3",
          "border border-gray-300 rounded-xl bg-white/80",
          "focus:outline-none focus:ring-2 focus:ring-gray-400"
        )}
      />

      <Button type="submit" variant="primary" className="sm:max-w-[150px] w-full h-12">
        Subscribe
      </Button>
    </form>
  );
};

export default SubscriptionForm;
