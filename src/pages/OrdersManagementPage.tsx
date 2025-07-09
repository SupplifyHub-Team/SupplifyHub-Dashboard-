import { StatCard } from "@/components/cards/StatCard";
import OrderTable from "@/components/tables/order-table/OrderTable";
import Box from "@/components/ui/box";
import { AlertCircle, CheckCircle, PlayCircle, RotateCcw } from "lucide-react";

const OrdersManagementPage = () => {
  return (
    <Box className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 gap-6">
        <StatCard
          title="Completed"
          value={16}
          change="+8 هذا الشهر"
          changeDirection="up"
          icon={<CheckCircle />}
          color="green"
        />
        <StatCard
          title="Failed"
          value={16}
          change="+8 هذا الشهر"
          changeDirection="down"
          icon={<AlertCircle />}
          color="pink"
        />
        <StatCard
          title="In progress"
          value={25}
          change="+8 هذا الشهر"
          changeDirection="up"
          icon={<PlayCircle />}
          color="yellow"
        />
        <StatCard
          title="Active"
          value={5}
          change="+5 هذا الشهر"
          changeDirection="up"
          icon={<RotateCcw />}
          color="blue"
        />
      </div>
      <OrderTable />
    </Box>
  );
};

export default OrdersManagementPage;
