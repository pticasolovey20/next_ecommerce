import SubscriptionForm from "@/components/form/SubscriptionForm";

const Subscription = () => {
  return (
    <div className="max-w-2xl w-full py-24 mx-auto ">
      <h3 className="md:text-center text-2xl md:text-3xl font-bold">
        Subscribe now and get 20% off
      </h3>

      <p className="md:text-center text-base md:text-lg font-medium text-muted-foreground mb-6 md:mb-8">
        Get personalized discounts delivered straight to your inbox.
      </p>

      <SubscriptionForm />
    </div>
  );
};

export default Subscription;
