import { LayoutDashboard } from "lucide-react";
import OverviewStats from "./OverviewStats";

export default function Overview() {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-base font-semibold">
        <LayoutDashboard className="text-primary " strokeWidth={2.3} />
        <span className="text-white">نظرة عامة </span>
      </h2>
      <OverviewStats />
    </div>
  );
}
