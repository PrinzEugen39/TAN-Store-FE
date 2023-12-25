import { ArrowUpDown, LibraryBig, Search } from "lucide-react";

export default function ProductsFilterTabMobile() {
  return (
    <div className="flex justify-around px-1 py-3 text-sm border border-blue-200 bg-gray-50 text-muted-foreground rounded-xl">
      <div className="flex items-center gap-3">
        <p>Search</p>
        <Search className="text-blue-500" size={20}/>
      </div>
      <div className="flex items-center gap-3">
        <p>Categories</p>
        <LibraryBig className="text-blue-500" size={20}/>
      </div>
      <div className="flex items-center gap-3">
        <p>Sort</p>
        <ArrowUpDown className="text-blue-500" size={20} />
      </div>
    </div>
  );
}
