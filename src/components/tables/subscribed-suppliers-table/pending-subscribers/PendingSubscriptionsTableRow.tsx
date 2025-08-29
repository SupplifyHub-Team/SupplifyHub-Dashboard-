import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import { format } from "date-fns";
import useAcceptPendingSubscriptions from "@/hooks/subscribers/useAcceptPendingSubscriptions";
import useRejectPendingSubscriptions from "@/hooks/subscribers/useRejectPendingSubscriptions";

export default function PendingSubscribersTableRow({
  subscriptions,
}: {
  subscriptions: IPendingSubscriptions;
}) {
  const { mutate } = useAcceptPendingSubscriptions();
  const { mutate: reject } = useRejectPendingSubscriptions();

  const handleAccept = () => {
    mutate({
      supplierId: subscriptions.supplierId,
      planId: subscriptions.planId,
    });
  };

  const handleReject = () => {
    reject({
      supplierId: subscriptions.supplierId,
      planId: subscriptions.planId,
    });
  };
  return (
    <TableRow>
      <TableCell>
        <span> {subscriptions.supplierName}</span>
      </TableCell>
      <TableCell>
        <span> {subscriptions.email} </span>
      </TableCell>
      <TableCell>
        <span> {subscriptions.planName} </span>
      </TableCell>
      <TableCell>
        <span> {subscriptions.duration} </span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(subscriptions.createdAt), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(subscriptions.joinDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>
          <div className="flex items-center gap-2">
            <CircleCheck
              onClick={handleAccept}
              color="#02f71f"
              className="w-6 h-6 cursor-pointer"
            />
            <CircleX
              onClick={handleReject}
              color="#f7021b"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </span>
      </TableCell>
    </TableRow>
  );
}
