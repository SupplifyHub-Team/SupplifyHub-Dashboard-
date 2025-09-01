import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import OrderDescDetailsTable from "./OrderDescDetailsTable";

export default function OrderDescDetails(   
    { products }: { products: IOrderProduct[] }) {
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
      <OrderDescDetailsTable products={products} />
    </ResponsiveModal>
  );
}
