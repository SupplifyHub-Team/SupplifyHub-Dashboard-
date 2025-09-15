import { getBlogPost } from "@/services/BlogsService";
import { useQuery } from "@tanstack/react-query";

export default function useGetBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => {
      return getBlogPost({ slug });
    },
  });
}
