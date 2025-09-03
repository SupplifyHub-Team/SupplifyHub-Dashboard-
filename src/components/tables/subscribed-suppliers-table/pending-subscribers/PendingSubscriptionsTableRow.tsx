import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import { format } from "date-fns";
import useAcceptPendingSubscriptions from "@/hooks/subscribers/useAcceptPendingSubscriptions";
import useRejectPendingSubscriptions from "@/hooks/subscribers/useRejectPendingSubscriptions";
import { Button } from "@/components/ui/button";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { AreYouSure } from "@/components/AreYouSure";

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
        <div className="flex items-center">
          <AreYouSure
            onAccept={handleAccept}
            TriggerButton={
              <Button size="icon" variant="link" className="hover:scale-105">
                <CircleCheck
                  onClick={handleAccept}
                  color="#16a34a"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
              </Button>
            }
          />
          <AreYouSureDeleteing
            onAccept={handleReject}
            TriggerButton={
              <Button size="icon" variant="link" className="hover:scale-105">
                <CircleX
                  onClick={handleReject}
                  color="#dc2626"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
              </Button>
            }
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
