import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SearchFilters from "./SearchFilters";
import SortAndStatusFilters from "./SortAndStatusFilters";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import { subscribedSuppliersFiltersSchema } from "@/schemas/filtersScehmas";
import useSearchForm from "@/hooks/useSearchForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultFilters: subscribedSuppliersFiltersSchema = {
  search: "",
  planName: "",
  status: "",
  sortColumn: "CreatedAt",
  sortColumnDirection: "Desc",
};

export default function SubscribedSuppliersFilters() {
  const form = useForm<subscribedSuppliersFiltersSchema>({
    defaultValues: defaultFilters,
    mode: "onChange",
    resolver: zodResolver(subscribedSuppliersFiltersSchema),
  });

  useSearchForm({ form, baseKey: SUBSCRIBED_SUPPLIERS_TABLE_NAME });

  return (
    <Form {...form}>
      <form className="flex flex-wrap items-center gap-4 justify-between sm:flex-row flex-col">
        <SearchFilters />
        <SortAndStatusFilters />
      </form>
      <Button
        type="button"
        variant="link"
        className="mt-4"
        onClick={() => form.reset(defaultFilters)}>
        الغي الفلاتر
      </Button>
    </Form>
  );
}
