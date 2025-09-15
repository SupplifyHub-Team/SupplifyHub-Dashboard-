import { queryClient } from "@/lib/react-query/queryClient";
import { editBlogSchema } from "@/schemas/blogSchema";
import { patchBlogPost } from "@/services/BlogsService";
import { jsonToFormData } from "@/utils/jsonToFormData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePatchBlogPost(blog: IBlogCard) {
  return useMutation({
    mutationFn: (data: editBlogSchema) => {
      return patchBlogPost(jsonToFormData(data), blog.id);
    },
    onSuccess: (data) => {
      toast.success(data.data.message || "تم تحديث المدونة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["blogs", blog.slug] });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
