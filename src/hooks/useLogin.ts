import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "@/store/authStore";
import { loginService } from "@/services/authService";
import Cookies from "js-cookie";
export default function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const mutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      navigate("/");
      Cookies.set("token", data.token);
      login(data);
      toast.success("تم تسجيل الدخول بنجاح");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return mutation;
}
