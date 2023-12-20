import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useProductsGet } from "@/hooks/useProductsGet";

export default function ProductList() {
  const { productData, isLoading } = useProductsGet();
  console.log(productData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <MaxWidthWrapper>
      <div>ProductList</div>
    </MaxWidthWrapper>
  );
}
