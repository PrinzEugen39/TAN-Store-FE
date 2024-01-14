import { SignUpValue } from "@/app/SignIn-SignUp/SignUpComponent";
import { useMutation } from "@tanstack/react-query";
import API from "./API";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/reducers/AuthReducers";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export function useSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    mutate: userSignUp,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (signUpData: SignUpValue) => {
      const { data } = await API.post("/users/signup", signUpData);

      return data;
    },
    onSuccess: (result) => {
      dispatch(setAuth(result.data.user));
      navigate("/welcome");
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      console.log(err.response?.data?.message);
    },
  });

  return { userSignUp, isPending, isSuccess };
}
