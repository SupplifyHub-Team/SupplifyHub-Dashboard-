import { setRouterPush } from "@/lib/router";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RouterProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    setRouterPush(navigate);
  }, [navigate]);

  return null;
}
