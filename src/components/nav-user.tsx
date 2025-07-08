"use client";

import { LogOut } from "lucide-react";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleTrigger } from "./ui/collapsible";

export function NavUser() {
  return (
    <SidebarMenu>
      <Collapsible
        key={"تسجيل الخروج"}
        asChild
        defaultOpen={false}
        className=" group/collapsible"
      >
        <SidebarMenuItem>
          <DropdownMenu>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={"تسجيل الخروج"}
                  size="lg"
               
                >
                  <LogOut className="size-4 " />
                  <span>تسجيل الخروج</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </DropdownMenu>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}

