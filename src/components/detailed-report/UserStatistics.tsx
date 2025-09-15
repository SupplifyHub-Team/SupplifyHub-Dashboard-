"use client";

import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useGetUserStatistics from "@/hooks/statistics/useGetUserStatistics";
import { UserStatisticsLoading } from "./UserStatisticsLoading";
import { ErrorFetchingData } from "../ErrorFetchingData";

export const description = "A simple pie chart";

/// Define the chart config with Arabic labels and custom colors
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
  "active-users": {
    label: "المستخدمين النشطين",
    color: "var(--color-chart-active-users)",
  },
  "inactive-users": {
    label: "المستخدمين غير النشطين",
    color: "var(--color-chart-inactive-users)",
  },
} satisfies ChartConfig;

// Helper to return color based on category
const getFillColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "clients":
      return "var(--color-chart-clients)";
    case "suppliers":
      return "var(--color-chart-suppliers)";
    case "active-users":
      return "var(--color-chart-active-users)";
    case "inactive-users":
      return "var(--destructive)";
    default:
      return "#ccc";
  }
};

export function UserStatistics() {
  const { data, isPending, error, refetch } = useGetUserStatistics();

  // Ensure the transformed data has correct userType keys that match chartConfig
  const transformedData =
    data?.data
      .map((item) => {
        const key = item.category.toLowerCase().trim().replace(/\s/g, "-");
        return {
          userType: key,
          visitors: item.totalCount,
          fill: getFillColor(key),
        };
      })
      .filter(
        (item) => chartConfig[item.userType as keyof typeof chartConfig]
      ) || [];

  if (isPending) {
    return <UserStatisticsLoading />;
  }

  return (
    <Card className="flex flex-col gap-0  bg-card max-w-sm h-fit min-h-64">
      <CardHeader className="items-center pb-0">
        <CardTitle>احصائيات المستخدمين</CardTitle>
      </CardHeader>
      {error ? (
        <CardContent className="flex-1 grid items-center px-4">
          <ErrorFetchingData onRetry={() => refetch()} />
        </CardContent>
      ) : (
        <CardContent className="flex-1 grid items-center ">
          <ChartContainer
            config={chartConfig}
            className="aspect-square max-h-80 w-full"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
                animationDuration={100}
                cursor={true}
              />
              <Pie
                data={transformedData}
                dataKey="visitors"
                nameKey="userType"
                innerRadius="50%"
              >
                {transformedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="flex flex-col gap-3">
            {transformedData.map((item) => (
              <div key={item.userType} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm text-white">
                  {
                    chartConfig[item.userType as keyof typeof chartConfig]
                      ?.label
                  }
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
