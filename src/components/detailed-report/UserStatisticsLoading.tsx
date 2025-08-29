import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function UserStatisticsLoading() {
  return (
    <Card className="flex flex-col gap-0 pb-0! bg-card max-w-sm h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-[60%_auto] items-center px-4">
        {/* Chart skeleton */}
        <div className="aspect-square max-h-80 w-full flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
          </div>
        </div>

        {/* Legend skeleton */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
