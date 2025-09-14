import RouterProvider from "@/components/RouterProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      {children}
      <RouterProvider />
    </ReactQueryProvider>
  );
}
