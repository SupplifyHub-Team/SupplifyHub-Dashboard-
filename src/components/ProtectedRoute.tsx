import useAuth from "@/store/authStore";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ProtectedRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) return;
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <Outlet />;
}
