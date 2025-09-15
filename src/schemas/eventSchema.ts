import { z } from "zod";

const isFutureDate = (value: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inputDate = new Date(value);
  return inputDate > today;
};

export const addEventSchema = z.object({
  title: z
    .string()
    .min(2, "العنوان يجب أن يكون علي الأقل حرفين")
    .max(100, "العنوان يجب ألا يزيد عن 100 حرف"),

  endDate: z.string().nonempty("تاريخ النهاية مطلوب").refine(isFutureDate, {
    message: "تاريخ النهاية يجب أن يكون أكبر من اليوم",
  }),

  imageFile: z
    .instanceof(File, {
      message: "الصورة مطلوبة",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "حجم الصورة يجب أن يكون أقل من 5 ميجابايت",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      {
        message: "فقط .jpg, .jpeg, أو .png مسموح بها",
      }
    ),

  targetUrl: z
    .string()
    .url("الرابط غير صالح")
    .optional()
    .or(z.literal("").transform(() => undefined)),
});

export type AddEventSchemaType = z.infer<typeof addEventSchema>;
