import { LayoutDashboard } from "lucide-react";
import OverviewStats from "./OverviewStats";

export default function Overview() {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-base font-semibold">
        <LayoutDashboard className="text-indigo-500 " strokeWidth={2.3} />
        <span>نظرة عامة </span>
      </h2>
      <OverviewStats />
    </div>
  );
}
