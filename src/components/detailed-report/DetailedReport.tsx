import { Download, FileText } from "lucide-react";
import { UserStatistics } from "./UserStatistics";
import { OrderStatistics } from "./OrderStatistics";
import { Button } from "../ui/button";

export default function DetailedReport() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold mb-3">
          <FileText className="text-indigo-500 " strokeWidth={2.3} />
          <span>تقرير مفصل</span>
        </h2>
        <Button variant="outline" className="text-primary border-primary">
          <Download className="w-4 h-4 mr-2" />
          تحميل التقرير
        </Button>
      </div>
      <div className="grid lg:grid-cols-[auto_1fr] gap-4">
        <UserStatistics />
        <OrderStatistics />
      </div>
    </div>
  );
}
