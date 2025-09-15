import { Card, CardContent } from "@/components/ui/card";
import DealSide from "./DealSide";
import DealActions from "./DealActions";

export default function DealCard({ deal }: { deal: IDeal }) {
  return (
    <Card className="border-0 rounded-2xl bg-[var(--color-card)] text-[var(--color-card-foreground)] shadow-xl">
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DealSide
            title="المورد"
            details={deal.supplierDealDetails}
            tone="supplier"
          />
          <DealSide
            title="العميل"
            details={deal.clientDealDetails}
            tone="client"
          />
        </div>
      </CardContent>

      <DealActions deal={deal} />
    </Card>
  );
}
