import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchParams } from "react-router-dom";
import { useProductsLength } from "@/hooks/useProductsGet";


export default function Pagination() {
  const { productsLength } = useProductsLength();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  const pagex = Math.ceil(productsLength / 9);

  function nextPage() {
    if (currentPage === pagex) return;
    const next = currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    if (currentPage === 1) return;
    const prev = currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <p className="ml-3 text-sm">
        Showing <span>{currentPage === 1 ? 1 : (currentPage - 1) * 9}</span> to{" "}
        <span>
          {currentPage * 9 > productsLength ? productsLength : currentPage * 9}
        </span>{" "}
        of <span>{productsLength}</span> results
      </p>

      <div className="flex gap-2 pb-6">
        <Button className="p-0 pr-3" onClick={prevPage}>
          <ChevronLeft />
          <span>prev</span>
        </Button>

        <Button className="p-0 pl-3" onClick={nextPage}>
          <span>next</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
