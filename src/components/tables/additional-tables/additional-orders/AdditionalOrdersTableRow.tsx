import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";

import usePatchAdditionalOrders from "@/hooks/additionals/orders/usePatchAdditionalOrders";
import { AreYouSure } from "@/components/AreYouSure";
import { Button } from "@/components/ui/button";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";

export default function AdditionalOrdersTableRow({
  additionalOrders,
}: {
  additionalOrders: IAdditionalOrders;
}) {
  const { mutate } = usePatchAdditionalOrders();

  const handleAccept = () => {
    mutate({ requestId: additionalOrders.requestId, operationType: "Accept" });
  };

  const handleReject = () => {
    mutate({ requestId: additionalOrders.requestId, operationType: "Cancel" });
  };

  return (
    <TableRow className=" transition-colors">
      <TableCell>{additionalOrders.name}</TableCell>
      <TableCell>{additionalOrders.email}</TableCell>
      <TableCell>{additionalOrders.phone}</TableCell>
      <TableCell>{additionalOrders.amount}</TableCell>
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
