import FormInput from "@/components/forms-fields/FormInput";
import { Search } from "lucide-react";
import { Control } from "react-hook-form";

interface SearchFiltersFormValues {
  search: string;
  planName: string;
}

interface SearchFiltersProps {
  control: Control<SearchFiltersFormValues>;
}

export default function SearchFilters({ control }: SearchFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
      <FormInput
        control={control}
        name="search"
        placeholder="ابحث عن مستورد..."
        Icon={<Search className="size-4"/>}
        className="text-sm md:text-base"
      />
    </div>
  );
}
