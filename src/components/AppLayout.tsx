import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <SidebarProvider >
      <AppSidebar side="right" />
      <div >
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
