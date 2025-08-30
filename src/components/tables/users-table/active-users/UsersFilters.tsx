import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import FormInfiniteSelect from "@/components/forms-fields/FormInfiniteSelect";
import { getCategories } from "@/services/categoriesServices";
import { USERS_TABLE_NAME } from "@/lib/constants";
import FormInput from "@/components/forms-fields/FormInput";
import { Search } from "lucide-react";
import { useFilterForm } from "@/hooks/useFilterForm";
import { userFiltersSchema } from "@/schemas/filtersScehmas";
import FormInfiniteCombobox from "@/components/forms-fields/FormInfiniteCombobox";

const defaultFilters: userFiltersSchema = {
  search: "",
  sortBy: "Desc",
  category: "",
  role: "",
  isActive: "",
};

export default function UsersFilters() {
  const { form, resetFilters } = useFilterForm<userFiltersSchema>({
    schema: userFiltersSchema,
    defaultValues: defaultFilters,
    namespace: USERS_TABLE_NAME,
  });

  return (
    <Form {...form}>
      <form className="flex gap-4 items-center justify-between w-full flex-wrap">
        <div className="flex gap-2 items-center">
          <FormInput
            control={form.control}
            name="search"
            placeholder="ابحث عن مستخدم..."
            Icon={<Search className="size-4 text-white" color="#ffff" />}
            className="text-sm md:text-base placeholder:text-xs"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <FormSelect<userFiltersSchema>
            control={form.control}
            name="role"
            options={[
              { label: " الموردين", value: "Suppliers" },
              { label: " العملاء", value: "Clients" },
            ]}
            placeholder="اختر دورا ..."
            className="min-w-44"
          />
          <FormInfiniteCombobox<userFiltersSchema, IActiveCategory>
            name="category"
            queryKey={["categories"]}
            fetchFn={(pageNumber) => getCategories({ page: pageNumber })}
            getOptionLabel={(item) => item.categoryName}
            getOptionValue={(item) => item.categoryId}
            placeholder="اختر فئة..."
            className="min-w-44 text-white"
          />
          <FormSelect<userFiltersSchema>
            control={form.control}
            name="sortBy"
            options={[
              { label: "الأحدث", value: "Desc" },
              { label: "الأقدم", value: "Asc" },
            ]}
            placeholder="رتب حسب"
            className="min-w-44"
          />
        </div>
      </form>
      <Button
        variant="link"
        type="button"
        className="h-10"
        onClick={resetFilters}>
        ألغي الفلاتر
      </Button>
    </Form>
  );
}
