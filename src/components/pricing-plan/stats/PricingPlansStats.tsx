import { Landmark } from "lucide-react";
import { Palette, StatCard } from "../../cards/StatCard";
import useGetPlansStatistics from "@/hooks/plans/useGetPlansStatistics";
import PricingPlansStatsSkeleton from "./PricingPlansStatsSkeleton";
import PricingPlansErrorState from "./PricingPlansErrorState";

// Define possible colors
const colors: Palette[] = [
  "blue",
  "green",
  "purple",
  "yellow",
  "indigo",
  "pink",
];

function getRandomColor(index: number) {
  return colors[index % colors.length];
}

export default function PricingPlansStats() {
  const { data, isPending, error, refetch } = useGetPlansStatistics();

  const stats = data?.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-2 gap-6">
      {isPending ? (
        // Show 6 skeleton cards
        <PricingPlansStatsSkeleton />
      ) : error ? (
        <PricingPlansErrorState onRetry={() => refetch?.()} />
      ) : (
        stats.map((plan, index) => (
          <StatCard
            key={plan.planName}
            title={plan.planName}
            value={plan.totalSubscribers}
            change={`+${plan.newSubscribersThisMonth} هذا الشهر`}
            changeDirection="up"
            color={getRandomColor(index)}
            icon={
              <Landmark color="#212bb5" className="w-6 h-6 cursor-pointer" />
            }
          />
        ))
      )}
    </div>
  );
}
