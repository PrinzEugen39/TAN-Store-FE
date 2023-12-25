import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, XCircle } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductsSearch() {
  const [searchField, setSearchField] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchField() {
    console.log(searchField);
    searchParams.set("name", searchField);
    setSearchParams(searchParams);
  }
  function resetSearch() {
    searchParams.delete("name");
    setSearchParams(searchParams);
  }
  return (
    <div>
      <div className="flex gap-2">
        <Input
          placeholder="Search..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchField(e.target.value)
          }
        />
        <Button variant={"secondary"} onClick={handleSearchField}>
          <Search size={20} className="text-blue-600" />
        </Button>
      </div>
      <div>
        {searchField && (
          <div className="mt-2 rounded-md bg-slate-200 w-fit">
            <button
              onClick={resetSearch}
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "w-fit px-3 gap-2",
              })}
            >
              <XCircle size={20} color="red"/>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
