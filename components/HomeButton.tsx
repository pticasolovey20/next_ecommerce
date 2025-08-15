import Button from "@/ui/Button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  return (
    <Link href="/">
      <Button size="md" variant="secondary" className="gap-4 px-8">
        <FaHome className="w-6 h-6" />
        <span className="text-xl font-semibold">Home</span>
      </Button>
    </Link>
  );
};

export default HomeButton;
