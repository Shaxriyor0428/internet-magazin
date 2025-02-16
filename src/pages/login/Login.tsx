import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "https://shaxriyorbek.uz/auth/google/login";
  };

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    // console.log(token, "KELDI");
    if (token) {
      localStorage.setItem("accessToken", token);
      toast.success("Siz ro'yxatdan muvaffaqiyatli o'tdingiz! ", {
        position: "top-right",
      });
      window.location.href = "https://internet-magazin-mu.vercel.app";
    }
  }, []);

  return (
    <div className=" min-h-screen">
      <button
        className="py-1 px-4 rounded-lg bg-blue-500 text-white"
        onClick={handleGoogleLogin}
      >
        Google orqali ro‘yxatdan o‘tish
      </button>
    </div>
  );
};

export default Login;
