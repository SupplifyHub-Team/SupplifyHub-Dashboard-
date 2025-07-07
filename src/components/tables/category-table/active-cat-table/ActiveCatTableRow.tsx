import { TableCell, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";

export default function ActiveCatTableRow({
  activeCat,
}: {
  activeCat: ActiveCatType;
}) {
  return (
    <TableRow>
      <TableCell>
        <span> {activeCat.name}</span>
      </TableCell>
      <TableCell>
        <span> {activeCat.supplierNumber}</span>
      </TableCell>
      <TableCell>
        <span> {activeCat.clientNumber}</span>
      </TableCell>
      <TableCell>
        <span> 
        <Trash color="#f7021b" className="w-6 h-6 cursor-pointer" />
        </span>
      </TableCell>
    </TableRow>
  );
}
