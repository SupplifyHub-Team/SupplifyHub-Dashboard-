import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export function UserStatisticsEmpty() {
  return (
    <Card className="flex flex-col gap-0 pb-0! bg-white max-w-sm h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-muted-foreground mb-4">
          <BarChart3 className="w-12 h-12" />
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          لا توجد بيانات متاحة
        </h3>
        <p className="text-xs text-muted-foreground text-center">
          لا توجد إحصائيات للمستخدمين في الوقت الحالي
        </p>
      </CardContent>
    </Card>
  );
}
