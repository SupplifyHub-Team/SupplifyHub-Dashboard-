import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  username: z.string().optional(),
  category: z.string().optional(),
  sortBy: z.string().optional(),
});
type formSchema = z.infer<typeof formSchema>;
import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import { useSyncFormToSearchParams } from "@/hooks/useSyncFormToSearchParams";

const defaultValues = {
  username: "",
  category: "",
  sortBy: "",
};

export default function UsersFilters() {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  useSyncFormToSearchParams<formSchema>(form);

  function onSubmit(values: formSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-center justify-between w-full flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<formSchema>
            control={form.control}
            name="username"
            options={[
              { label: "المستخدم 1", value: "user1" },
              { label: "المستخدم 2", value: "user2" },
              { label: "المستخدم 3", value: "user3" },
            ]}
            placeholder="اختر دورا ..."
            className="min-w-44"
          />
          <FormSelect<formSchema>
            control={form.control}
            name="category"
            options={[
              { label: "المستخدمين", value: "users" },
              { label: "المدراء", value: "admins" },
              { label: "المشرفين", value: "supervisors" },
            ]}
            placeholder="اختر فئة ..."
            className="min-w-44"
          />
          <FormSelect<formSchema>
            control={form.control}
            name="sortBy"
            options={[
              { label: "الأحدث", value: "latest" },
              { label: "الأقدم", value: "oldest" },
              { label: "الأكثر نشاطا", value: "most_active" },
            ]}
            placeholder="رتب حسب ..."
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
          الغي الفلاتر
        </Button>
      </form>
    </Form>
  );
}
