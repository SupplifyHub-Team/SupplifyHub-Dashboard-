import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCategorySchema, addCategorySchema } from "@/schemas/categorySchema";
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
import usePostCategory from "@/hooks/categories/usePostCategory";
import { Input } from "../ui/input";

interface AddCategoryFormProps {
  onCloseDialog: () => void;
}

export default function AddCategoryForm({
  onCloseDialog,
}: AddCategoryFormProps) {
  const { mutate: addCategory, isPending: isAdding } = usePostCategory();

  const form = useForm<AddCategorySchema>({
    resolver: zodResolver(addCategorySchema), 
    defaultValues: {
      categoryName: "",
      categoryImage: undefined,
    },
  });

  function onSubmit(data: AddCategorySchema) {
    if (!form.formState.isDirty) {
      onCloseDialog();
      return;
    }

    const formData = new FormData();
    formData.append("CategoryName", data.categoryName);
    if (data.categoryImage) {
      formData.append("Photo", data.categoryImage);
    }

    addCategory(formData, {
      onSuccess: () => {
        form.reset();
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
        <Button type="submit" disabled={!form.formState.isDirty || isAdding}>
          {isAdding ? <Spinner /> : "إضافة"}
        </Button>
      </form>
    </Form>
  );
}
