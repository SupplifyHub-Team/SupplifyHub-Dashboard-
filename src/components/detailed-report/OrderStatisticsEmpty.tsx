import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import SelectYear from "../SelectYear";

export function OrderStatisticsEmpty() {
  return (
    <Card className="flex flex-col w-full!">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>احصائيات الطلبات</CardTitle>
          <SelectYear />
        </div>
        <div className="mx-auto mt-3 flex items-center gap-2">
          <div className="size-3 bg-gray-200 rounded-full" />
          <span className="text-muted-foreground">طلبات / شهر</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex-1! max-h-96 w-full flex flex-col items-center justify-center py-16">
          <div className="text-muted-foreground mb-4">
            <BarChart3 className="w-16 h-16" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            لا توجد بيانات طلبات
          </h3>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            لا توجد طلبات مسجلة للسنة المحددة في الوقت الحالي
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
