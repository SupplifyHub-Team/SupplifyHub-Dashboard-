import { ChartBarStacked, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "../cards/StatCard";

export default function OverviewStats() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  flex-wrap gap-3 mt-3">
      <StatCard
        color="indigo"
        change="5.39% فترة تغيير"
        value="92456"
        title="كل المستخدمين"
        icon={<Users />}
      />
      <StatCard
        color="pink"
        change="5.39% فترة تغيير"
        value="32,28"
        title="كل الطلبات"
        icon={<ShoppingCart />}
      />
      <StatCard
        color="green"
        change="6.84% فترة تغيير"
        value="298"
        title="فئات"
        icon={<ChartBarStacked/>}
      />
    </div>
  );
}
