import { Form } from "@/components/ui/form";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import { ADVS_TABLE_NAME } from "@/lib/constants";
import { useFilterForm } from "@/hooks/useFilterForm";
import { activeAdvsFiltersSchema } from "@/schemas/filtersScehmas";
import FormInput from "@/components/forms-fields/FormInput";
import { Search } from "lucide-react";

const defaultValues: activeAdvsFiltersSchema = {
  search: "",
  advName: "",
  sortColumn: "",
  sortColumnDirection: "",
  endDate: "",
};

export default function AdvertismentsFilters() {
  const { form, resetFilters } = useFilterForm<activeAdvsFiltersSchema>({
    schema: activeAdvsFiltersSchema,
    defaultValues,
    namespace: ADVS_TABLE_NAME,
  });

  return (
    <Form {...form}>
      <form className="flex gap-4 items-center justify-between w-full flex-wrap">
        <div>
          <FormInput
            control={form.control}
            name="search"
            placeholder="ابحث عن الإعلان..."
            Icon={<Search className="size-4 text-white" />}
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <FormSelect<activeAdvsFiltersSchema>
            control={form.control}
            name="sortColumn"
            options={[
              { label: "تاريخ الإنشاء", value: "createdAt" },
              { label: "تاريخ الانتهاء", value: "endDate" },
            ]}
            placeholder="رتب حسب"
            className="min-w-44"
          />

          <FormSelect<activeAdvsFiltersSchema>
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
            الغي الفلاتر
          </Button>
        </div>
      </form>
    </Form>
  );
}
