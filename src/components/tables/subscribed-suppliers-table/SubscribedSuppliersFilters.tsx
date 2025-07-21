import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTableFilters } from "@/hooks/useTableFilters";
import SearchFilters from "./SearchFilters";
import SortAndStatusFilters from "./SortAndStatusFilters";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
const filterSchema = z.object({
  search: z.string().optional(),
  planName: z.string().optional(),
  status: z.string().optional(),
  sortColumn: z.string(),
  sortColumnDirection: z.enum(["Asc", "Desc"]),
});

export type FilterSchemaType = z.infer<typeof filterSchema>;

const defaultFilters: FilterSchemaType = {
  search: "",
  planName: "",
  status: "",
  sortColumn: "CreatedAt",
  sortColumnDirection: "Desc",
};

export default function SubscribedSuppliersFilters() {
  const { form, resetFilters } = useTableFilters({
    schema: filterSchema,
    defaultValues: defaultFilters,
    tableName: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
  });

  return (
    <Form {...form}>
      <form className="flex items-center gap-4 justify-between sm:flex-row flex-col">
        <SearchFilters control={form.control} />
        <SortAndStatusFilters control={form.control} />
      </form>
      <Button
        type="button"
        variant="outline"
        className="mt-4"
        onClick={resetFilters}>
        إعادة تعيين
      </Button>
    </Form>
  );
}
