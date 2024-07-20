import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Sale = {
  date: string;
  value: number;
};

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type ChartProps = {
  chartData: Sale[];
};

export const Chart = (props: ChartProps) => {
  console.log(props.chartData);

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Sales Chart - Month of July</CardTitle>
        <CardDescription>Showing Sales for the last 7 Days</CardDescription>
      </CardHeader>
      <CardContent className="w-full ">
        <ChartContainer config={chartConfig} className="w-full">
          <AreaChart
            accessibilityLayer
            data={props.chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="sales"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
