import SubscribedTable from "@/components/tables/subscribed-suppliers-table/active-subscribers/SubscribedSuppliersTable";

import PricingPlansList from "@/components/pricing-plan/PricingPlansList";

import PendingSubscriptionsTable from "@/components/tables/subscribed-suppliers-table/pending-subscribers/PendingSubscriptionsTable";
//

const PricingPlanPage = () => {
  return (
    <div className="flex flex-col gap-1 ">
      {/* <PricingPlansStats /> */}


      <SubscribedTable />

      <PendingSubscriptionsTable />
    </div>
  );
};

export default PricingPlanPage;
