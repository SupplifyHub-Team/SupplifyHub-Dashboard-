import { StatCard } from "@/components/cards/StatCard";
import StatCardSkeletons from "@/components/cards/StatCardSkeleton";
import { ErrorFetchingData } from "@/components/ErrorFetchingData";
import AdditionalOrdersTable from "@/components/tables/additional-tables/additional-orders/AdditionalOrdersTable";
import OrderTable from "@/components/tables/order-table/OrderTable";
import Box from "@/components/ui/box";
import useGetStats from "@/hooks/statistics/useGetGeneralStatistics";
import { AlertCircle, CheckCircle, PlayCircle, RotateCcw } from "lucide-react";

const OrdersManagementPage = () => {
  const { data, isPending, error, refetch } =
    useGetStats<IOrderStatusStatistic>("ordersStatus", "orders");

  if (isPending) {
    return (
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap gap-3 mt-3">
        <StatCardSkeletons />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid bg-background rounded-2xl shadow-lg  grid-cols-1 gap-3 mt-3">
        <ErrorFetchingData onRetry={() => refetch?.()} />
      </div>
    );
  }

  return (
    <Box className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 gap-6">
        <StatCard
          title={`${data?.data[0].status}`}
          change={`${data?.data[0].newThisMonth} طلبات مكتملة جدد هذا الشهر`}
          value={`${data?.data[0].totalCount}`}
          changeDirection="up"
          icon={<CheckCircle />}
          color="blue"
        />
        <StatCard
          title={`${data?.data[1].status}`}
          value={`${data?.data[1].totalCount}`}
          change={`${data?.data[1].newThisMonth} طلبات قيد التنفيذ جدد هذا الشهر`}
          changeDirection="up"
          icon={<AlertCircle />}
          color="yellow"
        />
        <StatCard
          title={`${data?.data[2].status}`}
          value={`${data?.data[2].totalCount}`}
          change={`${data?.data[2].newThisMonth} طلبات  مكتملة جدد هذا الشهر`}
          changeDirection="up"
          icon={<PlayCircle />}
          color="green"
        />
        <StatCard
          title={`${data?.data[3].status}`}
          value={`${data?.data[3].totalCount}`}
          change={`${data?.data[3].newThisMonth} طلبات  فاشله جدد هذا الشهر`}
          changeDirection="up"
          icon={<RotateCcw />}
          color="pink"
        />
      </div>
      <OrderTable />
    
      <AdditionalOrdersTable />
    </Box>
  );
};

export default OrdersManagementPage;
