import z from "zod";

export const addCategorySchema = z.object({
  categoryName: z.string().min(3, {
    message: "اسم القسم يجب ان يكون علي الاقل 3 حروف",
  }),
  categoryImage: z
    .instanceof(File, {
      message: "يجب أن تكون الصورة من نوع ملف",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "حجم الصورة يجب أن يكون أقل من 5 ميجابايت",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
          file.type
        ),
      {
        message: "نوع الصورة يجب أن يكون JPEG أو PNG أو WebP",
      }
    ), 
});

export const updateCategorySchema = addCategorySchema.extend({
  categoryImage: addCategorySchema.shape.categoryImage.optional(),
});

export type AddCategorySchema = z.infer<typeof addCategorySchema>;
export type UpdateCategorySchema = z.infer<typeof updateCategorySchema>;