import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://90.156.169.122:3003/auth/google/login";
  };

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    console.log(token, "KELDI");
    if (token) {
      localStorage.setItem("accessToken", token);
      window.location.href = "http://90.156.169.122:5173";
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
