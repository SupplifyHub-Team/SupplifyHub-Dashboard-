import SubscribedTable from "@/components/tables/subscribed-suppliers-table/SubscribedSuppliersTable";

import PricingPlansList from "@/components/pricing-plan/PricingPlansList";
import PricingPlansStats from "@/components/pricing-plan/stats/PricingPlansStats";

const PricingPlanPage = () => {
  return (
    <div className="flex flex-col gap-1 ">
      <PricingPlansStats />

      <PricingPlansList />

      <SubscribedTable />
    </div>
  );
};

export default PricingPlanPage;
