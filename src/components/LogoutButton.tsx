import { LogOut } from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";
import useAuth from "@/store/authStore";
import { toast } from "sonner";
export default function LogoutButton() {

  const { logout } = useAuth();

  async function handleLogout() {
    logout();
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
