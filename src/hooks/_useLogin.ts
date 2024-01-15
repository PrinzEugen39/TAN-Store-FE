import { setAuth } from "@/redux/reducers/AuthReducers";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import API from "./API";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface ErrorResponse {
  message: string;
}

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    mutate: userLogin,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { data } = await API.post("/users/login", { email, password });

      return data;
    },
    onSuccess: (result) => {
      dispatch(setAuth(result.data.user));
      toast("Login Successful", {
        icon: "✌️",
      });
      navigate("/welcome");
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      console.log(err.response?.data?.message);
      const errorMessage = err.response?.data?.message || "An error occurred"; // Provide a default message if 'message' is undefined

      toast.error(errorMessage);
    },
  });

  return { userLogin, isPending, isSuccess };
}
