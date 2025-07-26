import { classNames } from "@/utils/classNames";

const Banner = () => {
  return (
    <div
      className={classNames(
        "h-[300px] flex items-center justify-center",
        "rounded-xl border-2 border-foreground",
        "p-4 my-12 shadow-md bg-muted"
      )}
    >
      <h1 className="text-3xl font-bold">Banner</h1>
    </div>
  );
};

export default Banner;
