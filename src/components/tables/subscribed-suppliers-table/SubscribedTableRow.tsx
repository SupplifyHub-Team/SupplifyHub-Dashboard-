import { TableCell, TableRow } from "@/components/ui/table";

export default function SubscribedTableRow({
  subscriber,
}: {
  subscriber: SubscribedSuppliers;
}) {
  return (
    <TableRow >
      <TableCell>
        <span> {subscriber.name}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.email}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.subscribePlan}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.subscriptionStart}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.subscriptionEnd}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.joinDate}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.ordersCompleted}</span>
      </TableCell>
      <TableCell>
        <span> {subscriber.planStatus}</span>
      </TableCell>
    </TableRow>
  );
}
