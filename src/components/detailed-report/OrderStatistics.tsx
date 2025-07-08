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

export const description = "A bar chart";

const chartData = [
  { month: "January", orders: 186 },
  { month: "February", orders: 305 },
  { month: "March", orders: 237 },
  { month: "April", orders: 73 },
  { month: "May", orders: 209 },
  { month: "June", orders: 214 },
  { month: "July", orders: 214 },
  { month: "August", orders: 214 },
  { month: "September", orders: 214 },
  { month: "October", orders: 214 },
  { month: "November", orders: 214 },
  { month: "December", orders: 214 },
];

const chartConfig = {
  orders: {
    label: "الطلبات لكل شهر",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function OrderStatistics() {
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
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
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
