import * as React from "react";
import {
  LayoutDashboard,
  UserCog,
  Layers,
  CircleDollarSign,
  Boxes,
  Megaphone,
  ShoppingCart,
  Handshake,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    { title: "لوحة التحكم", url: "/", icon: LayoutDashboard },
    { title: "إدارة المستخدمين", url: "/user-management", icon: UserCog },
    { title: "إدارة الطلبات", url: "/orders", icon: Layers },
    { title: "خطط التسعير", url: "/pricing", icon: CircleDollarSign },
    { title: "إدارة الإعلانات", url: "/advs", icon: Megaphone },
    { title: "إدارة الفئات", url: "/categories", icon: Boxes },
    { title: "إدارة المنتجات", url: "/products", icon: ShoppingCart },
    { title: "إدارة الصفقات", url: "/deals", icon: Handshake },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  collapsible="icon" {...props}>
      <SidebarHeader>
        <img
          src="/Logo.webp"
          className="w-12 h-12 object-contain rounded-full"
          alt="logo"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
