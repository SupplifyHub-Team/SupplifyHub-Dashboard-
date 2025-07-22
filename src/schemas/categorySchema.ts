import z from "zod";

export const categorySchema = z.object({
    categoryName: z.string().min(3, {
        message: "اسم القسم يجب ان يكون علي الاقل 3 حروف",
    }),
});

export type categorySchema = z.infer<typeof categorySchema>;