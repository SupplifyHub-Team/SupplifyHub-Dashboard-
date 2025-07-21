import { Landmark } from "lucide-react";
import { StatCard } from "./cards/StatCard";

export default function PricingPlansStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-2 gap-6">
      <StatCard
        title=" الخطه المجانيه"
        value={128}
        change="+8 هذا الشهر"
        changeDirection="up"
        color="blue"
        icon={<Landmark color="#212bb5" className="w-6 h-6 cursor-pointer" />}
      />

      <StatCard
        title=" الخطة المهنية"
        value={218}
        change="+8 هذا الشهر"
        changeDirection="up"
        color="green"
        icon={<Landmark color="#02f71f" className="w-6 h-6 cursor-pointer" />}
      />

      <StatCard
        title="الخطة المميزة"
        value={298}
        change="+8 هذا الشهر"
        changeDirection="up"
        color="purple"
        icon={<Landmark color="#f7021b" className="w-6 h-6 cursor-pointer" />}
      />
    </div>
  );
}
