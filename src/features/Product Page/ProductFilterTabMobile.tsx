import { ArrowUpDown, LibraryBig, Search } from "lucide-react";

export default function ProductFilterTabMobile() {
  return (
    <div className="flex justify-around px-1 py-3 border border-blue-200 bg-gray-50 text-muted-foreground rounded-xl">
      <div className="flex">
        <p>Search</p>
        <Search className="text-blue-500" />
      </div>
      <div className="flex">
        <p>Categories</p>
        <LibraryBig className="text-blue-500" />
      </div>
      <div className="flex">
        <p>Sort</p>
        <ArrowUpDown className="text-blue-500" />
      </div>
    </div>
  );
}
