import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function PricingPlansErrorState({
  onRetry,
}: {
  onRetry?: () => void;
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        حدث خطأ أثناء تحميل الإحصائيات
      </h3>
      <p className="text-gray-600 mb-4">
        تعذر تحميل إحصائيات الخطط. يرجى المحاولة مرة أخرى.
      </p>
      {onRetry && (
        <Button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          إعادة المحاولة
        </Button>
      )}
    </div>
  );
}
