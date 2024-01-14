import { authCheck, setAuth } from "@/redux/reducers/AuthReducers";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import API from "./API";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export function useLogin() {
  const dispatch = useDispatch();

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
      console.log(result.data.user);
      dispatch(setAuth(result.data.user));
      dispatch(authCheck(result.data.user));
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      console.log(err.response?.data?.message);
    },
  });

  return { userLogin, isPending, isSuccess };
}
