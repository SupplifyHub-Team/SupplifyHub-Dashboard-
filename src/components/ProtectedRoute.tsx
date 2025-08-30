import useAuth from "@/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ProtectedRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return <Outlet />;
}
