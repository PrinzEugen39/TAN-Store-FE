import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useProductsDetail } from "@/hooks/useProductsDetail";

export default function Product() {
  const { ProductDetail, isLoading } = useProductsDetail();

  console.log(ProductDetail);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MaxWidthWrapper>
      <section className="flex justify-between">
        <aside>
          {ProductDetail?.data.product.image.map((img) => (
            <img src={img} />
          ))}
        </aside>
        <main>aaaa</main>
        <aside>anu</aside>
      </section>
    </MaxWidthWrapper>
  );
}
