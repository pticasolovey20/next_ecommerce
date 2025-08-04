import { useFormContext } from "react-hook-form";
import { classNames } from "@/utils/classNames";

import Input from "@/ui/Input";
import { BiSearch } from "react-icons/bi";

interface SearchProductFormProps {
  onOpen: () => void;
}

const SearchProductForm = ({ onOpen }: SearchProductFormProps) => {
  const { register } = useFormContext();

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="relative">
        <Input
          {...register("query")}
          onFocus={onOpen}
          placeholder="Search..."
          className="pl-10 h-10 drop-shadow-sm"
        />

        <div
          className={classNames(
            "absolute top-1/2 -translate-y-1/2 left-2",
            "text-muted-foreground hover:text-foreground",
            "disabled:opacity-50",
            "transition-all duration-300 ease-in-out",
            "cursor-pointer"
          )}
        >
          <BiSearch className="w-5 h-5" />
        </div>
      </div>
    </form>
  );
};

export default SearchProductForm;
