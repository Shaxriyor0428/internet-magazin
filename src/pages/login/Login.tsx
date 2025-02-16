import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

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

  // Login handlerlar
  const handleLogin = (provider: "google" | "facebook" | "github") => {
    const urls = {
      google: "https://shaxriyorbek.uz/auth/google/login",
      github: "https://shaxriyorbek.uz/auth/github/login",
      facebook: "http://localhost:3003/auth/facebook/login",
    };
    window.location.href = urls[provider];
    // console.log(urls[provider]);
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">Kirish</h2>

        <button
          className="w-full py-2 mb-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => handleLogin("google")}
        >
          Google orqali ro‘yxatdan o‘tish
        </button>

        <button
          className="w-full py-2 mb-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => handleLogin("github")}
        >
          GitHub orqali ro‘yxatdan o‘tish
        </button>

        <button
          className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          onClick={() => handleLogin("facebook")}
        >
          Facebook orqali ro‘yxatdan o‘tish
        </button>
      </div>
    </div>
  );
};

export default Login;
