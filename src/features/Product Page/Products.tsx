import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useProductsGet } from "@/hooks/useProductsGet";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import Pagination from "@/components/Pagination";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const { productData, isLoading } = useProductsGet();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("page", "1");
    searchParams.set("limit", "9");
    setSearchParams(searchParams);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MaxWidthWrapper>
      <div>ProductList</div>
      <div className="flex items-center justify-end">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {productData?.map((product) => (
            <Card key={product.id} className="flex flex-col w-56 gap-3">
              <img
                src={product.image[0]}
                alt="product"
                className="object-cover w-full rounded-t-lg h-fit"
              />
              <div className="mx-3">
                <CardTitle className="text-base font-medium truncate">
                  {product.name}
                </CardTitle>
                <CardDescription className="mt-3 text-sm font-medium">
                  Only {product.qty} left in stock - order soon
                </CardDescription>
              </div>
              <CardFooter className="px-3">
                <span>{formatPrice(product.price)}</span>
              </CardFooter>
            </Card>
          ))}
          <div className="col-span-3">
            <Pagination />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
