import { classNames } from "@/utils/classNames";

const SubscriptionForm = () => {
  return (
    <form className="h-12 w-full flex">
      <input
        placeholder="Type your email here"
        className={classNames(
          "flex-1 min-w-0",
          "border-2 border-r-0 border-muted-foreground",
          "rounded-lg rounded-r-none px-4 outline-none"
        )}
      />

      <button
        type="submit"
        className={classNames(
          "w-[120px] font-semibold",
          "border-2 border-muted-foreground",
          "rounded-lg rounded-l-none",
          "text-muted px-2 bg-muted-foreground cursor-pointer"
        )}
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscriptionForm;
