import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSyncFormToSearchParams } from "@/hooks/useSyncFormToSearchParams";
import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
// form schema
const formSchema = z.object({
  status: z.string().optional(),
  category: z.string().optional(),
  sortBy: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const defaultValues = {
  status: "",
  category: "",
  sortBy: "",
};

export default function OrdersFilters() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useSyncFormToSearchParams<FormSchemaType>(form, "orders");

  function onSubmit(values: FormSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<FormSchemaType>
            control={form.control}
            name="status"
            options={[
              { label: "نشط", value: "Active" },
              { label: "جاري التفاوض", value: "InProgress" },
              { label: "مكتمل", value: "Completed" },
              { label: "ملغي", value: "Failed" },
            ]}
            placeholder="اختر حالة الطلب "
            className="min-w-44"
          />
          <FormSelect<FormSchemaType>
            control={form.control}
            name="category"
            options={[
              { label: "Furniture", value: "Furniture" },
              { label: "Electronics", value: "Electronics" },
              { label: "Software", value: "Software" },
            ]}
            placeholder="اختر الفئة "
            className="min-w-44"
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<FormSchemaType>
            control={form.control}
            name="sortBy"
            options={[
              { label: "الأحدث", value: "CreatedAt_Desc" },
              { label: "الأقدم", value: "CreatedAt_Asc" },
            ]}
            placeholder="رتب حسب..."
            className="min-w-44"
          />
          <Button
            variant="link"
            type="button"
            className="h-10"
            onClick={() => {
              form.reset(defaultValues);
            }}
          >
            الغي الفلاتر
          </Button>
        </div>
      </form>
    </Form>
  );
}
