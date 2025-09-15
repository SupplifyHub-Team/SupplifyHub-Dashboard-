import useAuth from "@/store/authStore";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function AuthRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) navigate("/");
    else if (user) navigate("/");
  }, [user, navigate]);

  return <Outlet />;
}
