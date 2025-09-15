import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import useAcceptPendingCategory from "@/hooks/categories/useAcceptPendingCategory";
import useRejectPendingCategory from "@/hooks/categories/useRejectPendingCategory";
import { Button } from "@/components/ui/button";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { AreYouSure } from "@/components/AreYouSure";

const PendingCatTableRow = ({
  pendingCat,
}: {
  pendingCat: IPendingCategory;
}) => {
  const { mutate } = useAcceptPendingCategory();
  const { mutate: reject } = useRejectPendingCategory();

  const handleAccept = () => {
    mutate(pendingCat.categoryId);
  };

  const handleReject = () => {
    reject(pendingCat.categoryId);
  };

  return (
    <TableRow>
      <TableCell>
        <span> {pendingCat.categoryName}</span>
      </TableCell>
      <TableCell>
        <span> {pendingCat.userName}</span>
      </TableCell>
      <TableCell>
        <span> {pendingCat.userEmail}</span>
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
};

export default PendingCatTableRow;
