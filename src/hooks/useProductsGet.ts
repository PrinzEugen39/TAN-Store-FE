import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import API from "./API";

interface Product {
  name: string;
  price: number;
  description: string;
  image: string[];
  qty: number;
  id: string;
}

interface ProductData {
  status: string;
  results: number;
  data: {
    products: Product[];
  };
}

export function useProductsGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const name = searchParams.get("name");

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      const { data } = await API.get(
        name === ""
          ? `/products?page=${page}&limit=${limit}&name=${name}`
          : `/products?page=${page}&limit=${limit}`
      );
      return data as ProductData;
    },
  });

  return { productData, isLoading, error };
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
