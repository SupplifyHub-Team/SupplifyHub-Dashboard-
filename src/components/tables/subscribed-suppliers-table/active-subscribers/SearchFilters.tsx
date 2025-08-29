import FormInput from "@/components/forms-fields/FormInput";
import { Search } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function SearchFilters() {
  const form = useFormContext();

  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
      <FormInput
        control={form.control}
        name="search"
        placeholder="ابحث عن مستورد..."
        Icon={<Search className="size-4 text-white" />}
        className="text-sm md:text-base"
      />
    </div>
  );
}
