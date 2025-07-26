import IconButton from "@/ui/IconButton";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

const ProductCard = () => {
  return (
    <div className="relative w-full rounded-sm bg-muted shadow-lg cursor-pointer overflow-hidden">
      <div className="relative w-full aspect-square bg-muted-foreground" />

      <IconButton className="absolute top-4 right-4 w-8 h-8 hover:bg-muted">
        <IoMdHeartEmpty className="w-full h-full" />
      </IconButton>

      <div className="p-4">
        <h2 className="font-semibold">Product Title</h2>
        <p className="w-full truncate text-muted-foreground">Very looooong product description</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold">$1000</span>

          <IconButton className="w-9 h-9 p-2 hover:bg-green-500/30">
            <RiShoppingCartLine className="w-full h-full" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
