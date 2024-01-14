import FormRow from "@/components/FormRow";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSignUp } from "@/hooks/_useSignup";
import { cn } from "@/lib/utils";
import { ArrowRightToLine } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export type SignUpValue = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignInComponent() {
  const navigate = useNavigate();
  const { userSignUp, isPending, isSuccess } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpValue>();

  const onSubmit: SubmitHandler<SignUpValue> = (signupData) => {
    userSignUp(signupData);
    if (isSuccess) navigate("/welcome");
  };
  return (
    <div className="flex items-center justify-center h-screen px-10 sm:w-screen bg-gray-50 sm:px-16 md:px-32 font-inter">
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        <div className="col-span-2 col-start-2">
          <div className="flex flex-col items-center sm:items-end">
            <p className="text-xs text-muted-foreground">
              Already have an account?
            </p>
            <Link
              to="/signin"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "py-7 gap-3 hover:cursor-pointer"
              )}
            >
              <span>Login to</span>
              <ArrowRightToLine />
              <img src="/TANlogo.png" alt="tanlogo" className="w-11 h-11" />
            </Link>
          </div>
        </div>
        <div className="hidden max-w-sm sm:block sm:max-w-lg sm:w-80">
          <img
            src="/girl-work-on-laptop.png"
            alt="girlWork"
            className="w-[360px]"
          />
        </div>
        <div className="relative flex flex-col flex-1 max-w-lg px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-gray-50 to-sky-50 rounded-r-3xl">
          <div className="absolute w-[300px] left-24 top-10 sm:hidden">
            <img
              src="/girl-work-on-laptop.png"
              alt="girlWork"
              className="w-[240px] sm:w-[360px]"
            />
          </div>
          <div className="z-10 pt-28 sm:pt-0">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <FormRow label="Name" error={errors?.name?.message?.toString()}>
                <input
                  autoComplete="on"
                  type="text"
                  id="name"
                  placeholder="your username"
                  className="px-3 py-2 mb-4 border text-grey-darkest"
                  {...register("name", {
                    required: "Please enter a name",
                  })}
                />
              </FormRow>
              <FormRow label="Email" error={errors?.email?.message?.toString()}>
                <input
                  autoComplete="on"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="px-3 py-2 mb-4 border text-grey-darkest"
                  {...register("email", {
                    required: "Please enter an email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </FormRow>
              <FormRow
                label="Password"
                error={errors?.password?.message?.toString()}
              >
                <input
                  autoComplete="on"
                  type="password"
                  id="password"
                  placeholder="********"
                  className="px-3 py-2 mb-4 border text-grey-darkest"
                  {...register("password", {
                    required: "Please enter fill this field",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </FormRow>
              <FormRow
                label="Password confirm"
                error={errors?.passwordConfirm?.message?.toString()}
              >
                <input
                  autoComplete="on"
                  type="password"
                  id="passwordConfirm"
                  placeholder="********"
                  className="px-3 py-2 mb-4 border text-grey-darkest"
                  {...register("passwordConfirm", {
                    required: "Please enter fill this field",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: (val: string) => {
                      if (getValues("password") !== val) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                />
              </FormRow>
              <Button
                disabled={isPending}
                variant={"outline"}
                type="submit"
                className="px-4 py-2 my-4 font-semibold text-md"
              >
                Sign up
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <Button
              variant="link"
              onClick={() => navigate("/welcome", { replace: true })}
            >
              go home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
