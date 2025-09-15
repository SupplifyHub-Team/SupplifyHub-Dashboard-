import { getBlogs } from "@/services/BlogsService";
import { useQuery } from "@tanstack/react-query";

export default function useGetBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });
}
