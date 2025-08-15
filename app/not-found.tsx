import HomeButton from "@/components/HomeButton";

const NotFoundPage = () => {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-6xl font-bold">404</span>
        <p className="text-2xl text-muted-foreground">The requested page was not found</p>
        <HomeButton />
      </div>
    </main>
  );
};

export default NotFoundPage;
