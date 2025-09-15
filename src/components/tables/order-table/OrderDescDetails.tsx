import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import OrderDescDetailsTable from "./OrderDescDetailsTable";

export default function OrderDescDetails(   
    { orderItems }: { orderItems: IOrderItems[] }) {
  return (
    <ResponsiveModal
      trigger={
        <Button variant="default" size="sm" className="w-fit">
          <Info  className="" />
        </Button>
      }
      maxWidth="xl"
      height="90vh"
      scrollable={true}
    >
      <OrderDescDetailsTable orderItems={orderItems} />
    </ResponsiveModal>
  );
}
