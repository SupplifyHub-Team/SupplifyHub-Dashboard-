import useAuth from "@/store/authStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
export default function MainRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user, navigate]);

  return <Outlet />;
}
