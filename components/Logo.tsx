import Skeleton from "@/ui/Skeleton";

const Logo = () => {
  return (
    <div className="flex-1 h-full p-2">
      <Skeleton className="w-full flex items-center px-4 h-full">
        <span className="font-semibold">LOGO</span>
      </Skeleton>
    </div>
  );
};

export default Logo;
