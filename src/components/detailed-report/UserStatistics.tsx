"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useGetUserStatistics from "@/hooks/statistics/useGetUserStatistics";
import { UserStatisticsLoading } from "./UserStatisticsLoading";
import { UserStatisticsError } from "./UserStatisticsError";
import { UserStatisticsEmpty } from "./UserStatisticsEmpty";

export const description = "A simple pie chart";

// Define the chart config with Arabic labels and custom colors
const chartConfig = {
  visitors: {
    label: "عدد المستخدمين",
  },
  clients: {
    label: "العملاء",
    color: "var(--color-chart-clients)",
  },
  suppliers: {
    label: "الموردين",
    color: "var(--color-chart-suppliers)",
  },
  jobseekers: {
    label: "الباحثين عن عمل",
    color: "var(--color-chart-job-seekers)",
  },
} satisfies ChartConfig;

// Helper to return color based on category
const getFillColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "clients":
      return "var(--color-chart-clients)";
    case "suppliers":
      return "var(--color-chart-suppliers)";
    case "jobseekers":
      return "var(--color-chart-job-seekers)";
    default:
      return "#ccc";
  }
};

export function UserStatistics() {
  const { data, isPending, error, refetch } = useGetUserStatistics();

  const transformedData =
    data?.data.map((item) => ({
      userType: item.category.toLowerCase(),
      visitors: item.totalCount,
      fill: getFillColor(item.category),
    })) || [];

  if (isPending) {
    return <UserStatisticsLoading />;
  }

  if (error) {
    return <UserStatisticsError onRetry={() => refetch?.()} />;
  }

  if (!transformedData || transformedData.length === 0) {
    return <UserStatisticsEmpty />;
  }

  return (
    <Card className="flex flex-col gap-0 pb-0! bg-white max-w-sm h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-[60%_auto] items-center px-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-80 w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={transformedData}
              dataKey="visitors"
              nameKey="userType"
              innerRadius="50%"
            />
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col gap-3">
          {transformedData.map((item) => (
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
