import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen } from "lucide-react";

export default function ActiveCatTableRow({
  activeCat,
  setEditingCategory,
}: {
  activeCat: IActiveCategory;
  setEditingCategory: (cat: IActiveCategory) => void;
}) {
  return (
    <TableRow>
      <TableCell>
        <span className="flex items-center">
          {activeCat.imageURL ? (
            <img
              src={activeCat.imageURL}
              alt={activeCat.imageURL + " Logo"}
              className="h-15 w-15 object-cover rounded-full text-white shadow-sm ring-0.5 ring-gray-900/10"
            />
          ) : (
            <span>لا يوجد لوجو</span>
          )}
        </span>
      </TableCell>
      <TableCell>
        <span> {activeCat.categoryName}</span>
      </TableCell>
      <TableCell>
        <span> {activeCat.numberOfAssociatedSuppliers}</span>
      </TableCell>
      <TableCell>
        <span> {activeCat.numberOfAssociatedClients}</span>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => setEditingCategory(activeCat)}
          variant="default"
          size={"icon"}
          className="flex items-center rounded-b-full"
        >
          <SquarePen className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
