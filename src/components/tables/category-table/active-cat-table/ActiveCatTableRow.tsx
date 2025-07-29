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
        <span className="flex items-center">
          {activeCat.imageURL ? (
            <img
              src={activeCat.imageURL}
              alt={activeCat.imageURL + " Logo"}
              className="w-16 h-16 object-contain rounded-full"
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
        <span>
          <Trash color="#f7021b" className="w-6 h-6 cursor-pointer" />
        </span>
      </TableCell>
    </TableRow>
  );
}
