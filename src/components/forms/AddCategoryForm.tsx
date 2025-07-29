import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/schemas/categorySchema";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "../ui/form";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import FormInput from "../forms-fields/FormInput";
import { useCategoryForm } from "@/store/categoryFormStore";
import usePostCategory from "@/hooks/categories/usePostCategory";
import { Input } from "../ui/input";

interface AddCategoryFormProps {
  onCloseDialog: () => void;
}

export default function AddCategoryForm({
  onCloseDialog,
}: AddCategoryFormProps) {
  const { formData, clearData } = useCategoryForm();
  const { mutate, isPending } = usePostCategory();

  const form = useForm<categorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: formData?.categoryName || "",
    },
  });

  function onSubmit(data: categorySchema) {
    const formData = new FormData();

    formData.append("categoryName", data.categoryName);
    formData.append("Photo", data.categoryImage);

    mutate(formData, {
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
          <FormField
            control={form.control}
            name="categoryImage"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onChange(file);
                      }
                    }}
                    className="h-10 py-1 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : "اضافة"}
        </Button>
      </form>
    </Form>
  );
}
