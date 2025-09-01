import { TableCell, TableRow } from "@/components/ui/table";
import useAcceptPendingAdvs from "@/hooks/advs/useAcceptPendingAdvs";

import { format } from "date-fns";
import { CircleCheck, CircleX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import useRejectPendingAdvs from "@/hooks/advs/useRejectPendingAdvs";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { Button } from "@/components/ui/button";
import { AreYouSure } from "@/components/AreYouSure";

const PendingAdvsRow = ({ pendingAdv }: { pendingAdv: IPendingAdv }) => {
  const { mutate } = useAcceptPendingAdvs();
  const { mutate: reject } = useRejectPendingAdvs();

  const handleAccept = () => mutate(pendingAdv.id);
  const handleReject = () => reject(pendingAdv.id);

  return (
    <TableRow className=" transition-colors duration-200">
      <TableCell className="font-medium text-white">
        {pendingAdv.title || "بدون عنوان"}
      </TableCell>

      <TableCell>
        {pendingAdv.imagUrl ? (
          <img
            src={pendingAdv.imagUrl}
            alt={pendingAdv.title}
            className="h-15 w-15 object-cover rounded-full text-white shadow-sm ring-0.5 ring-gray-900/10"
          />
        ) : (
          <span className="text-gray-400 text-sm">لا يوجد صورة</span>
        )}
      </TableCell>

      <TableCell className="text-white">{pendingAdv.createdBy}</TableCell>

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
        <span>
          <div className="flex items-center gap-2">
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
        </span>
      </TableCell>
    </TableRow>
  );
};

export default PendingAdvsRow;
