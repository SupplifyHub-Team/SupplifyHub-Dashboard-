"use client";

import FormDropzone from "@/components/forms-fields/FormDropzone";
import FormInput from "@/components/forms-fields/FormInput";
import FormTextArea from "@/components/forms-fields/FormTextArea";
import FormErrorBox from "@/components/forms-fields/FormErrorBox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/Spinner";
import usePostBlog from "@/hooks/blogs/usePostBlog";
import { blogSchema } from "@/schemas/blogSchema";
import { ApiError, setFormErrors } from "@/utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

const defaultValues: blogSchema = {
  Title: "",
  Content: "",
  Excerpt: "",
  CoverImageFile: undefined,
  PdfFile: undefined,
};

export default function CreateBlogForm() {
  const { mutate: postBlog, isPending } = usePostBlog();

  const form = useForm<blogSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues,
  });

  const onSubmit = (data: blogSchema) => {
    postBlog(data, {
      onSuccess: () => {
        form.reset();
      },
      onError: (error: ApiError) => {
        setFormErrors(form, error);
      },
    });
  };

  // Collect all form errors
  const formErrors = useMemo(() => {
    const errors: string[] = [];
    const formState = form.formState;

    if (formState.errors) {
      Object.entries(formState.errors).forEach(([field, error]) => {
        if (error?.message) {
          // Convert field names to Arabic
          const fieldNames: Record<string, string> = {
            Title: "العنوان",
            Content: "المحتوى",
            Excerpt: "المختصر",
            CoverImageFile: "صورة الغلاف",
            PdfFile: "ملف PDF",
          };

          const arabicFieldName = fieldNames[field] || field;
          errors.push(`${arabicFieldName}: ${error.message}`);
        }
      });
    }

    return errors;
  }, [form.formState]);

  return (
    <Form {...form}>
      <h3 className="text-center mb-6 text-white font-bold">
        <span className="text-2xl font-semibold">إنشاء مدونة جديدة</span>
      </h3>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={isPending} className="space-y-6 p-6">
          <FormDropzone<blogSchema>
            name="CoverImageFile"
            accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
            maxFiles={1}
            multiple={false}
            label="صورة الغلاف"
            description="اختر صورة غلاف للمدونة"
          />
          <div className="grid md:grid-cols-2 gap-6 my-3">
            <FormInput<blogSchema>
              control={form.control}
              name="Title"
              label="العنوان"
              placeholder="مثلا: كيف تبدأ مشروعك الخاص"
            />
            <FormInput<blogSchema>
              control={form.control}
              name="Excerpt"
              label="المختصر"
              placeholder=" هذا المختصر يظهر في بطاقة المدونة في صفحة المدونات"
            />
          </div>

          <FormTextArea<blogSchema>
            name="Content"
            label="المحتوى"
            placeholder="أدخل محتوى المدونة هنا"
            control={form.control}
          />

          <FormDropzone<blogSchema>
            name="PdfFile"
            accept={{ "application/pdf": [".pdf"] }}
            maxFiles={1}
            multiple={false}
            label="ملف PDF"
            description="ارفع ملف PDF للمدونة (اختياري)"
          />
          <FormErrorBox errors={formErrors} />
          <Button
            type="submit"
            size="lg"
            className="w-full py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all mt-4">
            {isPending ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <Send className="w-5 h-5 ml-2" />
                <span>انشر المدونة</span>
              </>
            )}
          </Button>
        </fieldset>
      </form>
    </Form>
  );
}
