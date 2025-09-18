import { SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <AppSidebar side="right" />
      <div className="overflow-hidden  p-2 sm:p-6 flex-1  ">
        <div className="flex items-center justify-between mb-4 text-white">
          <SidebarTrigger />
        </div>
        <Outlet />
      </div>
    </>
  );
}
