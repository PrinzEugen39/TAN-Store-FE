import { useQuery } from "@tanstack/react-query";
import API from "./API";

export function useProductsGet() {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await API.get("/products");
      return data.data.products;
    },
  });

  return { productData, isLoading, error };
}
