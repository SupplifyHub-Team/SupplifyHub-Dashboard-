import { TableCell, TableRow } from "@/components/ui/table";
import useAcceptPendingAdvs from "@/hooks/advs/useAcceptPendingAdvs";
import useRejectPendingCategory from "@/hooks/categories/useRejectPendingCategory";
import { format } from "date-fns";
import { CircleCheck, CircleX } from "lucide-react";

const PendingAdvsRow = ({ pendingAdv }: { pendingAdv: IPendingAdv }) => {
  const { mutate } = useAcceptPendingAdvs();
  const { mutate: reject } = useRejectPendingCategory();

  const handleAccept = () => {
    mutate(pendingAdv.id);
  };

  const handleReject = () => {
    reject(pendingAdv.id);
  };

  return (
    <TableRow>
      <TableCell>
        <span>{pendingAdv.title}</span>
      </TableCell>
      <TableCell>
        <span className="flex items-center">
          {pendingAdv.imagUrl ? (
            <img
              src={pendingAdv.imagUrl}
              alt={pendingAdv.imagUrl + " Logo"}
              className=" h-16 object-cover"
            />
          ) : (
            <span>لا يوجد لوجو</span>
          )}
        </span>
      </TableCell>
      <TableCell>
        <span>{pendingAdv.createdBy}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(pendingAdv.startDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(pendingAdv.endDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(pendingAdv.createdAt), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(pendingAdv.updatedAt), "yyyy-MM-dd")}</span>
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

export default PendingAdvsRow;
