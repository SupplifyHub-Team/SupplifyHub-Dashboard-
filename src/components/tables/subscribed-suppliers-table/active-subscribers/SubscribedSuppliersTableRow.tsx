import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

export default function SubscribedSuppliersTableRow({
  subscriber,
}: {
  subscriber: ISubscribedSuppliers;
}) {
  return (
    <TableRow>
      <TableCell>
        <span>{subscriber.companyName}</span>
      </TableCell>
      <TableCell>
        <span>{subscriber.email}</span>
      </TableCell>
      <TableCell>
        <span>{subscriber.planName}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(subscriber.startPlanDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(subscriber.endPlanDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(subscriber.joinDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{subscriber.ordersCompleted}</span>
      </TableCell>
    </TableRow>
  );
}
