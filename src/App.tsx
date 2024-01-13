import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import ProductList from "./pages/ProductList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import { useDispatch } from "react-redux";
import API from "./hooks/API";
import { useEffect } from "react";
import { authCheck } from "./redux/reducers/AuthReducers";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  const dispatch = useDispatch();
  async function AUTH_CHECK() {
    try {
      const { data } = await API.get("users/isauth");
      console.log(data);
      dispatch(authCheck(data.data.user));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AUTH_CHECK();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/welcome" />} />
            <Route path="/welcome" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
