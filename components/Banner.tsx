import { classNames } from "@/utils/classNames";

import Button from "@/ui/Button";

interface BannerProps {
  className?: string;
}

const Banner = ({ className }: BannerProps) => {
  return (
    <div
      className={classNames(
        "relative p-8 overflow-hidden",
        "bg-gradient-to-r from-gray-800 to-gray-900",
        "border border-gray-700/50 rounded-3xl shadow-lg",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <span
              className={classNames(
                "inline-block",
                "text-sm font-medium text-white",
                "px-3 py-1 mb-4 rounded-full bg-white/20"
              )}
            >
              Limited-Time Offer
            </span>

            <h2 className="text-3xl lg:text-4xl text-white mb-3">
              Save up to <span className="font-bold text-yellow-400">30%</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 max-w-md">
              On the entire &quot;PRODUCT&quot; and &quot;PRODUCT&quot; lineup. Hurry—offer ends
              this month!
            </p>

            <Button size="lg">View Offers</Button>
          </div>

          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div
                className={classNames(
                  "absolute -top-2 -right-2 w-6 h-6",
                  "flex items-center justify-center",
                  "rounded-full bg-yellow-400",
                  "text-xs text-gray-800 font-bold"
                )}
              >
                %
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-white/10 rounded-full transform -rotate-45" />
    </div>
  );
};

export default Banner;
