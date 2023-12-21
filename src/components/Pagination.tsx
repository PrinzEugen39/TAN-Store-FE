import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchParams } from "react-router-dom";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  // const pageCount = Math.ceil(Number(searchParams.get("limit")) / 15);
  // console.log(pageCount);
  console.log(currentPage);

  function nextPage() {
    if (currentPage >= 1) {
      const next = currentPage + 1;
      searchParams.set("page", next.toString());
      setSearchParams(searchParams);
    }
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
        Showing <span>1</span> to <span>9</span> of <span>15</span> results
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
