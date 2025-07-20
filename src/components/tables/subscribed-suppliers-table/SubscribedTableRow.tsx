import { TableCell, TableRow } from "@/components/ui/table";

export default function SubscribedTableRow({
  subscriber,
}: {
  subscriber: ISubscribedSuppliers;
}) {
  return (
    <TableRow >
      <TableCell>
        <span> {subscriber.companyName}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.email}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.planName}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.startPlanDate}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.endPlanDate}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.joinDate}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.ordersCompleted}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.paymentStatus}</span>
      </TableCell>
    </TableRow>
  );
}
