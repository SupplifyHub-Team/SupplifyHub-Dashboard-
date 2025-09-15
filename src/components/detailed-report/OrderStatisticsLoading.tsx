import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import SelectYear from "../SelectYear";

export function OrderStatisticsLoading() {
  return (
    <Card className="flex flex-col w-full!">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>احصائيات الطلبات</CardTitle>
          <SelectYear />
        </div>
        <div className="mx-auto mt-3 flex items-center gap-2">
          <div className="size-3 bg-gray-200 rounded-full animate-pulse" />
          <span className="text-muted-foreground">طلبات / شهر</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex-1! max-h-96 w-full flex flex-col items-center justify-center py-12">
          <div className="flex items-center gap-3 mb-6">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
            <span className="text-sm text-muted-foreground">
              جاري تحميل البيانات...
            </span>
          </div>

          {/* Chart skeleton */}
          <div className="w-full space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-end gap-2">
                <div className="text-xs text-gray-400 w-8">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                </div>
                <div
                  className="bg-gray-200 rounded-t animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 20}px`,
                    width: "40px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
