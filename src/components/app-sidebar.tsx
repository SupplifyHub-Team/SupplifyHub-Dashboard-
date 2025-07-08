import * as React from "react";
import {
  LayoutDashboard,
  UserCog,
  Layers,
  CircleDollarSign,
  Boxes,
  

} from "lucide-react";

import { NavMain } from "@/components/nav-main";
 

import { NavUser } from "@/components/nav-user";

  import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "لوحة التحكم",
      url: "/", 
      icon: LayoutDashboard,
    },
    {
      title: "إدارة المستخدمين",
      url: "/user-management",
      icon: UserCog,
    },
    {
      title: "إدارة الطلبات",
      url: "/orders",
      icon: Layers,
    },
    {
      title: "خطط التسعير",
      url: "/pricing",
      icon: CircleDollarSign,
    },
    {
      title: "إدارة الفئات",
      url: "/categories",
      icon: Boxes,
    },
  ],

};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon"  {...props}>
      <SidebarHeader>
        <img src="/logo.svg" className="w-12 h-12 object-contain rounded-full" alt="logo" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
