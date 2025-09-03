import { TableCell, TableRow } from "@/components/ui/table";
import usePatchProduct from "@/hooks/products/usePatchProduct";
import { CircleCheck, CircleX } from "lucide-react";

import { AreYouSure } from "@/components/AreYouSure";
import { Button } from "@/components/ui/button";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";

export default function AdditionalProductTableRow({
  product,
}: {
  product: IProduct;
}) {
  const { mutate } = usePatchProduct();

  const handleAccept = () => {
    mutate({ requestId: product.requestId, operationType: "Accept" });
  };

  const handleReject = () => {
    mutate({ requestId: product.requestId, operationType: "Cancel" });
  };

  return (
    <TableRow className=" transition-colors">
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.email}</TableCell>
      <TableCell>{product.phone}</TableCell>
      <TableCell>{product.amount}</TableCell>
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
