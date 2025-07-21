import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, RefreshCw } from "lucide-react";

interface UserStatisticsErrorProps {
  onRetry?: () => void;
}

export function UserStatisticsError({ onRetry }: UserStatisticsErrorProps) {
  return (
    <Card className="flex flex-col gap-0 pb-0! bg-white max-w-sm h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-red-500 mb-4">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">
          فشل في تحميل الإحصائيات
        </h3>
        <p className="text-xs text-muted-foreground text-center mb-4">
          حدث خطأ أثناء تحميل بيانات المستخدمين
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            <RefreshCw className="w-3 h-3" />
            إعادة المحاولة
          </button>
        )}
      </CardContent>
    </Card>
  );
}
