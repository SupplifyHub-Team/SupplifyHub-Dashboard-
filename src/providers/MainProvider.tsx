import RouterProvider from "@/components/RouterProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <SidebarProvider>
        {children}
        <RouterProvider />
      </SidebarProvider>
    </ReactQueryProvider>
  );
}
