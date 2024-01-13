import LoadingSkeleton from "@/components/LoadingSkeleton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Pagination from "@/components/Pagination";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useProductsGet } from "@/hooks/useProductsGet";
import { formatPrice } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductsFilterTabMobile from "./ProductsFilterTabMobile";
import ProductsFilterTab from "./ProductsFilterTab";

export default function Products() {
  const { productData, isLoading } = useProductsGet();

  const { products } = productData?.data || {};

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("page", "1");
    searchParams.set("limit", "9");
    setSearchParams(searchParams);
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <div className="sticky top-14 sm:hidden">
          <ProductsFilterTabMobile />
        </div>
        <div className="flex justify-center gap-5 py-10">
          <div className="hidden max-w-xs sm:block sm:flex-1">
            <ProductsFilterTab />
          </div>
          <div className="sm:flex sm:items-center sm:justify-end sm:flex-2">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {isLoading ? (
                <>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </>
              ) : (
                <>
                  {products?.map((product) => (
                    <Card
                      key={product.id}
                      className="flex flex-col justify-between w-40 h-full gap-3 sm:w-56"
                    >
                      <Link to={`/products/${product.slug}`}>
                        <img
                          src={product.image[0]}
                          alt="product"
                          className="object-cover w-full rounded-t-lg h-40 sm:h-[14rem]"
                        />
                        <div className="mx-3">
                          <CardTitle className="text-sm font-medium truncate sm:text-base">
                            {product.name}
                          </CardTitle>
                          {product.qty <= 100 && (
                            <CardDescription className="mt-3 text-xs font-medium sm:text-sm">
                              Only {product.qty} left in stock - order soon
                            </CardDescription>
                          )}
                        </div>
                      </Link>
                      <CardFooter className="px-3">
                        <span>{formatPrice(product.price)}</span>
                      </CardFooter>
                    </Card>
                  ))}
                </>
              )}
              <div className="col-span-2 sm:col-span-3">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
