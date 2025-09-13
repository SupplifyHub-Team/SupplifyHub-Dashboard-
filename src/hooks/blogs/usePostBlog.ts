import { blogSchema } from "@/schemas/blogSchema";
import { postBlog } from "@/services/BlogsService";
import { jsonToFormData } from "@/utils/jsonToFormData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostBlog() {
  return useMutation({
    mutationFn: (data: blogSchema) => {
      return postBlog(jsonToFormData(data));
    },
    onSuccess: (data) => {
      toast.success(data.data.message || "تم إنشاء المدونة بنجاح");
    },
  });
}
