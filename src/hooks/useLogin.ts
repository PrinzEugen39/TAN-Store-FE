import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "./API";
import { authCheck, setAuth } from "@/redux/reducers/AuthReducers";

export function useLogin() {
  const navigate = useNavigate();
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
      navigate("/");
    },
    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });

  return { userLogin, isPending, isSuccess };
}
