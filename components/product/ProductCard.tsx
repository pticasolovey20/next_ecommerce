const ProductCard = () => {
  return (
    <div className="w-full rounded-sm bg-muted shadow-lg cursor-pointer overflow-hidden">
      <div className="relative w-full aspect-square bg-muted-foreground" />

      <div className="px-4 py-2">
        <h2 className="font-semibold">Product Title</h2>
        <p className="w-full truncate text-muted-foreground">Very looooong product description</p>

        <div className="flex justify-between mt-4">
          <span className="font-medium">$1000</span>
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
