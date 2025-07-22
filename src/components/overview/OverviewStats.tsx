import { ChartBarStacked, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "../cards/StatCard";

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
        change={`${data?.data[0].newUsersThisMonth} مستخدمين جدد هذا الشهر`}
        value={`${data?.data[0].totalUsers}`}
        title="كل المستخدمين"
        icon={<Users />}
      />
      <StatCard
        color="pink"
        change={`${data?.data[0].newOrdersThisMonth} طلبات جديدة هذا الشهر`}
        value={`${data?.data[0].totalOrders}`}
        title="كل الطلبات"
        icon={<ShoppingCart />}
      />
      <StatCard
        color="green"
        change={`${data?.data[0].newCategoriesThisMonth} فئات جديدة هذا الشهر`}
        value={`${data?.data[0].totalCategories}`}
        title="فئات"
        icon={<ChartBarStacked />}
      />
    </div>
  );
}
