import z from "zod";

export const blogSchema = z.object({
  Title: z.string().min(1, "العنوان مطلوب"),
  Content: z.string().min(20, "المحتوى يجب الا يقل عن 20 حرف"),
  Excerpt: z
    .string()
    .min(5, "المختصر يجب الا يقل عن 5 أحرف")
    .max(500, "اقصى طول 500 حرف"),
  CoverImageFile: z.any(),
  PdfFile: z.instanceof(File).optional(),
});

export const editBlogSchema = blogSchema.partial();

export type blogSchema = z.infer<typeof blogSchema>;
export type editBlogSchema = z.infer<typeof editBlogSchema>;
