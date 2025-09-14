"use client";

import FormDropzone from "@/components/forms-fields/FormDropzone";
import FormInput from "@/components/forms-fields/FormInput";
import FormTextArea from "@/components/forms-fields/FormTextArea";
import FormErrorBox from "@/components/forms-fields/FormErrorBox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/Spinner";
import { ApiError, setFormErrors } from "@/utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { editBlogSchema } from "@/schemas/blogSchema";
import usePatchBlogPost from "@/hooks/blogs/usePatchBlogPost";
import useGetBlogPost from "@/hooks/blogs/useGetBlogPost";
import { Link } from "react-router";
import { getDirtyFields } from "@/lib/utils";

const defaultValues: editBlogSchema = {
  Title: "",
  Content: "",
  Excerpt: "",
  CoverImageFile: undefined,
  PdfFile: undefined,
};

export default function EditBlogForm({ blog }: { blog: IBlogCard }) {
  const { data, isPending: blogPostLoading } = useGetBlogPost(blog.slug);
  const { mutate: postBlog, isPending: isUpdating } = usePatchBlogPost(blog);

  const form = useForm<editBlogSchema>({
    resolver: zodResolver(editBlogSchema),
    defaultValues,
  });

  const onSubmit = (data: editBlogSchema) => {
    const onlyDirty = getDirtyFields(data, form.formState.dirtyFields);

    postBlog(onlyDirty, {
      onError: (error: ApiError) => {
        setFormErrors(form, error);
      },
    });
  };

  useEffect(() => {
    if (data) {
      form.reset({
        Title: blog.title,
        Content: data.data.content,
        Excerpt: blog.excerpt,
        CoverImageFile: undefined,
        PdfFile: undefined,
      });
    }
  }, [data, form, blog]);

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
        <fieldset disabled={isUpdating} className="space-y-6 p-6">
          {data?.data.coverImageUrl && (
            <img
              src={data.data.coverImageUrl}
              alt="Cover Image"
              className="w-96 object-contain rounded-lg"
            />
          )}
          <FormDropzone<editBlogSchema>
            name="CoverImageFile"
            accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
            maxFiles={1}
            multiple={false}
            label="صورة الغلاف"
            description="اختر صورة غلاف للمدونة"
          />
          <div className="grid md:grid-cols-2 gap-6 my-3">
            <FormInput<editBlogSchema>
              control={form.control}
              name="Title"
              label="العنوان"
              placeholder="مثلا: كيف تبدأ مشروعك الخاص"
            />
            <FormInput<editBlogSchema>
              control={form.control}
              name="Excerpt"
              label="المختصر"
              placeholder=" هذا المختصر يظهر في بطاقة المدونة في صفحة المدونات"
            />
          </div>

          <FormTextArea<editBlogSchema>
            name="Content"
            label="المحتوى"
            placeholder="أدخل محتوى المدونة هنا"
            control={form.control}
          />

          <FormDropzone<editBlogSchema>
            name="PdfFile"
            accept={{ "application/pdf": [".pdf"] }}
            maxFiles={1}
            multiple={false}
            label="ملف PDF"
            description="ارفع ملف PDF للمدونة (اختياري)"
          />
          {data?.data.pdfUrl && (
            <Link
              to={data.data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer">
              <Button type="button">عرض ملف PDF</Button>
            </Link>
          )}
          <FormErrorBox errors={formErrors} />
          <Button
            type="submit"
            size="lg"
            className="w-full py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all mt-4"
            disabled={isUpdating || !form.formState.isDirty}>
            {isUpdating ? (
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
