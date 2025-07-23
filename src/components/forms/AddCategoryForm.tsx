import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/schemas/categorySchema";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import FormInput from "../forms-fields/FormInput";
import { useCategoryForm } from "@/store/categoryFormStore";
import usePostCategory from "@/hooks/categories/usePostCategory";
import { useEffect } from "react";

interface AddCategoryFormProps {
  onCloseDialog: () => void;
}

export default function AddCategoryForm({
  onCloseDialog,
}: AddCategoryFormProps) {
  const { formData, setFormData, clearData } = useCategoryForm();
  const { mutate, isPending } = usePostCategory();

  const form = useForm<categorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: formData?.categoryName || "",
    },
  });

  useEffect(() => {
    const subscription = form.watch((data) => {
      if (data) {
        setFormData(data as categorySchema);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  function onSubmit(data: categorySchema) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        clearData();
        onCloseDialog();
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <FormInput<categorySchema>
            control={form.control}
            name="categoryName"
            type="text"
            placeholder="اسم الفئة"
            className="min-w-44"
          />
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "اضافة"}
        </Button>
      </form>
    </Form>
  );
}
