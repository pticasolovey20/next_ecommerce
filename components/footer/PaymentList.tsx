import { PAYMENT_METHODS } from "@/constants/footer";
import { classNames } from "@/utils/classNames";

const PaymentList = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <span className="text-sm font-medium">We accept:</span>

      <ul className="flex gap-2">
        {PAYMENT_METHODS.map(({ name, code }) => (
          <li
            key={name}
            className={classNames(
              "w-10 h-6 flex items-center justify-center",
              "text-xs font-bold",
              "rounded bg-white"
            )}
          >
            <span title={name}>{code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
