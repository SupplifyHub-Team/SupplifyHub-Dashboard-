
import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <NavLink to={item.url}>
                  {({ isActive }) => (
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      size="lg"
                      isActive={isActive}
                    >
                      <div className="flex items-center gap-2 w-full">
                        {item.icon && <item.icon className="size-4" />}
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
