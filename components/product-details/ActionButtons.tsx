import Button from "@/ui/Button";

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" variant="primary" className="w-full hover-lift font-semibold uppercase">
        buy
      </Button>

      <Button size="lg" variant="secondary" className="w-full hover-lift font-semibold uppercase">
        add to cart
      </Button>
    </div>
  );
};

export default ActionButtons;
