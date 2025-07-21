import FormSelect from "@/components/forms-fields/FormSelect";
import { Control } from "react-hook-form";

interface FormValues {
  status: string;
  sortColumn: string;
  sortColumnDirection: string;
}

interface SortAndStatusFiltersProps {
  control: Control<FormValues>;
}

export default function SortAndStatusFilters({
  control,
}: SortAndStatusFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
      <FormSelect
        control={control}
        name="status"
        options={[
          { value: "active", label: "نشط" },
          { value: "expired", label: "منتهي" },
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
