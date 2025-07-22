"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import SelectYear from "../SelectYear";
import useGetOrdersStatistics from "@/hooks/statistics/useGetOrdersStatistics";
import { OrderStatisticsLoading } from "./OrderStatisticsLoading";
import { OrderStatisticsError } from "./OrderStatisticsError";
import { OrderStatisticsEmpty } from "./OrderStatisticsEmpty";

export const description = "A bar chart";

// Optional: translate month number to name
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const chartConfig = {
  orders: {
    label: "الطلبات لكل شهر",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function OrderStatistics() {
  const { data, isPending, error, refetch } = useGetOrdersStatistics();
  console.log(data);
  // Transform API data
  const transformedData =
    data?.data.map((item) => ({
      month: monthNames[item.month - 1],
      orders: item.orderCount,
    })) || [];

  if (isPending) {
    return <OrderStatisticsLoading />;
  }

  if (error) {
    return <OrderStatisticsError onRetry={() => refetch?.()} />;
  }

  if (!transformedData || transformedData.length === 0) {
    return <OrderStatisticsEmpty />;
  }

  return (
    <Card className="flex flex-col w-full!">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>احصائيات الطلبات</CardTitle>
          <SelectYear />
        </div>
        <div className="mx-auto mt-3 flex items-center gap-2">
          <div className="size-3 bg-chart-clients rounded-full" />
          <span>طلبات / شهر</span>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="flex-1! max-h-96 w-full"
          config={chartConfig}>
          <BarChart data={transformedData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              animationDuration={0}  
            />
            <Bar
              dataKey="orders"
              fill="var(--color-chart-clients)"
              radius={10}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
