import { LogOut } from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";
import useAuth from "@/store/authStore";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Cookies from "js-cookie";
export default function LogoutButton() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  async function handleLogout() {
    logout();
    Cookies.remove("token");
    navigate("/login");
    toast.success("تم تسجيل الخروج بنجاح");
  }
  return (
    <SidebarMenuButton
      onClick={handleLogout}
      tooltip={"تسجيل الخروج"}
      size="lg">
      <LogOut className="size-4 " />
      <span>تسجيل الخروج</span>
    </SidebarMenuButton>
  );
}
