import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SearchFilters from "./SearchFilters";
import SortAndStatusFilters from "./SortAndStatusFilters";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import { useFilterForm } from "@/hooks/useFilterForm";
import { subscribedSuppliersFiltersSchema } from "@/schemas/filtersScehmas";

const defaultFilters: subscribedSuppliersFiltersSchema = {
  search: "",
  planName: "",
  status: "",
  sortColumn: "CreatedAt",
  sortColumnDirection: "Desc",
};

export default function SubscribedSuppliersFilters() {
  const { form, resetFilters } =
    useFilterForm<subscribedSuppliersFiltersSchema>({
      schema: subscribedSuppliersFiltersSchema,
      defaultValues: defaultFilters,
      namespace: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
    });

  return (
    <Form {...form}>
      <form className="flex items-center gap-4 justify-between sm:flex-row flex-col">
        <SearchFilters />
        <SortAndStatusFilters />
      </form>
      <Button
        type="button"
        variant="link"
        className="mt-4"
        onClick={resetFilters}>
        الغي الفلاتر
      </Button>
    </Form>
  );
}
