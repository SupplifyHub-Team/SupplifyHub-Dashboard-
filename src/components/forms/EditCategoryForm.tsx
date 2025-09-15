import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateCategorySchema,
  UpdateCategorySchema,
} from "@/schemas/categorySchema";
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
import useUpdateCategory from "@/hooks/categories/useUpdateCategory";
import { Input } from "../ui/input";

interface EditCategoryFormProps {
  onCloseDialog: () => void;
  defaultValues: {
    id: string | number;
    categoryName: string;
  };
}

export default function EditCategoryForm({
  onCloseDialog,
  defaultValues,
}: EditCategoryFormProps) {
  const { mutate: updateCategory, isPending: isUpdating } = useUpdateCategory();

  const form = useForm<UpdateCategorySchema>({
    resolver: zodResolver(updateCategorySchema),
    defaultValues: {
      categoryName: defaultValues.categoryName,
      categoryImage: undefined,
    },
  });

  function onSubmit(data: UpdateCategorySchema) {
    const formData = new FormData();
    formData.append("categoryId", defaultValues.id.toString());
    formData.append("CategoryName", data.categoryName);

    if (data.categoryImage) {
      formData.append("Photo", data.categoryImage);
    }

    updateCategory(
      { data: formData },
      {
        onSuccess: () => {
          form.reset();
          onCloseDialog();
        },
      }
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <FormInput
            control={form.control}
            name="categoryName"
            type="text"
            placeholder="اسم الفئة"
            className="min-w-44"
          />
          <FormField
            control={form.control}
            name="categoryImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={
            isUpdating ||
            !form.formState.isValid ||
            !form.formState.isDirty ||
            form.watch("categoryName") === defaultValues.categoryName ||
            !form.watch("categoryImage")
          }
        >
          {isUpdating ? <Spinner /> : "تحديث"}
        </Button>
      </form>
    </Form>
  );
}
