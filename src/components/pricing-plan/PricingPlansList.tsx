import useGetAllPlans from "@/hooks/plans/useGetAllPlans";
import PricingPlanCard from "./pricing-plan-card/PricingPlanCard";
import PricingPlanSkeletonList from "./PricingPlanSkeleton";
import { ErrorFetchingData } from "../ErrorFetchingData";

export default function PricingPlansList() {
  const { data, isPending, error, refetch } = useGetAllPlans();

  if (error) {
    return <ErrorFetchingData onRetry={refetch} />;
  }

  if (isPending || !data) {
    return <PricingPlanSkeletonList />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
      {data?.data.map((plan) => (
        <PricingPlanCard key={plan.id} plan={plan} />
      ))}
    </ul>
  );
}
