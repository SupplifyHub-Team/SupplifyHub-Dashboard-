import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import usePatchAdditionalAdvs from "@/hooks/additionals/advs/usePatchAdditionalAdvs";


export default function AdditionalAdvsTableRow({
  additionalAdvs,
}: {
  additionalAdvs: IAdditionalAdvs;
}) {
  const { mutate } = usePatchAdditionalAdvs();

  const handleAccept = () => {
    mutate({ requestId: additionalAdvs.requestId, operationType: "Accept" });
  };

  const handleReject = () => {
    mutate({ requestId: additionalAdvs.requestId, operationType: "Cancel" });
  };

  return (
    <TableRow className=" transition-colors">
      <TableCell>{additionalAdvs.name}</TableCell>
      <TableCell>{additionalAdvs.email}</TableCell>
      <TableCell>{additionalAdvs.phone}</TableCell>
      <TableCell>{additionalAdvs.amount}</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <CircleCheck
                  onClick={handleAccept}
                  color="#16a34a"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-green-600 text-white">
                <p>قبول الطلب</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <CircleX
                  onClick={handleReject}
                  color="#dc2626"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-red-600 text-white">
                <p>رفض الطلب</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
    </TableRow>
  );
}
