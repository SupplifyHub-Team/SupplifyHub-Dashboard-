import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import { useSyncFormToSearchParams } from "@/hooks/useSyncFormToSearchParams";
import FormInfiniteSelect from "@/components/forms-fields/FormInfiniteSelect";
import { getCategories } from "@/services/categoriesServices";

const formSchema = z.object({
  role: z.string().optional(),
  category: z.string().optional(),
  sortBy: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>;

const defaultValues = {
  role: "",
  category: "",
  sortBy: "",
};

export default function UsersFilters() {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useSyncFormToSearchParams<formSchemaType>(form, "users");

  function onSubmit(values: formSchemaType) {
    console.log("Form submitted with values:", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<formSchemaType>
            control={form.control}
            name="role"
            options={[
              { label: " الموردين", value: "Suppliers" },
              { label: " العملاء", value: "Clients" },
              { label: " الباحثون عن عمل", value: "JobSeeker" },
            ]}
            placeholder="اختر دورا ..."
            className="min-w-44"
          />
          {/* <FormInfiniteSelect<formSchemaType, IActiveCategory>
            control={form.control}
            name="category"
            queryKey={["categories"]}
            fetchFn={(pageNumber) => getCategories({ page: pageNumber })}
            getOptionLabel={(item) => item.name}
            getOptionValue={(item) => item.id}
            placeholder="اختر فئة..."
            className="min-w-44"
          /> */}
          <FormSelect<formSchemaType>
            control={form.control}
            name="sortBy"
            options={[
              { label: "الأحدث", value: "CreatedAt_Desc" },
              { label: "الأقدم", value: "CreatedAt_Asc" },
            ]}
            placeholder="رتب حسب..."
            className="min-w-44"
          />
        </div>
        <Button
          variant="link"
          type="button"
          className="h-10"
          onClick={() => {
            form.reset(defaultValues);
          }}>
          ألغي الفلاتر
        </Button>
      </form>
    </Form>
  );
}
