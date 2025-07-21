import FormSelect from "@/components/forms-fields/FormSelect";
import { Control } from "react-hook-form";
import { FilterSchemaType } from "./SubscribedSuppliersFilters";
import FormAsyncSelect from "@/components/forms-fields/FormAsyncSelect";
import { getPlans } from "@/services/plansServices";

interface SortAndStatusFiltersProps {
  control: Control<FilterSchemaType>;
}

export default function SortAndStatusFilters({
  control,
}: SortAndStatusFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
      <FormAsyncSelect<FilterSchemaType, IPlan>
        control={control}
        name="planName"
        queryKey={["plans"]}
        fetchFn={getPlans}
        getOptionLabel={(item) => item.planName}
        getOptionValue={(item) => item.planName}
        placeholder="اختر خطة"
      />
      <FormSelect
        control={control}
        name="status"
        options={[
          { value: "Pending", label: "قيد الانتظار" },
          { value: "Completed", label: "مكتمل" },
          { value: "Failed", label: "فشل" },
        ]}
        placeholder="حالة الاشتراك"
      />
      <FormSelect
        control={control}
        name="sortColumn"
        options={[{ value: "CreatedAt", label: "تاريخ الانضمام" }]}
        placeholder="ترتيب حسب"
      />
      <FormSelect
        control={control}
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
