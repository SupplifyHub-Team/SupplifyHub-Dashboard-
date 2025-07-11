"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { userType: "clients", visitors: 275, fill: "var(--color-chart-clients)" },
  {
    userType: "suppliers",
    visitors: 200,
    fill: "var(--color-chart-suppliers)",
  },
  {
    userType: "jobSeekers",
    visitors: 187,
    fill: "var(--color-chart-job-seekers)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  clients: {
    label: "العملاء",
    color: "var(--chart-1)",
  },
  suppliers: {
    label: "الموردين",
    color: "var(--chart-2)",
  },
  jobSeekers: {
    label: " الباحثين عن عمل",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function UserStatistics() {
  return (
    <Card className="flex flex-col gap-0 pb-0! bg-white max-w-sm  h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-[60%_auto] items-center  px-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-80 w-full ">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="userType"
              innerRadius="50%"
            />
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col gap-3">
          {chartData.map((item) => (
            <div key={item.userType} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-[12px] text-muted-foreground">
                {chartConfig[item.userType as keyof typeof chartConfig]?.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
