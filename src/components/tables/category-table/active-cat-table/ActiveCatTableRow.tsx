import { TableCell, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";

export default function ActiveCatTableRow({
  activeCat,
}: {
  activeCat: IActiveCategory;
}) {
  return (
    <TableRow>
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
        <span>
          <Trash color="#f7021b" className="w-6 h-6 cursor-pointer" />
        </span>
      </TableCell>
    </TableRow>
  );
}
