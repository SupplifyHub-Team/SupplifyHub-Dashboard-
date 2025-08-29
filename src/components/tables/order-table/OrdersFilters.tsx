import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import FormInfiniteSelect from "@/components/forms-fields/FormInfiniteSelect";
import { getCategories } from "@/services/categoriesServices";
import { ORDERS_TABLE_NAME } from "@/lib/constants";
import { useFilterForm } from "@/hooks/useFilterForm";
import { ordersFiltersSchema } from "@/schemas/filtersScehmas";
import FormInput from "@/components/forms-fields/FormInput";
import { Search } from "lucide-react";

const defaultValues = {
  status: "",
  category: "",
  sortColumn: "",
  sortColumnDirection: "",
  search: "",
};

export default function OrdersFilters() {
  const { form, resetFilters } = useFilterForm<ordersFiltersSchema>({
    schema: ordersFiltersSchema,
    defaultValues,
    namespace: ORDERS_TABLE_NAME,
  });

  return (
    <Form {...form}>
      <form className="flex gap-4 items-center justify-between w-full flex-wrap">
        <div>
          <FormInput
            control={form.control}
            name="search"
            placeholder="ابحث عن الطلبات..."
            Icon={<Search className="size-4 text-white" />}
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<ordersFiltersSchema>
            control={form.control}
            name="status"
            options={[
              { label: "نشط", value: "Active" },
              { label: "جاري التفاوض", value: "InProgress" },
              { label: "مكتمل", value: "Completed" },
              { label: "ملغي", value: "Canceled" },
            ]}
            placeholder="اختر حالة الطلب "
            className="min-w-44"
          />
          <FormInfiniteSelect<ordersFiltersSchema, IActiveCategory>
            control={form.control}
            name="category"
            fetchFn={(pageNumber) => getCategories({ page: pageNumber })}
            queryKey={["active-categories"]}
            getOptionLabel={(option) => option.categoryName}
            getOptionValue={(option) => option.categoryId}
            placeholder="اختر الفئة"
          />
          <FormSelect<ordersFiltersSchema>
            control={form.control}
            name="sortColumn"
            options={[
              { label: "تاريخ الإنشاء", value: "CreatedAt" },
              { label: "موعد التسليم", value: "Deadline" },
            ]}
            placeholder="رتب حسب"
            className="min-w-44"
          />
          <FormSelect<ordersFiltersSchema>
            control={form.control}
            name="sortColumnDirection"
            options={[
              { label: "الأحدث", value: "Desc" },
              { label: "الأقدم", value: "Asc" },
            ]}
            placeholder="الترتيب"
            className="min-w-44"
          />

          <Button
            variant="link"
            type="button"
            className="h-10"
            onClick={resetFilters}
          >
            الغى الفلاتر
          </Button>
        </div>
      </form>
    </Form>
  );
}
