import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar side="right" />
      <div className="  p-4 sm:p-6 flex-1  ">
        <div className="flex items-center justify-between mb-4 text-white">
          <SidebarTrigger />
        </div>
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
