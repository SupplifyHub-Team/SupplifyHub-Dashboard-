import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

interface ErrorFetchingDataProps {
  onRetry?: () => void;
}

export function ErrorFetchingData({ onRetry }: ErrorFetchingDataProps) {
  return (
    <div className="flex-1!  w-full flex flex-col items-center justify-center py-16">
      <div className="text-red-500 mb-4">
        <AlertCircle className="w-16 h-16" />
      </div>
      <h3 className="text-lg font-medium text-gray-100 mb-2 text-center">
        فشل في تحميل البيانات
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6 max-w-md">
        حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.
      </p>
      {onRetry && (
        <Button onClick={onRetry}>
          <RefreshCw className="w-4 h-4" />
          إعادة المحاولة
        </Button>
      )}
    </div>
  );
}
