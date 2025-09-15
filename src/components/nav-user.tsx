"use client";


import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleTrigger } from "./ui/collapsible";
import LogoutButton from "./LogoutButton";

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
                <LogoutButton />
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </DropdownMenu>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
