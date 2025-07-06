import * as React from "react";
import {
<<<<<<< HEAD
  LayoutDashboard,
  UserCog,
  Layers,
  CircleDollarSign,
  Boxes,
  LogOut,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
=======
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
>>>>>>> origin/table
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
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "إدارة المستخدمين",
      url: "#",
      icon: UserCog,
    },
    {
      title: "إدارة الطلبات",
      url: "#",
      icon: Layers,
    },
    {
      title: "خطط التسعير",
      url: "#",
      icon: CircleDollarSign,
    },
    {
      title: "إدارة الفئات",
      url: "#",
      icon: Boxes,
    },
  ],
<<<<<<< HEAD
=======
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
>>>>>>> origin/table
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon"  {...props}>
      <SidebarHeader>
        <img src="/logo.svg" className="w-12 h-12  rounded-full" alt="logo" />
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
