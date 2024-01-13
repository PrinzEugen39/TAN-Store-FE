import { useQuery } from "@tanstack/react-query";
import API from "./API";
import { useParams } from "react-router-dom";

interface Product {
  name: string;
  price: number;
  description: string;
  image: string[];
  qty: number;
  id: string;
  slug: string;
}

interface ProductDetail {
  status: string;
  data: {
    product: Product;
  };
}

export function useProductsDetail() {
  const { slug } = useParams();
  const {
    data: ProductDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", slug],
    queryFn: async () => {
      const { data } = await API.get(`/products/detail/${slug}`);
      return data as ProductDetail;
    },
  });

  return { ProductDetail, isLoading, error };
}
export function useProductsLength() {
  const {
    data: productsLength,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productsLength"],
    queryFn: async () => {
      const { data } = await API.get(`/products`);
      return data.results;
    },
  });

  return { productsLength, isLoading, error };
}
