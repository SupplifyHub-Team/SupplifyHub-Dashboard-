import { TableCell, TableRow } from "@/components/ui/table";
import useAcceptPendingAdvs from "@/hooks/advs/useAcceptPendingAdvs";

import { format } from "date-fns";
import { CircleCheck, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useRejectPendingAdvs from "@/hooks/advs/useRejectPendingAdvs";

const PendingAdvsRow = ({ pendingAdv }: { pendingAdv: IPendingAdv }) => {
  const { mutate } = useAcceptPendingAdvs();
  const { mutate: reject } = useRejectPendingAdvs();

  const handleAccept = () => mutate(pendingAdv.id);
  const handleReject = () => reject(pendingAdv.id);

  return (
    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
      <TableCell className="font-medium text-gray-700">
        {pendingAdv.title || "بدون عنوان"}
      </TableCell>

      <TableCell>
        {pendingAdv.imagUrl ? (
          <img
            src={pendingAdv.imagUrl}
            alt={pendingAdv.title}
            className="h-14 w-20 object-cover rounded-lg shadow-sm border"
          />
        ) : (
          <span className="text-gray-400 text-sm">لا يوجد صورة</span>
        )}
      </TableCell>

      <TableCell className="text-gray-600">{pendingAdv.createdBy}</TableCell>

      <TableCell>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
          {format(new Date(pendingAdv.startDate), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-red-100  text-red-700 hover:bg-red-200">
          {format(new Date(pendingAdv.endDate), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
          {format(new Date(pendingAdv.createdAt), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-orange-200 text-orange-700 hover:bg-orange-300">
          {format(new Date(pendingAdv.updatedAt), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            className="text-green-600 hover:bg-green-50"
            onClick={handleAccept}
          >
            <CircleCheck className="w-4 h-4 mr-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 hover:bg-red-50"
            onClick={handleReject}
          >
            <CircleX className="w-4 h-4 mr-1" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default PendingAdvsRow;
