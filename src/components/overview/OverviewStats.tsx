import {
  ChartBarStacked,
  ShoppingCart,
  Users,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { StatCard } from "../cards/StatCard";
import useGetGeneralStatistics from "@/hooks/statistics/useGetGeneralStatistics";
import { Skeleton } from "@/components/ui/skeleton";

const StatCardSkeleton = () => (
  <div className="bg-white rounded-lg border p-6">
    <div className="flex items-center justify-between mb-4">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-6 w-6 rounded-full" />
    </div>
    <Skeleton className="h-8 w-16 mb-2" />
    <Skeleton className="h-4 w-32" />
  </div>
);

const ErrorState = ({ onRetry }: { onRetry?: () => void }) => (
  <div className="col-span-full bg-white rounded-lg border p-8">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-red-500 mb-4">
        <AlertCircle className="h-12 w-12" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        فشل في تحميل الإحصائيات العامة
      </h3>
      <p className="text-gray-600 mb-6 max-w-md">
        حدث خطأ أثناء تحميل البيانات الإحصائية. يرجى المحاولة مرة أخرى.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          <RefreshCw className="h-4 w-4" />
          إعادة المحاولة
        </button>
      )}
    </div>
  </div>
);

export default function OverviewStats() {
  const { data, isPending, error, refetch } = useGetGeneralStatistics();

  if (isPending) {
    return (
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap gap-3 mt-3">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 gap-3 mt-3">
        <ErrorState onRetry={() => refetch?.()} />
      </div>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-3 mt-3">
        <div className="col-span-full bg-white rounded-lg border p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-muted-foreground mb-4">
              <ChartBarStacked className="h-12 w-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              لا توجد بيانات متاحة
            </h3>
            <p className="text-gray-600">
              لا توجد إحصائيات عامة متاحة في الوقت الحالي
            </p>
          </div>
        </div>
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
