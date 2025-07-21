import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, RefreshCw } from "lucide-react";
import SelectYear from "../SelectYear";

interface OrderStatisticsErrorProps {
  onRetry?: () => void;
}

export function OrderStatisticsError({ onRetry }: OrderStatisticsErrorProps) {
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
          <div className="text-red-500 mb-4">
            <AlertCircle className="w-16 h-16" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
            فشل في تحميل إحصائيات الطلبات
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6 max-w-md">
            حدث خطأ أثناء تحميل بيانات الطلبات الشهرية. يرجى المحاولة مرة أخرى.
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              <RefreshCw className="w-4 h-4" />
              إعادة المحاولة
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
