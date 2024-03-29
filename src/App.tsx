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
import { useDispatch, useSelector } from "react-redux";
import API from "./hooks/API";
import { useEffect } from "react";
import { authCheck } from "./redux/reducers/AuthReducers";
import { RootState } from "./redux/store";
import EmailVerify from "./pages/EmailVerify";
import { Toaster } from "react-hot-toast";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  const hasUser = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  async function AUTH_CHECK() {
    try {
      const { data } = await API.get("users/isauth");
      dispatch(authCheck(data.data.user));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (hasUser.id === "") {
      AUTH_CHECK();
    }
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
          <Route path="/:id/verify/:token" element={<EmailVerify />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </QueryClientProvider>
  );
}
