import { ChartBarStacked, ShoppingCart, Users } from "lucide-react";
import { StatCard } from "../cards/StatCard";

export default function OverviewStats() {




  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  flex-wrap gap-3 mt-3">
      <StatCard
        color="indigo"
        change="+ 1 هذا الشهر"
        value="25"
        title="كل المستخدمين"
        icon={<Users />}
      />
      <StatCard
        color="pink"
        change="+ 1 هذا الشهر"
        value="25"
        title="كل الطلبات"
        icon={<ShoppingCart />}
      />
      <StatCard
        color="green"
        change="+ 1 هذا الشهر"
        value="25"
        title="فئات"
        icon={<ChartBarStacked />}
      />
    </div>
  );
}
