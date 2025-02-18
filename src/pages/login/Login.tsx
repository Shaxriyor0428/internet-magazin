import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
      toast.success("Siz ro'yxatdan muvaffaqiyatli o'tdingiz! ", {
        position: "top-right",
      });
      window.location.href = "https://internet-magazin-mu.vercel.app";
    }
  }, [token]);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: ILogin) => {
    console.log("User Data:", data);
    toast.success("Logged in successfully!", { position: "top-right" });
  };

  const handleOAuthLogin = (provider: "google" | "github" | "facebook") => {
    const urls = {
      google: "https://shaxriyorbek.uz/auth/google/login",
      github: "https://shaxriyorbek.uz/auth/github/login",
      facebook: "http://localhost:3003/auth/facebook/login",
    };
    window.location.href = urls[provider];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border rounded"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Or login with:</p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => handleOAuthLogin("google")}
              className="bg-red-500 text-white p-2 rounded flex items-center justify-center"
            >
              Google
            </button>
            <button
              onClick={() => handleOAuthLogin("github")}
              className="bg-gray-800 text-white p-2 rounded flex items-center justify-center"
            >
              GitHub
            </button>
            <button
              onClick={() => handleOAuthLogin("facebook")}
              className="bg-blue-700 text-white p-2 rounded flex items-center justify-center col-span-2"
            >
              Facebook
            </button>
          </div>
        </div>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="#" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
