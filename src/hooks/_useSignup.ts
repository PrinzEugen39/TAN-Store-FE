import { SignUpValue } from "@/app/SignIn-SignUp/SignUpComponent";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import API from "./API";
import toast from "react-hot-toast";

interface ErrorResponse {
  message: string;
}

export function useSignUp() {
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
      console.log(result);
      const successMessage = result.message || "Sign up successful";
      toast.success(successMessage);
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      console.log(err.response?.data?.message);
      const errorMessage = err.response?.data?.message || "An error occurred"; // Provide a default message if 'message' is undefined

      toast.error(errorMessage);
    },
  });

  return { userSignUp, isPending, isSuccess };
}
