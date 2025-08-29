import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import useAcceptPendingCategory from "@/hooks/categories/useAcceptPendingCategory";
import useRejectPendingCategory from "@/hooks/categories/useRejectPendingCategory";

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
};

export default PendingCatTableRow;
