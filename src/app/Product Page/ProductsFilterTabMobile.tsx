import { ArrowUpDown, LibraryBig, Search } from "lucide-react";
import DrawerMobile from "../../components/ProductsFiltering/DrawerMobile";
import ProductsFTMSearch from "../../components/ProductsFiltering/ProductsSearch";
import ProductsCategories from "@/components/ProductsFiltering/ProductsCategories";
import ProductsSorting from "@/components/ProductsFiltering/ProductsSorting";

export default function ProductsFilterTabMobile() {
  return (
    <>
      <div className="flex justify-around px-1 py-3 text-sm border border-blue-200 bg-gray-50 text-muted-foreground rounded-xl">
        <div>
          <DrawerMobile
            title="Search for a specific products"
            trigger="Search"
            icon={<Search className="text-blue-500" size={20} />}
          >
            <ProductsFTMSearch classname="flex w-fit" />
          </DrawerMobile>
        </div>
        <div>
          <DrawerMobile
            title="Select a category"
            trigger="Categories"
            icon={<LibraryBig className="text-blue-500" size={20} />}
          >
            <ProductsCategories />
          </DrawerMobile>
        </div>
        <div>
          <DrawerMobile
            title="Sort our products"
            trigger="Sort"
            icon={<ArrowUpDown className="text-blue-500" size={20} />}
          >
            <ProductsSorting />
          </DrawerMobile>
        </div>
      </div>
    </>
  );
}
