import { StatCard } from "@/components/cards/StatCard";
import UsersTable from "@/components/tables/users-table/active-users/UsersTable";
import Box from "@/components/ui/box";
import { BriefcaseBusiness, Container, Handshake } from "lucide-react";
import StatCardSkeletons from "@/components/cards/StatCardSkeleton";
import { ErrorFetchingData } from "@/components/ErrorFetchingData";
import useGetStats from "@/hooks/statistics/useGetGeneralStatistics";
import PendingUserTable from "@/components/tables/users-table/pending-users/PendingUserTable";

export default function UsersManagementPage() {
  const { data, isPending, error, refetch } = useGetStats<IUserStatistics>(
    "usersStatus",
    "users"
  );

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
    <Box className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 gap-6">
        <StatCard
          title={`${data?.data[0].category}`}
          change={`${data?.data[0].newThisMonth} طلبات مكتملة جدد هذا الشهر`}
          value={`${data?.data[0].totalCount}`}
          changeDirection="up"
          color="pink"
          icon={<Handshake className="w-6 h-6 cursor-pointer" />}
        />

        <StatCard
          title={`${data?.data[1].category}`}
          change={`${data?.data[1].newThisMonth} طلبات مكتملة جدد هذا الشهر`}
          value={`${data?.data[1].totalCount}`}
          changeDirection="up"
          color="green"
          icon={<Container className="w-6 h-6 cursor-pointer" />}
        />

        <StatCard
          title={`${data?.data[2].category}`}
          change={`${data?.data[2].newThisMonth} طلبات مكتملة جدد هذا الشهر`}
          value={`${data?.data[2].totalCount}`}
          changeDirection="up"
          color="yellow"
          icon={<BriefcaseBusiness className="w-6 h-6 cursor-pointer" />}
        />
      </div>

      <Box className="w-full flex flex-col gap-6 md:gap-15 ">
        <UsersTable />

        <PendingUserTable />
      </Box>
    </Box>
  );
}
