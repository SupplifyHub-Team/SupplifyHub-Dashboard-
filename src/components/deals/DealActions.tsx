import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import usePatchDeal from "@/hooks/deals/usePatchDeal";
import { CheckCircle, XCircle } from "lucide-react";

export default function DealActions({ deal }: { deal: IDeal }) {
  const { mutate } = usePatchDeal();

  const handleAccept = () => {
    mutate({ dealId: String(deal.dealId), operationType: "Accept" });
  };

  const handleReject = () => {
    mutate({ dealId: String(deal.dealId), operationType: "Cancel" });
  };

  return (
    <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4">
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
        <Button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <CheckCircle className="w-4 h-4" /> تأكيد
        </Button>
        <Button
          onClick={handleReject}
          variant="destructive"
          className="flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <XCircle className="w-4 h-4" /> رفض
        </Button>
      </div>
    </CardFooter>
  );
}
