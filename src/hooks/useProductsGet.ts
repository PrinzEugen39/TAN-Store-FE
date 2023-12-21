import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import API from "./API";

type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  image: [string];
};

export function useProductsGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      const { data } = await API.get(`/products?page=${page}&limit=${limit}`);
      return data.data.products as TProduct[];
    },
  });

  return { productData, isLoading, error };
}
