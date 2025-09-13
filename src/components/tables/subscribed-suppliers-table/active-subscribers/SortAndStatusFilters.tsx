import FormSelect from "@/components/forms-fields/FormSelect";
import FormAsyncSelect from "@/components/forms-fields/FormAsyncSelect";
import { getPlans } from "@/services/plansServices";
import { useFormContext } from "react-hook-form";
import { subscribedSuppliersFiltersSchema } from "@/schemas/filtersScehmas";

export default function SortAndStatusFilters() {
  const form = useFormContext<subscribedSuppliersFiltersSchema>();
  return (
    <div className="flex gap-2 flex-wrap  md:gap-4">
      <FormAsyncSelect<subscribedSuppliersFiltersSchema, IPlan>
        control={form.control}
        name="planName"
        queryKey={["plans"]}
        fetchFn={getPlans}
        getOptionLabel={(item) => item.planName}
        getOptionValue={(item) => item.planName}
        placeholder="اختر خطة"
      />
      <FormSelect
        control={form.control}
        name="status"
        options={[
          { value: "Pending", label: "قيد الانتظار" },
          { value: "Completed", label: "مكتمل" },
          { value: "Failed", label: "فشل" },
        ]}
        placeholder="حالة الاشتراك"
      />
      <FormSelect
        control={form.control}
        name="sortColumn"
        options={[{ value: "CreatedAt", label: "تاريخ الانضمام" }]}
        placeholder="ترتيب حسب"
      />
      <FormSelect
        control={form.control}
        name="sortColumnDirection"
        options={[
          { value: "Asc", label: "تصاعدي" },
          { value: "Desc", label: "تنازلي" },
        ]}
        placeholder="ترتيب حسب"
      />
    </div>
  );
}
