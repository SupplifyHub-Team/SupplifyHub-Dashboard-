import { deleteBlogPost } from "@/services/BlogsService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteBlog() {
  return useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: (data) => {
      toast.success(data.data.message || "Blog post deleted successfully");
    },
  });
}
