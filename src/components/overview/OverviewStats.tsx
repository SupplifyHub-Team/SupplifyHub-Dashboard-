import { ChartBarStacked, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "../cards/StatCard";

export default function OverviewStats()
import useGetGeneralStatistics from "@/hooks/statistics/useGetGeneralStatistics";
import { ErrorFetchingData } from "../ErrorFetchingData";
import StatCardSkeletons from "../cards/StatCardSkeleton";

export default function OverviewStats() {
  const { data, isPending, error, refetch } = useGetGeneralStatistics();

  if (isPending) {
    return (
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap gap-3 mt-3">
        <StatCardSkeletons />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid bg-white rounded-2xl shadow-lg  grid-cols-1 gap-3 mt-3">
        <ErrorFetchingData onRetry={() => refetch?.()} />
      </div>
    );
  }
  
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  flex-wrap gap-3 mt-3">
      <StatCard
        color="indigo"
        change="+8 هذا الشهر"
        value="20"
        title="كل المستخدمين"
        icon={<Users />}
      />
      <StatCard
        color="pink"
        change="+8 هذا الشهر"
        value="20"
        title="كل الطلبات"
        icon={<ShoppingCart />}
      />
      <StatCard
        color="green"
        change="+8 هذا الشهر"
        value="20"
        title="فئات"
        icon={<ChartBarStacked />}
      />
    </div>
  );
}
