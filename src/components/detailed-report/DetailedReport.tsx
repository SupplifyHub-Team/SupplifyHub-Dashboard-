import { FileText } from "lucide-react";
import { UserStatistics } from "./UserStatistics";
import { OrderStatistics } from "./OrderStatistics";

export default function DetailedReport() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold mb-3">
          <FileText className="text-primary " strokeWidth={2.3} />
          <span className="text-white">تقرير مفصل</span>
        </h2>
        {/* <Button variant="default" className="text-white border-primary">
          <Download className="w-4 h-4 mr-2" />
          تحميل التقرير
        </Button> */}
      </div>
      <div className="grid lg:grid-cols-[auto_1fr] gap-4">
        <UserStatistics />
        <OrderStatistics />
      </div>
    </div>
  );
}
