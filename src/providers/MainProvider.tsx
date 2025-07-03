import ReactQueryProvider from "./ReactQueryProvider";

export default function MainProvider({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
